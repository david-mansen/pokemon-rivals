//htmlRoutes.js  contains:
//A GET Route to /survey which should display the survey page.
//A default USE route that leads to home.html which displays the home page.

module.exports = function(app,path){
	// sets up pathing to home 
	app.get("/", function(req, res){
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});

	//pathing to survey
    app.get("/survey", function(req, res){
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});
}