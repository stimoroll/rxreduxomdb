import {FETCH_MOVIE_SUCCESS, FETCH_MOVIE_REQUEST, FETCH_MOVIE_FAILURE} from '../actions/actionTypes';

const InitialMovieState = {
    movie: {},
    loading: false,
    error: false,
}

export const movieReducer = (state = InitialMovieState, action) => {
    switch(action.type) {
        case FETCH_MOVIE_SUCCESS:
            return {
                movie: action.movie,
                loading: false,
                error: false,
            }
        case FETCH_MOVIE_REQUEST:
            return {
                movie: {},
                loading: true,
                error: false,
            }
        case FETCH_MOVIE_FAILURE:
            return {
                error: action.error,
                movie: {},
                loading: false,
            }
        default:
            return state;
    }
}