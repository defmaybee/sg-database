var express = require('express');
var router = express.Router();
var db = require("../models");
var bodyParser = require("body-parser");

router.get("/query", function(req,res){
	console.log("****************");
	console.log(req.query);
	console.log("****************");
    
db.Exercise.find(req.query)
	.then(function(ex){
		res.send(ex);
	})
	.catch(function(err){
		res.send(err);
	})

});




router.get('/', function(req,res){
	console.log("hit the standargfdsd´route");
	db.Exercise.find()
	.then(function(ex){
		res.send(ex);
	})
	.catch(function(err){
		res.send(err);
	})
});






module.exports = router;









