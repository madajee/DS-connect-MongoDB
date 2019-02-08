var Users = require('../models/userModel');

module.exports = function(app) {
    
    app.get('/api/setupUsers', function(req, res) {

        // seed database
        var seedUsers = [
            {
                username: 'jodoe',
                name: 'John Doe',
                email: 'john.doe@test.com'
            },
            {
                username: 'jadoe',
                name: 'Jane Doe',
                email: 'jane.doe@test.com'
            }
        ];
        Users.create(seedUsers, function(err, results) {
            res.send(results);
        }); 
    });
     
 }