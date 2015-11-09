var jwt = require('jwt-simple');
var config = require('../config/webservice')
 
var auth = {
 
  login: function(req, res) {
 
    var username = req.body.username || '';
    var password = req.body.password || '';
 
    if (username == '' || password == '') {
      res.status(401);
      res.json({
        "status": 401,
        "message": "Invalid credentials"
      });
      return;
    }
 
    // Fire a query to your DB and check if the credentials are valid
    var dbUserObj = auth.validate(username, password);
   
    if (!dbUserObj) { // If authentication fails, we send a 401 back
      res.status(401);
      res.json({
        "status": 401,
        "message": "Invalid credentials"
      });
      return;
    }
 
    if (dbUserObj) {
 
      // If authentication is success, we will generate a token
      // and dispatch it to the client
 
      res.json(genToken(dbUserObj));
    }
 
  },
 
  validate: function(username, password) {
      
    var uname = config.username;
    var pass = config.password;
    
    var dbuserObj;
      
    if (username == uname && password == pass) {
     // spoofing the DB response for simplicity
     dbUserObj = { // spoofing a userobject from the DB. 
      name: username,
      role: 'webservice',
      username: username
    };   
        
    }
 
    return dbUserObj;
  },
 
validateUser: function(username) {
    // spoofing the DB response for simplicity
    var dbUserObj = { // spoofing a userobject from the DB. 
      name: username,
      role: 'webservice',
      username: username
    };
 
    return dbUserObj;
  },
}
 
// private method
function genToken(user) {
  var numHours = config.expiration
  var expires = expiresIn(numHours);
  var token = jwt.encode({
    exp: expires
  }, require('../config/secret')());
 
  return {
    token: token,
    expires: expires,
    user: user
  };
}
 
function expiresIn(numHours) {
  var dateObj = new Date();
  return dateObj.setHours(dateObj.getHours() + numHours);
}
 
module.exports = auth;