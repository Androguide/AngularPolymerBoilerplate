// Blog Controller
// ---------------
// The AngularJS controller responsible for handling the blog view _(see views/blog.html)_
angular.module('Androguide').controller('blogCtrl', ['$scope', '$http', '$timeout', function ($scope, $http, $timeout) {
    $scope.search = "";

    // Get the blog posts from a json file
    // TODO:move this to a MongoDB and create an admin panel
    $http.get('assets/data/blog.json').success(function(data) {
        $scope.articles = data;
    });

    $timeout(function () {
        var searchBox = $('#blog-search');
        searchBox.change(function () {
            console.log("changed: ", searchBox.val());
            $scope.search = searchBox.val();
        });
    }, 1000);

    // Handle blog post transition between list and details
    // using Polymer's `<core-animated-pages>` element
    $scope.transition = function(pos) {
        document.querySelector('#blog-pages').selected = pos;
        var upPage =$('#up-page');
        upPage.removeClass('back-up').addClass('to-back');
        upPage.click(function() {
            upPage.removeClass('to-back').addClass('back-up');
            document.querySelector('#blog-pages').selected = 0;
        });
    }

}]);
