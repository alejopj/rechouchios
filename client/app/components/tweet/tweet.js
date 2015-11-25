(function () {
	angular.module('rcTweet', [])
		.directive('rcTweet', tweet);

	function tweet() {
		return {
            restrict: 'AE',
			templateUrl: './app/components/tweet/tweet.html',
            scope: {
                accountUrl: '@',
				avatarUrl: '@',
                fullname: '@',
                username: '@',
                tweetUrl: '@',
                timestamp: '@',
                lang: '@',
                text: '@'
			},
            bindToController: true,
			controllerAs: "tweet",
			controller: tweetCtrl
		};
	};	
		
}());