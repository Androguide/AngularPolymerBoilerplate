angular.module('Androguide', ['ngRoute']).config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'homeCtrl'
        })

        .otherwise({ redirectTo: '/' })
}]);