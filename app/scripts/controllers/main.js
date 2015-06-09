//Form Demo
(function() {
	'use strict';
	
	MainCtrl.$inject = ['$scope'];
	
	function MainCtrl($scope){
		$scope.title = 'Main';
		$scope.profile ={

		};
		$scope.submit = submit;
		$scope.edit = edit;
		$scope.clear = clear;
		$scope.formSubmitted = false;

		function clear(form){
			$scope.profile={};
			form.$setPristine();
		}

		function edit(){
			$scope.formSubmitted = false;
		}

		function submit(form){
			if(form&&form.$valid){
				//TODO: set up form submit logic
				//TODO: if successfully submit it, toast it.
				$scope.formSubmitted = true;
				console.log('Form submitted.');
			}else{
				//TODO: toast error message
			}
		}
	}
	
	angular.module('mdApp')
	.controller('MainCtrl', MainCtrl);
})();