// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var db = require("../models");
var ls = require('local-storage');
// Routes
// =============================================================
module.exports = function (app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", (req, res) => {

    console.log("check ", ls("UserId"))
    res.render("index")
    // res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/cart", (req, res) => {
    res.render("shoppingCart")
    // res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // Sign up request
  app.get("/signup", function (req, res) {
    // console.log(user);
    db.UserType.findAll({ raw: true })
      .then(resusertype => {

        db.States.findAll({ raw: true })
          .then(resStates => {

            var objUserTypeAll = {
              userTypeAll: resusertype,
              states: resStates
            }
            console.log('this is data', objUserTypeAll)
            // res.render("index", user.dataValues, objUserTypeAll)
            res.render("signup", objUserTypeAll)
            // res.json(user);
          });
      });
  });

  // SignIn request
  app.get("/signin", (req, res) => {
    res.render("signin");
  })

  // bring the information and render the products page
  app.get("/products/:categoryId", (req, res) => {
    db.Products.findAll({
      // plain:true,
      raw: true,
      // hierarchy: true,
      include: [
        {
          model: db.CategoryProduct,
          where: {
            CategoryCategoryId: req.params.categoryId
          },
        }
      ],
    }).then(function (product) {
      
      db.Categories.findOne({
        raw: true,
        where:
        {
          categoryId: req.params.categoryId
        }
      }).then(category => {

        var objProduct = {
          products: product,
          category: category,
        }

        // console.log(objProduct)
        res.render("product", objProduct);
      });
    });
  })

  // bring all products
  app.get("/products", (req, res) => {
    db.Products.findAll({
      // plain:true,
      raw: true,
      // hierarchy: true,
      include: [{
        model: db.CategoryProduct,
        include: [db.Categories]
      }
      ],
    })
      .then(function (product) {

        // console.log(product[0]['CategoryProducts.Category.categoryName'])
        // console.log('see above hhhh')
        product.forEach(item => item.categoryName = item['CategoryProducts.Category.categoryName'])

        // console.log('after')
        // console.log(product)

        var objProduct = {
          products: product,
        }

        // console.log(objProduct)
        res.render("product", objProduct);
      });
  })
};
