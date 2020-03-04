// server.js

// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Set up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Data
// =============================================================
// ./app/data/friends.js

// Routes
// =============================================================

require("./app/routing/htmlsRoutes")(app);
require("./app/routing/apiRoutes")(app);


// Starts the Server
// =============================================================
app.listen(PORT, function () {
  console.log("Friend Finder App listening on PORT " + PORT);
});
