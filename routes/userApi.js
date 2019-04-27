var db = require("../models");

module.exports = function(app) {
  app.get("/api/user/:user", function(req, res) {
    db.User.findOne({
        where:{
            userId: req.params.user
        }
    }).then(function(user) {
      res.json(user);
    });
  });
  
  app.post("/api/user", function(req, res) {
    db.Author.create(req.body).then( user => {
      res.json(user);
    });
  });
};
