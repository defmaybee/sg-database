var express = require("express");
var app = express();
var db = require("./models");
var bodyParser = require("body-parser");

var exRoutes = require('./routes/exercise');

app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


app.get("/", function(req, res){
	res.render("index");
});

app.get("/results", function(req, res){
	res.sendFile(__dirname + "/views/" + "results.html");
});

app.get('/form', async (req,res) => {

	
	var excounts = {};
	var cluster = ["alter", "ort", "organisationsform","teil","gruppengrösse", "schwerpunkt_taktik", "schwerpunkt_fitness", "schwerpunkt_psycho_social", "schwerpunkt_sdg"];

	
		for (const cl of cluster) {
			
				await db.Exercise.aggregate([
				           {$match: 
								req.query
            						
        			},
				           {"$group" : {_id:"$" + cl, count:{$sum:1}}} 
				    ], function (err, result) {
				        if (err) {
				            next(err);
				        } else {				          
				              
				            excounts[cl] = { result };

				            
				        }
				    });	
				
		}
		
		res.render("form",{excounts:excounts});
})

app.use('/api/exercises', exRoutes);

app.listen(3000, function() {
	console.log("Server is running");
});

