app.component('movieDirective', {
    templateUrl: 'app/movies/movie.html',
    controller: 'MoviesCtrl',
    bindings: {
        movie: '=',
        isDeleting: '=',
        deleteMovies: '=',
        doneDeleteMovies: '=',
        deleteMovie: '='
    }
});
