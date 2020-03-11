// apiRoutes.js

// Data
// ===============================================================================
var friendsData = require("../data/friends");

// Logic
// ===============================================================================
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        friendsData.push(newFriend);
    });

};