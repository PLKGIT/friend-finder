// =============================================================
// server.js
// =============================================================

// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Set up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up app to handle data parsing
// =============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))

// Routes
// =============================================================
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Starts the Server
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});