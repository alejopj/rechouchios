var express = require('express');
var router = express.Router();
 
var auth = require('./auth.js');
var twitter = require('./twitter.js');
 
/*
 * Routes that can be accessed by any one
 */
router.post('/login', auth.login);
 
/*
 * Routes that can be accessed only by autheticated users
 */
router.get('/api/v1/tweets' +
           '?query=:query' +
           '&geocode=:geocode' +
           '&count=:count' +
           '&since=:since' +
           '&since_id=:since_id' +
           '&max_id=:max_id',
           twitter.search);
 
/*
 * Routes that can be accessed only by authenticated & authorized users
 */
router.get('/api/v1/admin/tweets', twitter.search);
 
module.exports = router;