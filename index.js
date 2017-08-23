var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config/database');
var User = require('./app/models/user');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect(config.uri,function(err){
	if (err){
		console.log('couldnot connect the database' + config.db);
	}
	else{
		console.log('connected to database' + config.db);
	}
});

app.post('/users',function(req,res){
	//res.send('testing user route');
	var user = new User();
	user.username = req.body.username;
	user.password = req.body.password;
	user.email = req.body.email;
	user.save();
	res.send('user created!');
});

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(process.env.PORT || 8080, function(){
	console.log('listening to port 8080');
});