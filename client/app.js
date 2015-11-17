angular.module('rechouchios', ['ui.router']);

angular.module('rechouchios').config(function ($stateProvider) {
    $stateProvider
        .state('index', {
			url: '',
			controller: 'HomeCtrl as home',
			templateUrl: 'views/home.html'
		})
		.state('home', {
			url: '/',
			controller: 'HomeCtrl as home',
			templateUrl: 'views/home.html'
		})
		.state('browser', {
			url: '/browser',
			controller: 'BrowserCtrl as browser',
			templateUrl: 'views/browser.html'
		})
		.state('about', {
			url: '/about',
			controller: 'AboutCtrl as about',
			templateUrl: 'views/about.html'
		}).state('not-found', {
			url: '*path',
            controller: 'NotFoundCtrl as notFound',
			templateUrl: 'views/not-found.html'
		});
});