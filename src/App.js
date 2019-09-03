import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import MovieDetails from './components/MovieDetails';

import './App.css';
import MoviePage from './views/MoviePage';
import Search from './components/Search';

const App = ({ movies, error, loading, fetchMoviesByTitle, searchTerm}) => {
  return (
    <div>
      <Search />
      <Router>
        <Route path="/" component={MoviePage} />
        <Route path="/movie/:ID" component={MovieDetails} />
      </Router>
    </div>
  );
}

export default App;
