angular.module('rechouchios', ['ui.router']);

angular.module('rechouchios').config(function ($stateProvider) {
    $stateProvider
        .state('index', {
			url: '',
			controller: 'HomeCtrl as home',
			templateUrl: 'home.html'
		})
		.state('home', {
			url: '/',
			controller: 'HomeCtrl as home',
			templateUrl: 'home.html'
		})
		.state('browser', {
			url: '/browser',
			controller: 'BrowserCtrl as browser',
			templateUrl: 'browser.html'
		})
		.state('about', {
			url: '/about',
			controller: 'AboutCtrl as about',
			templateUrl: 'about.html'
		}).state('not-found', {
			url: '*path',
            controller: 'NotFoundCtrl as notFound',
			templateUrl: 'not-found.html'
		});
});