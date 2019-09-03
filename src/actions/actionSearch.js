import {SET_SEARCH_FILTER} from './actionTypes';

export const setSearchFilter = (searchTerm) => {
    return {
        type: SET_SEARCH_FILTER,
        searchTerm
    };
}