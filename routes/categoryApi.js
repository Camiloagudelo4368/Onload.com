var db = require("../models");

module.exports = function (app) {

    // select all categories return an array of categories
    app.get("/api/categories", function (req, res) {
        db.Categories.findAll({}).then(function (categories) {
            res.json(categories);
        });
    });

    //Select one category based on categoryId
    app.get("/api/categories/:category", function (req, res) {
        db.Categories.findOne({
            where: {
                categoryId: req.params.category
            }
        }).then(category => {
            res.json(category);
        });
    });

    app.get("/api/authors/:id", function (req, res) {
        db.Author.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbAuthor) {
            res.json(dbAuthor);
        });
    });

    app.post("/api/authors", function (req, res) {
        db.Author.create(req.body).then(function (dbAuthor) {
            res.json(dbAuthor);
        });
    });

    app.delete("/api/authors/:id", function (req, res) {
        db.Author.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbAuthor) {
            res.json(dbAuthor);
        });
    });

};