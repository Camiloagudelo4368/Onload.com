
var db = require("../models");
const Op = require('sequelize').Op;
var ls = require('local-storage');


module.exports = function (app) {


  app.post("/api/shoppingCart", function (req, res) {

console.log("Body: ",req.body)
console.log("req: ",req.data)
// console.log(req.body.availableQuantity, req.body.availableQuantityCapture)

    if (req.body.availableQuantity >= req.body.availableQuantityCapture) {
      
      var userId = ls.get('UserId');
      console.log("this is the user", userId);
      var obj = {
        UserUserId: userId,
        ProductProductId: req.body.productId,
        quantity: req.body.quantity,
        price: req.body.price,
        couponCode: "1234567"
      }

      db.shoppingCart.create(obj).then(function (shoppingCart) {
        res.render("product", { message: "Item added to the cart" })
      });
    } else {
      res.render("product", { message: "Unavailble quantity" })
    }
  });

}