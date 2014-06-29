angular.module('Androguide').controller('headerCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.goTo = function(route) {
        $location.path(route);
    };

    $scope.tabs = [
        {
            title: "BLOG",
            href: "blog"
        },
        {
            title: "ABOUT ME",
            href: "about"
        },
        {
            title: "C.V",
            href: "cv"
        }

    ]

    $scope.switch = function(pos) {
        var p = document.querySelector('core-animated-pages');
        p.selected = pos;
    }
}]);
