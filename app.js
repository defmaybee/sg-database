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
	res.sendFile("index.html");
});

app.get('/form', async (req,res) => {

	var excounts = {};
	var cluster = ["alter", "ort", "organisationsform","teil","gruppengrösse", "schwerpunkt_taktik", "schwerpunkt_fitness", "schwerpunkt_psycho_social", "schwerpunkt_sdg"];

	
		for (const cl of cluster) {
			
				await db.Exercise.aggregate([
				           {"$group" : {_id:"$" + cl, count:{$sum:1}}} 
				    ], function (err, result) {
				        if (err) {
				            next(err);
				        } else {				          
				            // console.log("*********************************");
				            // console.log(result);
				            // console.log("*********************************");
				            // console.log(cl);		       
				            excounts[cl] = { result };

				            
				        }
				    });	
				
		}
		// res.send(excounts);
		res.render("form",{excounts:excounts});
})

app.use('/api/exercises', exRoutes);

app.listen(3000, function() {
	console.log("Server is running");
});