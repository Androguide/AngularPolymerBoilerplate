// Projects Controller
// ---------------
// The AngularJS controller responsible for handling the projects view _(see views/projects.html)_
angular.module('Androguide').controller('portfolioCtrl', ['$scope', '$http', '$timeout', function ($scope, $http, $timeout) {
    $scope.search = "";

    // Get the blog posts from a json file
    // TODO:move this to a MongoDB and create an admin panel
    $http.get('assets/data/projects.json').success(function(data) {
        $scope.articles = data;
    });

    $timeout(function () {
        var searchBox = $('#projects-search');
        searchBox.change(function () {
            console.log("changed: ", searchBox.val());
            $scope.search = searchBox.val();
        });
    }, 1000);

    // Handle blog post transition between list and details
    // using Polymer's `<core-animated-pages>` element
    $scope.transition = function(pos) {
        document.querySelector('#projects-pages').selected = pos;
        var upPage =$('#up-page');
        upPage.removeClass('back-up').addClass('to-back');
        upPage.click(function() {
            upPage.removeClass('to-back').addClass('back-up');
            document.querySelector('#projects-pages').selected = 0;
        });
    }
}]);
