(function () {
    'use strict';

    angular.module('app', [
        'ngRoute'
    ])
        .config(['$routeProvider', function ($routProvider) {
            $routProvider
                .when('/', {
                    controller: 'userCtrl',
                    templateUrl: '/app/templates/user.html'
                })
                .otherwise({ redirectTo: '/' });
        }]);
})();  