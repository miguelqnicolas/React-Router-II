import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import MovieCard from './MovieCard'

const MovieList = () => {
  const [movies, setMovies] = useState([])
  
  // actually getting data here for all movies and storing in state
  useEffect(() => {
    axios.get('http://localhost:5000/api/movies')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }, []);
  
  // mapping over state we just stored data in and creating a link around the cards that lead to that movie's page
  return (
    <div className="movie-list">
      {movies.map(movie => (
        // pass in movie which is each iteration of the movies array
        <Link to={`/movie/${movie.id}`}><MovieCard key={movie.id} movie={movie}/></Link>
      ))}
    </div>
  );
}

export default MovieList;
