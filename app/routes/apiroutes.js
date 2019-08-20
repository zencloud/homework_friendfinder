

let friendsData = require("../data/friends.js");

module.exports = function(app) {

    // Show API data by converting to JSON and rendering in browser
    app.get("/api/friendsdata", function(req, res) {
        console.log(friendsData);
        res.json(friendsData);
    });

    // Add data to friends list!
    app.post("/api/friends", function(req, res){
        
        // First, push the data into the array
        friendsData.push(req.body.userdata);

        // Filter Data to find friend
        // DO SOMETHING

        // Return friend
        res.json(friendsData);
    });
}