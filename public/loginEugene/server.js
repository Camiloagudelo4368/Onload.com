var express = require('express'),
routes= require('./routes'),
app = require(),
user = require('./routes/user'),
db = require('./models'),
http = require('http'),
passport = require('passport'),
passportConfig = requre('./config/passport')
home = require('./routes/application')

SALT_WORK_FACTOR= 12;

app.use('/public', express.static(__dirname+'/public'));

app.set('views', __dirname + '/views')
app.set('port', process.env.PORT || 3003)
app.use(express.urlencoded())
app.use(express.bodyParser())
app.use(express.cookieParse())
app.use(express.session({ secret: 'goatjsformakebettersecurity'}))
app.use(passport.initialize())
app.use(passport.session())
app.use(app.router)

if ('development' === app.get('env'))   {
    app.use(express.errorHandler())
}

app.get('/', routes.index)