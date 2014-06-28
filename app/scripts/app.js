angular.module('Androguide', ['ngRoute']).config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/blog.html',
            controller: 'blogCtrl'
        })

        .when('/blog', {
            templateUrl: 'views/blog.html',
            controller: 'blogCtrl'
        })

        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'aboutCtrl'
        })

        .when('/cv', {
            templateUrl: 'views/cv.html',
            controller: 'cvCtrl'
        })

        .otherwise({ redirectTo: '/' })
}]);