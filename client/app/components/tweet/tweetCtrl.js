(function () {
    
	angular.module('rcTweet').controller('TweetCtrl', tweetCtrl);

	function tweetCtrl() {
        
        // TODO Map to the right tweet property.
        this.accountUrl = this.tweet.accountUrl;
        this.avatarUrl = this.tweet.avatarUrl;
        this.fulname = this.tweet.fullname;
        this.username = this.tweet.username;
        this.tweetUrl = this.tweet.tweetUrl;
        this.timestamp = this.tweet.timestamp;
        this.lang = this.tweet.lang;
        this.text = this.tweet.text;
	};

}());