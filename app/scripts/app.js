(function() {
	'use strict';
	
	angular.module('mdApp', [
		'ngRoute', 
		'ngMaterial', 
		'mdApp.config'
		])
	.config(config)
	
	;
	
	function config($routeProvider, $locationProvider){
		$routeProvider
		.when('/', {
			templateUrl:'app/templates/main.html',
			controller:'MainCtrl'
		})
		.when('/upcoming', {
			templateUrl:'app/templates/upcoming.html',
			controller:'UpcomingCtrl'
		})
		.when('/rankings', {
			templateUrl:'app/templates/ranking.html',
			controller:'RankingCtrl'
		})
		.otherwise({
			redirectTo:'/'
		});
	}
})();