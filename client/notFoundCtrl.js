(function () {
	angular.module('rechouchios').controller('NotFoundCtrl', notFoundCtrl);
	
	function notFoundCtrl($timeout, $window) {
        
        $timeout(nyancat(), 3000);
        
        function nyancat() {
          $window.location.href = 'http://www.nyan.cat';
        };
	};
}());