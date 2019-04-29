var db = require("../models");

//Accounts of the userId
module.exports = function (app) {
    app.get("/api/acoount/:user", function (req, res) {
        db.Accounts.findAll({
            where: {
                userId: req.params.user
            }
        }).then(account => {
            res.json(account);
        });
    });

    app.post("/api/account", function (req, res) {
        var accountObject = {
            alias: req.body.alias,
            number: "1234567",
            initBalance: req.body.ammount,
            balance: req.body.ammount,
            userId: req.body.userId,
            createdAt: Date.now(),
            updatedAt: Date.now()
        }

        db.Users.create(accountObject).then(account => {
            res.json(account);
        });
    });
}