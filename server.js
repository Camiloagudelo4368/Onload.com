var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
 require("./routes/htmlRoutes.js")(app);
 require("./routes/categoryApi.js")(app);
 require("./routes/productApi.js")(app);
 require("./routes/userApi.js")(app);
 require("./routes/accountApi.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
// db.sequelize.sync({force:true}).then(function() {
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
