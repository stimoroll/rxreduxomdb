import React from "react";
import {Link} from 'react-router-dom';

const MoviesList = ({movies}) => (
    <ul>
        {movies.map((movie,key)=>(
            <li key={key}>
                <Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link>
            </li>
        ))}
    </ul>
)

export default MoviesList;