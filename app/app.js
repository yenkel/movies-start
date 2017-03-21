var app = angular.module('movieLibrary', []);

app.directive("movieDirective", function() {
    return {
        templateUrl: 'app/movies/movie.html',
        scope: {
            movie: '=myMovie'
        }
    };
});
