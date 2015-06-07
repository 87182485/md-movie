(function() {
	'use strict';
	
	UpcomingCtrl.$inject = ['$scope', 'upcomingService'];
	
	function UpcomingCtrl($scope, upcomingService){
		$scope.title = 'Upcoming';
		
		$scope.retrieveOriginalPosterUrl = retrieveOriginalPosterUrl;
		
		activate();
		
		function activate(){
			getUpcoming();
		}
		
		function getUpcoming(){
			upcomingService.all().then(function(data){
				$scope.movies = wrapMovies(data.movies);
				console.log($scope.movies);
			}, function(err){
				console.log(err);
			})
		}
		
		function wrapMovies(movies){
			var mappedMovies = movies.map(function(item){
				angular.extend(item, {
					backgroundColor:backgroundGenerator(item.runtime),
					gridAttribute:getGridValue(item.ratings.audience_score)
				});
				
				return item;
			});
			
			return mappedMovies;
		}
		
		//utilize functions
		//TODO: move those into a common service
		function backgroundGenerator(movieLength){
			if(movieLength>=120){
				return "green";
			}else if(movieLength<120&&movieLength>=100){
				return "blue";
			}else {
				return "yellow";
			}
		}
		
		function getGridValue(score){
			var rowNumber;
			var columnNumber;
			
			if(score>=90){
				rowNumber = 3;
				columnNumber = 2;
			}else if(score>=80){
				rowNumber = 2;
				columnNumber = 2;
			}else if(score>=70){
				rowNumber = 2;
				columnNumber =1;
			}else{
				rowNumber = 1;
				columnNumber = 1;
			}
			
			return {
				row:rowNumber,
				col:columnNumber
			};
		}
		
		function retrieveOriginalPosterUrl(url){
			return url.replace(/^.*?\/[\d]+x[\d]+\//,"http://");
		}
	}
	
	angular.module('mdApp')
	.controller('UpcomingCtrl', UpcomingCtrl);
})();