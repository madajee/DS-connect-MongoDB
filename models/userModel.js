var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: String,
    name: String,
    email: String
});

var Users = mongoose.model('Users', userSchema);

module.exports = Users;