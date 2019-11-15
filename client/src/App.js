import React, {useState} from 'react';
import SavedList from './Movies/SavedList';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
	const [savedList, setSavedList] = useState([]);

	// adding movie to saved list, also checking to see if movie is already in saved list with .find(), if so, will not add
	const addToSavedList = movie => {
		if (savedList.find(item => {
			return movie.id === item.id;
		}) === undefined) {
			setSavedList( [...savedList, movie] );
		}
	};

	return (
		<Router>
			<div>
				{/* three children: saved list, movie list, movie */}
				<SavedList savedList={savedList}/>

				<Route exact path='/' component={MovieList}/>
				{/* what is this connected to vvv */}
				<Route path='/movie/:id' render={props => {
					return <Movie {...props} addToSavedList={addToSavedList}/>
				}}/>
			</div>
		</Router>
	);
};

export default App;