import {SET_SEARCH_FILTER, CLEAR_SEARCH_FILTER} from '../actions/actionTypes';

const InitialSearchState = {
    searchTerm: '',
}

export const searchFilterReducer = (state = InitialSearchState, action) => {
    switch(action.type) {
        case SET_SEARCH_FILTER:
            return {
                searchTerm: action.searchTerm
            }
        case CLEAR_SEARCH_FILTER:
            return {
                searchText: ''
            }
        default:
            return state;
    }
}