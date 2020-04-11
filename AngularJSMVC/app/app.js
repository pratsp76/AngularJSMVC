(function () {
    'use strict';

    angular.module('app', [
        'ngRoute'
    ])
        .config(['$routeProvider', '$locationProvider', function ($routProvider,$locationProvider) {
            $locationProvider.hashPrefix('');
            $routProvider
                .when('/', {
                    controller: 'userCtrl',
                    templateUrl: '/app/templates/user.html'
                })
                .otherwise({ redirectTo: '/' });
        }]);
})();  