const friendsList = require("../data/friends.js");


module.exports = function (app) {

    // Show API data by converting to JSON and rendering in browser
    app.get("/api/friendsdata", function (req, res) {
        // console.log(friendsData);
        res.json(friendsList);
    });

    // Add data to friends list!
    app.post("/api/friends", function (req, res) {

        // Establish new Friend
        newFriend = req.body

        // Setup friend vars
        let totalDiff = 0;
        let bestFriend = 0;

        // For each friend, loop through scores
        friendsList.forEach((listData, index) => {

            let currentDiff = 0;

            // Loop through scores array and compare
            listData.scores.forEach((scoreData, index) => {

                // Calc difference
                let scoreDiff = Math.abs(scoreData - newFriend.scores[index]);
                currentDiff += scoreDiff;
            });

            // If better than last friend, make new best friend
            if (currentDiff > totalDiff) {
                bestFriend = index;
            }
        })

        // Add new friend to list
        friendsList.push(newFriend)

        // Send
        res.json(friendsList[bestFriend]);
    });
}