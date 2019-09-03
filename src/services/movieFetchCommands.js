import {URL_WITH_KEY, instance} from './movieService';
import {fetchMovieSuccess} from '../actions/actionMovie';
import {fetchMoviesSuccess, fetchMoviesError, fetchMoviesRequest} from '../actions/actionMovies';

export const fetchMovieByID = (movieID) => {
    return (dispatch) => {
        return instance.get(`${URL_WITH_KEY}&i=${movieID}`)
        .then(response => {
            try {
                console.log(response);
                dispatch(fetchMovieSuccess(response.data));
            } catch (error) {
                throw(error);
            }
        })
        .catch(error => {
          throw(error);
        });
    }
}


export const fetchMoviesListByTitle = (movieTitle) => {
    return (dispatch) => {
        dispatch(fetchMoviesRequest());
        return instance.get(`${URL_WITH_KEY}&s=${movieTitle}`)
            .then(response => {
                try {
                    dispatch(fetchMoviesSuccess(response.data.Search));
                } catch (error) {
                    throw(error);
                }
            }
        )
        .catch(error => {
            dispatch(fetchMoviesError(error));
        });
    };
};