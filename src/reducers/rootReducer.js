import {combineReducers} from 'redux';

import {moviesReducer} from './moviesReducer';
import {movieReducer} from './movieReducer';
import {searchFilterReducer} from './searchFilterReducer';

const rootReducer = combineReducers({moviesReducer, movieReducer, searchFilterReducer});
export default rootReducer;