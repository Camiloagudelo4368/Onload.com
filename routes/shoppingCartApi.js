
var db = require("../models");
const Op = require('sequelize').Op;
var ls = require('local-storage');
var Sequelize = require('sequelize');

module.exports = function (app) {


  app.post("/api/shoppingCart", function (req, res) {
    var userId = ls.get("UserId");
    console.log("Body: ", req.body, userId)

    if (userId) {
      if (req.body.availableQuantity >= req.body.quantity) {


        console.log("this is the user", userId);

        var obj = {
          UserUserId: userId,
          ProductProductId: req.body.productId,
          quantity: req.body.quantity,
          price: req.body.price,
          couponCode: "1234567"
        }

        db.shoppingCart.findOne({
          where: {
            ProductProductId: obj.ProductProductId,
            UserUserId: obj.UserUserId
          }
        }).then(result => {
          if (result) {

            db.shoppingCart.update(
              { quantity: result.quantity + 1 },
              {
                // {
                where: {
                  ProductProductId: obj.ProductProductId,
                  UserUserId: obj.UserUserId
                }
                // }
              }).then(shoppingCart =>{
                res.send(shoppingCart)
              })
          }
          else {
            db.shoppingCart.create(obj).then(shoppingCart=>{
              res.send(shoppingCart)
            })
          }

        })
        // then(function (error,shoppingCart) {
        //   console.log("error :",error, "body", shoppingCart)
        //   res.send(shoppingCart)
        // });
      } else {
        res.render("product", { message: "Unavailble quantity" })
      }
    }
    else {
      res.send("noUser");
    }

    // console.log(req.body.availableQuantity, req.body.availableQuantityCapture)


  });

}