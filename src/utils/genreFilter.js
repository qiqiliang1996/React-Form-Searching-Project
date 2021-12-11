export  function genreFilter(movies,currentGenre){
    if(currentGenre === 'All Genres'){
        return movies;
    }else if(currentGenre === 'Action'){
        const filtedAction = movies.filter(movie=> movie.genre.name === 'Action');
        return filtedAction
    }else if(currentGenre === 'Comedy'){
        const filtedComedy = movies.filter(movie=> movie.genre.name === 'Comedy');
        return filtedComedy
    }else{
        const filtedThriller = movies.filter(movie=> movie.genre.name === 'Thriller');
        return filtedThriller
    }
}