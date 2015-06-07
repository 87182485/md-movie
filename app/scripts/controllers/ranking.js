(function() {
	'use strict';
	
	RankingCtrl.$inject = ['$scope'];
	
	function RankingCtrl($scope) {
		$scope.title = 'Rankings';
	}
	
	angular.module('mdApp')
	.controller('RankingCtrl', RankingCtrl);
})();