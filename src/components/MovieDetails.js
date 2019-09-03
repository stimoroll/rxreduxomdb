
import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {fetchMovieByID} from "../services/movieFetchCommands";

const mapStateToProps = state => {
    console.log(state);
    return {
        movie: state.movieReducer.movie,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchMovie: (movieID) => dispatch(fetchMovieByID(movieID)),
   };
}

const MovieDetails = ({match, movie, fetchMovie}) => {
    useEffect(()=>{
        let movieID = match.params.ID;
        fetchMovie(movieID);
    },[match, fetchMovie]);

    return (
        <div>
        <Link to="/">BACK</Link>
        {movie && <div id={movie.imdbID}>
                <p>post {movie.imdbID}</p>
                <h1>{movie.Title}</h1>
            </div>
        }
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);