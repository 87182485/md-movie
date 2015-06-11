(function() {
	'use strict';
	
	//TODO: use gulp inject instead $inject
	menuCtrl.$inject = ['$location', '$scope', '$mdSidenav'];
	
	function menuCtrl($location, $scope, $mdSidenav){
		$scope.currentLocation = 0;
		
		$scope.menuItems = [
			{
				title:'About me',
				url:'/about'
			},
			{
				title:'Demos',
				url:'/'
			},
			//{
			//	title:'Upcoming',
			//	url:'/upcoming'
			//},
			//{
			//	title:'Ranking',
			//	url:'/rankings'
			//}
		];
		
		$scope.select = function(index){
			if($scope.menuItems[index]){
				$scope.currentLocation = index;
				$location.url($scope.menuItems[index].url);
			}	
		};
		
		$scope.toggleSidenav = toggleSidenav;
		
		  function toggleSidenav(name) {
			$mdSidenav(name).toggle();
		  }
	}
	
	angular.module('mdApp')
	.controller('menuCtrl', menuCtrl);
})();