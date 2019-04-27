var db = require("../models");

module.exports = function(app) {

    //Select an array of products, all products
  app.get("/api/products", function(req, res) {
    db.Products.findAll({})
    .then( product => {
      res.json(product);
    });
  });

  //Select and array of products based on categoryId
  app.get("/api/products/:category", function(req, res) {
    db.Products.findAll({
        where:{
            categoryId: req.params.category
        }
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

  //Select product based on productId
  app.get("/api/products/:product", function(req, res) {
    db.Product.findOne({
      where: {
        productId: req.params.product
      }
    }).then( product => {
      res.json(product);
    });
  });

  app.post("/api/product", function(req, res) {
    db.Author.create(req.body).then(function(product) {
      res.json(product);
    });
  });

  app.delete("/api/authors/:id", function(req, res) {
    db.Author.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });
};
