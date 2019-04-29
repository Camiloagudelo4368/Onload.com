var db = require("../models");

module.exports = function (app) {
  app.get("/api/acoount/:user", function (req, res) {
    db.Accounts.findAll({
      where: {
        userId: req.params.user
      }
    }).then(function (user) {
      res.json(user);
    });
  });

  app.post("/api/user", function (req, res) {
    var userObject = {
      alias: req.body.alias,
      number: "1234567",
      initBalance: req.body.ammount,
      balance: req.body.ammount,
      userId: req.body.userId,
      createdAt: Date.now(),
      updatedAt: Date.now()
    }

    db.Users.create(userObject).then(user => {
      res.json(user);
    });
  });
};
