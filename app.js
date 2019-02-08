var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var setupController = require('./controllers/setupController');
var userController = require('./controllers/userController');
var apiController = require('./controllers/apiController');
var port = process.env.PORT || 3000;

var port = process.env.PORT || 3000;

app.use('/', express.static(__dirname + '/public'));

var connectString = config.getDbConnectionString();
mongoose.connect(connectString);

setupController(app);
userController(app);
apiController(app);
app.listen(port);