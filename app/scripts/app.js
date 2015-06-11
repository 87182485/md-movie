(function() {
	'use strict';
	
	angular.module('mdApp', [
		'ngRoute', 
		'ngMaterial', 
		'mdApp.config'
		])
	.config(config)
	.run(['$location', '$rootScope', function($location, $rootScope){
			$rootScope.$on('$routeChangeSuccess', function(event, current, previous){
				$rootScope.title = current.$$route.title;
			})
		}]);
	
	function config($routeProvider, $locationProvider){
		$routeProvider
		.when('/', {
				title:'Demos',
			templateUrl:'app/templates/main.html',
			controller:'MainCtrl'
		})
		//.when('/upcoming', {
		//	templateUrl:'app/templates/upcoming.html',
		//	controller:'UpcomingCtrl'
		//})
		.when('/about', {
				title:'About me',
			templateUrl:'app/templates/about.html',
			controller:'AboutCtrl'
		})
		//.when('/rankings', {
		//	templateUrl:'app/templates/ranking.html',
		//	controller:'RankingCtrl'
		//})
		.otherwise({
			redirectTo:'/about'
		});
	}


})();