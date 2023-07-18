import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import { NewMovie } from './components/NewMovie';
import moviesFromServer from './api/movies.json';
import { Movie } from './types/Movie';

export const App = () => {
  const [preparedMovies, setPreparedMovies] = useState([...moviesFromServer]);

  const getPreparedMovies = (newMovie: Movie) => {
    setPreparedMovies([...preparedMovies, newMovie]);
  };

  return (
    <div className="page">
      <div className="page-content">
        <MoviesList movies={preparedMovies} />
      </div>
      <div className="sidebar">
        <NewMovie
          onAdd={getPreparedMovies}
        />
      </div>
    </div>
  );
};