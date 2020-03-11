// htmlRoutes.js

// Require the Path NPM
// ===============================================================================
var path = require("path");

// HTML Routing
// ===============================================================================

module.exports = function (app) {

    // Survey HTML page
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // Default HTML page
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};
