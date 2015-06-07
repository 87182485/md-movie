(function() {
	'use strict';
	
	angular.module('mdApp.config', [])
	.constant('rottenApi', {
		baseUrl:'http://api.rottentomatoes.com/api/public/v1.0/', 
		urlSuffix: '?apikey=',
		key: '7c522aevz9vea3j2z4bsktw3'
	});
})();