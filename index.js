var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config/database');

mongoose.connect(config.uri,function(err){
	if (err){
		console.log('couldnot connect the database' + config.db);
	}
	else{
		console.log('connected to database' + config.db);
	}
});

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(8080, function(){
	console.log('listening to port 8080');
});