require('rootpath')();  /////////// Little helper to make node.js require relative to your project root
var express = require('express');  ////// Node Framework
var app = express(); //// Creating app using express();
var session = require('express-session'); //// creating express session Simple session middleware for Express
var bodyParser = require('body-parser'); /// Parse incoming request bodies in a middleware before your handlers, availabe under the req.body property.
var expressJwt = require('express-jwt'); /// This module lets you authenticate HTTP requests using JWT tokens in your Node.js applications. JWTs are typically used to protect API endpoints, and are often issued using OpenID Connect.
var config = require('config.json'); ////nconf wrapper that simplifies work with environment specific configuration files.

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({ secret: config.secret, resave: false, saveUninitialized: true })); //Simple session middleware for Express
app.use(express.static('public'));

// use JWT auth to secure the api
app.use('/api', expressJwt({ secret: config.secret }).unless({ path: ['/api/users/authenticate', '/api/users/register'] }));

// routes
app.use('/login', require('./controllers/login.controller'));
app.use('/register', require('./controllers/register.controller'));
app.use('/app', require('./controllers/app.controller'));
app.use('/api/users', require('./controllers/api/users.controller'));

// make '/app' default route
app.get('/', function (req, res) {
    return res.redirect('/app');
});

// start server
var server = app.listen(3000, function () {
    console.log('Server listening at http://' + server.address().address + ':' + server.address().port);
});
