(function () {
    
	angular.module('rcTweet').controller('TweetCtrl', tweetCtrl);

	function tweetCtrl($tweet) {
        
        // TODO Map to the right tweet property.
        this.accountUrl = $tweet.accountUrl;
        this.avatarUrl = $tweet.avatarUrl;
        this.fulname = $tweet.fullname;
        this.username = $tweet.username;
        this.tweetUrl = $tweet.tweetUrl;
        this.timestamp = $tweet.timestamp;
        this.lang = $tweet.lang;
        this.text = $tweet.text;
	};

}());