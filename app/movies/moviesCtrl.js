app.controller('MoviesCtrl', ['$scope', 'movies', function($scope, movies) {
    $scope.isDeleting = false;

    $scope.movies = movies.getMovies();

    $scope.addMovie = function() {
        alert("This functionality will be available soon!");
    };

    $scope.deleteMovies = function() {
        $scope.isDeleting = true;
    };

    $scope.doneDeleteMovies = function() {
        $scope.isDeleting = false;
    };

    $scope.deleteMovie = function() {
        // TODO: delete the movie only if the app is in "delete mode"
        if ($scope.isDeleting) {
            movies.removeMovie($scope.index);
        }
    };

    $scope.movie1 = $scope.movies[0];
    $scope.movie2 = $scope.movies[1];
    $scope.movie3 = $scope.movies[2];

}]);
