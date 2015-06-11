/**
 * Created by Gary on 6/9/2015.
 */
(function (){
    'use strict';

    FormService.$inject = ['$http', '$q'];

    function FormService($http, $q){
        //TODO: 1. put form button icon url into module constant,
        //TODO: 2. create localstorage for form data
        //TODO: 3. create functions: getForm data, saveForm data
        //TODO: 4. create $q promise based vars
        //TODO: 5. if form data existed, then read data
        var service = {
            deleteFormData:deleteFormData,
            getFormData:getFormData,
            save:save
        };

        function deleteFormData(){

        }

        function getFormData(){

        }

        function save(){

        }

        return service
    }

    angular.module('mdApp')
        .factory('FormService', FormService);
})();