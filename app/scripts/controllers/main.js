//Form Demo
(function() {
	'use strict';
	
	MainCtrl.$inject = ['$scope', '$mdToast'];
	
	function MainCtrl($scope, $mdToast){
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

		function showToast(){
			$mdToast.show({
				hideDelay:3000,
				position:'top left',
				template:'<md-toast><md-icon ng-style="{color:green}" md-svg-src="app/images/svg/action/svg/production/ic_done_24px.svg"></md-icon><span flex>Form submitted.</span></md-toast>'
			});
		}

		function submit(form){
			if(form&&form.$valid){
				//TODO: set up form submit logic
				//TODO: if successfully submit it, toast it.
				$scope.formSubmitted = true;
				showToast();
				console.log('Form submitted.');
			}else{
				//TODO: toast error message
			}
		}
	}
	
	angular.module('mdApp')
	.controller('MainCtrl', MainCtrl);
})();