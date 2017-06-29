
//htmlRoutes.js  contains:
//A GET Route to /survey which should display the survey page.
//A default USE route that leads to home.html which displays the home page.

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

app.use(express.static("app/public"));

//starts the server to begin listening
app.listen(PORT, function(){
	console.log("App listening on PORT " + PORT);
});

require('./app/routing/htmlRoutes.js')(app, path);
require('./app/routing/apiRoutes.js')(app, path, bodyParser);
