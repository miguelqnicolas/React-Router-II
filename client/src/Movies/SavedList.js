import React from 'react';
import {Link} from 'react-router-dom';

const SavedList = (props) => {
  
  return (
    // creating card up top, mapping over array in savedList state that was passed down and creating a link to that movie's page every iteration
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.savedList.map(movie => (
        <Link to={`/movie/${movie.id}`}><span className="saved-movie" key={movie.id}>{movie.title}</span></Link>
      ))}
      {/* just a link back to home, howcome we dont need route here? */}
      <Link to='/'><div className="home-button">Home</div></Link>
    </div>
  )
};

export default SavedList;
