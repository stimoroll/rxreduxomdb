import {FETCH_MOVIES_SUCCESS, FETCH_MOVIES_REQUEST, FETCH_MOVIES_FAILURE} from './actionTypes';

export const fetchMoviesRequest = () => {
    return {
        type: FETCH_MOVIES_REQUEST,
    }
}

export const fetchMoviesError = (error) => {
    return {
        type: FETCH_MOVIES_FAILURE,
        error
    }
}

export const fetchMoviesSuccess = (posts) => {
    return {
        type: FETCH_MOVIES_SUCCESS,
        posts
    }
};