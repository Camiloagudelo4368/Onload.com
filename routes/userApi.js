var db = require("../models");

module.exports = function (app) {
  app.get("/api/user/:user", function (req, res) {
    db.Users.findOne({
      include: [
      {
        model: db.Accounts,
        include:[db.Banks]
      },
        {
          model: db.UserType
      },
      {
        model:db.Products,
        include:[
          {
            model: db.CategoryProduct,
            include:[db.Categories]
          }
        ]
      }
    ],
      where: {
        userId: req.params.user
      }
    }).then(function (user) {
      console.log(user);
      res.render("index", user.dataValues)
      // res.json(user);
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
