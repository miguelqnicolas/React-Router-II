import React from 'react';

function MovieCard(props) {
  // declaring variables and setting them all equal to data from movie
  const {title, director, metascore, stars} = props.movie;
  
  return (
    // creating card for every movie passed in
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>
      
      {/* iterating through stars and making a div for each one to display */}
      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
  );
}

export default MovieCard;
