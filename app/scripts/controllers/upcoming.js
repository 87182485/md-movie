(function() {
	'use strict';
	
	UpcomingCtrl.$inject = ['$scope', 'upcomingService'];
	
	function UpcomingCtrl($scope, upcomingService){
		$scope.title = 'Upcoming';
		
		activate();
		
		function activate(){
			getUpcoming();
		}
		
		function getUpcoming(){
			upcomingService.all().then(function(data){
				console.log(data);
			}, function(err){
				console.log(err);
			})
		}
	}
	
	angular.module('mdApp')
	.controller('UpcomingCtrl', UpcomingCtrl);
})();