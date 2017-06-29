
//apiRoutes.js

//A GET route with the url /api/friends. 
//This will be used to display a JSON of all possible friends.

//A POST routes /api/friends. This will be used to handle incoming survey results. 
//This route will also be used to handle the compatibility logic.

module.exports = function(app, path, bodyParser){
	var friends = require("../data/friends.js");

	app.get("/api/friends", function(req, res) {
		res.json(friends);
	});

	app.post("/api/friends", function(req, res){
		var newFriend = req.body;

        var myRating = newFriend.teamRating;
        

        var minimumDifference = 999;
        var minMatchIndex = 0;

        for(let i=0; i<friends.length; i++){
            var difference = myRating - friends[i].teamRating;
            if(difference < 0) difference *= -1;
            
            if(difference < minimumDifference){
                minMatchIndex = i;
                minimumDifference = difference;
            }
        }

        console.log("Your match is:");
        console.log(friends[minMatchIndex]);
        
        friends.push(newFriend);
        res.json(friends[minMatchIndex]);
	});
}



