exports.index = function (req, res) {
    res.render("login.ejs");
}

var fs = require ('fs'),
path = require('path'),
sequelize =  require('sequelize'),
db = {}

fs.readdirSync(__dirname).filter(function(file) {
    return(file.indexOf('.') !==0) && (file !== 'index.js')
})
.forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file))
})

module.exports = lodash.extend({
    sequelize: sequelize,
    Sequelize: Sequelize
})

app.get('/', routes.index)

db.sequelize.sync().complete(function(err)  {
    if (err)    {
        throw err[0]
    } else  {
        db.User.find({where: {username: 'admin'}}).success(function (user){
            if(!user){
                db.User.Build({username: 'admin', passpword: 'admin'}).save();
            };
        });
        http.createServer(app).listen(app.get('port'), function()   {
            console.log('Express is listening on port ' + app.get('port'))            
    })
}
})