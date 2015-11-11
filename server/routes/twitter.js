var Twit = require('twit');

var _app = new Twit({
        consumer_key: '',
        consumer_secret: '',
        app_only_auth: true
});

var _galicia = '42.756472,-7.907917,128km';

var twitter = {

    search: function(req, res) {
        
        var q = req.query.query || '';
        var geocode = req.query.geocode;
        var count = req.query.count;
        var since = req.query.since;
        var since_id = req.query.since_id;
        var max_id = req.query.max_id;
        
        q += geocode ? ' geocode:' + geocode : '';
        q += ' since:' + (since || getToday());
        q += since_id ? ' since_id:' + since_id : '';
        q += max_id ? ' max_id:' + max_id : '';

        count = count || 25;
        
        _app.get('search/tweets', {'q': q, 'count': count}, function(err, data, response) {
            
            res.status(200);
            res.json(data);
            
        });
        
    }
    
};

function getToday() {
      
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();

        if(dd < 10) {
            dd = '0' + dd;
        } 

        if (mm < 10) {
            mm = '0' + mm;
        } 

        today = yyyy + '/' + mm + '/' + dd;
        
        return today;
};

module.exports = twitter;