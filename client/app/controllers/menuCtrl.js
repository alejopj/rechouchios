(function () {
	angular.module('rechouchios').controller('MenuCtrl', menuCtrl);
	
	function menuCtrl($state) {
		this.isActive = function (status) {
			return $state.is(status);
		}
	}
}());