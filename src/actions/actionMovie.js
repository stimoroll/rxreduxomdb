import {FETCH_MOVIE_SUCCESS} from './actionTypes';

export const fetchMovieSuccess = (movie) => {
    return {
        type: FETCH_MOVIE_SUCCESS,
        movie
    }
};