(function () {
    'use strict';

    angular
        .module('app')
        .factory('dataService', ['$http', 'q', function ($http, $q) {
            varservice = {};

            service.getUsers = function () {
                var deferred = $q.defer();
                $http.get('/User / Index').then(function (result) {
                    deferred.resolve(result.data);
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };
            return service;
        }]);
})(); 