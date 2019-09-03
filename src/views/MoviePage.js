import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import MoviesList from '../components/MoviesList';
import {fetchMoviesListByTitle} from '../services/movieFetchCommands';

const mapStateToProps = state => {
    return {
      movies: state.moviesReducer.posts,
      loading: state.moviesReducer.loading,
      error: state.moviesReducer.error,
      searchTerm: state.searchFilterReducer.searchTerm,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchMoviesByTitle: (searchTerm) => dispatch(
          fetchMoviesListByTitle(searchTerm)
        ),
    };
}

const MoviePage = ({ movies, error, loading, fetchMoviesByTitle, searchTerm}) => {
    useEffect(() => {
        fetchMoviesByTitle(searchTerm);
        }, [fetchMoviesByTitle, searchTerm])

    return (
    <>
        {loading && <p>loading: {loading}</p>}
        {error && <p>Error: {error}</p>}
        {(!loading && movies && movies.length === 0) && <p>No Movies match cirteria</p>}
        {(!loading && movies) && <MoviesList movies={movies} />}
    </>
)};

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
// export default MoviePage;