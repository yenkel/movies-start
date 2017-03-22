var app = angular.module('movieLibrary', []);

app.directive("movieDirective", function() {
    return {
        templateUrl: 'app/movies/movie.html',
        scope: {
            movie: '=myMovie',
            isDeleting: '=',
            deleteMovies: '=',
            doneDeleteMovies: '=',
            deleteMovie: '='
        }
    };
});

app.component('movie', {
    templateUrl: 'app/movies/movie.html',
    controller: MovieController,
    bindings: {
        movie: '=myMovie',
        isDeleting: '=',
        deleteMovies: '=',
        doneDeleteMovies: '=',
        deleteMovie: '='
    }
});
