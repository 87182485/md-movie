(function() {
	'use strict';
	
	MainCtrl.$inject = ['$scope'];
	
	function MainCtrl($scope){
		$scope.title = 'Main';
	}
	
	angular.module('mdApp')
	.controller('MainCtrl', MainCtrl);
})();