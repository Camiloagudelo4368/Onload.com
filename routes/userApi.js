var db = require("../models");

module.exports = function (app) {

  
  // select an user based on ID
  app.get("/api/user/:user", function (req, res) {
  //Select all usert types
  
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
      // console.log(user);
      db.UserType.findAll({raw: true})
      .then( resusertype =>{
        // res.send(usertype)
        // console.log(resusertype);
        
        var objUserTypeAll = {
          userTypeAll : resusertype,
          user : user.dataValues
        }
console.log('this is data', objUserTypeAll)
        // res.render("index", user.dataValues, objUserTypeAll)
        res.render("index", objUserTypeAll)
      // res.json(user);
    });
    });
  });

  // Insert user
  app.post("/api/user", function (req, res) {
    
    console.log('hola', req.body.userTypeId);
    var userObject = {
      email: req.body.email,
      userName: req.body.userName,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,
      phone: req.body.phone,
      street: req.body.street,
      city: req.body.city,
      state: req.body.state,
      zipCode: req.body.zipCode,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      UserTypeUserTypeId: req.body.userTypeId
    }

    db.Users.create(userObject).then(user => {
      res.json(user);
    });
  });
};
