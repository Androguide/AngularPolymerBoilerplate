// Blog Controller
// ---------------
// The AngularJS controller responsible for handling the header view _(see views/includes/header.html)_
angular.module('Androguide').controller('headerCtrl', ['$scope', '$location', function($scope, $location) {

    // Define the tabs titles
    // TODO: move this to a config.json file
    $scope.tabs = ["BLOG", "PORTFOLIO", "ABOUT ME"];

    // Simple method to switch between the main pages through the tabs
    // with transitions using Polymer's `<core-animated-pages>` element
    $scope.switch = function(pos) {
        var p = document.querySelector('core-animated-pages');
        p.selected = pos;
    }
}]);
