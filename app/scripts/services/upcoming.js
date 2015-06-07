(function() {
	'use strict';
	
	upcomingService.$inject = ['$http', '$q', 'rottenApi'];
	
	function upcomingService($http, $q, rottenApi){
		var serviceType = 'lists/movies/upcoming.json';
		//var url = rottenApi.baseUrl + serviceType + rottenApi.urlSuffix + rottenApi.key;
		var url = rottenApi.baseUrl + serviceType;
		var service = {
			all:all
		};
		
		function all(){
			var deferred = $q.defer();
			
			$http.jsonp(url, {
				params:{
					apikey:rottenApi.key,
					callback: 'JSON_CALLBACK'
				}
			}).success(function(data){
				deferred.resolve(data);
			}).error(function(error){
				deferred.reject(error);
			});
			
			return deferred.promise;
		}
		
		return service;
	}
	
	angular.module('mdApp')
	.factory('upcomingService', upcomingService);
})();