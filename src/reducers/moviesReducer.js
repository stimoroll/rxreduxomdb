import {FETCH_MOVIES_SUCCESS, FETCH_MOVIES_REQUEST, FETCH_MOVIES_FAILURE} from '../actions/actionTypes';

const InitialMoviessState = {
    posts: [],
    loading: false,
    error: false,
}

export const moviesReducer = (state = InitialMoviessState, action) => {
    switch(action.type) {
        case FETCH_MOVIES_SUCCESS:
            return {
                posts: action.posts,
                loading: false,
            }
        case FETCH_MOVIES_REQUEST:
            return {
                loading: true
            }
        case FETCH_MOVIES_FAILURE:
            return {
                error: action.error,
                loading: false,
            }
        default:
            return state;
    }
}
