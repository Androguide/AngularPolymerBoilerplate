angular.module('Androguide').controller('blogCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
    $scope.search = "";

    $scope.articles = [
        {
            title: "Polymer+Angular=<3",
            intro: "Polymer & Angular working hand in hand FTW!!!!!!!...",
            color: "belize"
        },
        {
            title: "Article 2",
            intro: "Bla blah bla bla, gibberish giberrish, adzooks, nonsense...",
            color: "alizarin"
        },
        {
            title: "Article 3",
            intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
            color: "sunflower"
        },
        {
            title: "Article 4",
            intro: "Modi numquam odio perspiciatis quia, sit voluptatem...",
            color: "asphalt"
        },
        {
            title: "Article 5",
            intro: "Aliquam beatae cumque ea earum fuga, illo ipsam quae...",
            color: "amethyst"
        },
        {
            title: "Article 6",
            intro: "illo ipsam quae quo rem repellendus sunt ut voluptates...",
            color: "teal"
        },
        {
            title: "Article 7",
            intro: "This is complete nonsense gibberish, don't click this...",
            color: "belize"
        },
        {
            title: "Article 8",
            intro: "Plz halp friend, my fingerz are typing random wordz!!!...",
            color: "nephrytis"
        },
        {
            title: "Article 9",
            intro: "Youplaboum, un peu de français dans l'truc quand même!..",
            color: "sunflower"
        }
    ];

    $timeout(function () {
        var searchBox = $('#blog-search');
        searchBox.change(function () {
            console.log("changed: ", searchBox.val());
            $scope.search = searchBox.val();
        });
    }, 1000);

    $scope.$watch('search', function() {
        console.log('search changed');
    }, true);

}]);
