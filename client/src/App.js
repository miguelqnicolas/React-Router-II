import React, {useState} from 'react';
import SavedList from './Movies/SavedList';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
	const [savedList, setSavedList] = useState([]);

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
				<SavedList list={savedList}/>

				<Route exact path='/' component={MovieList}/>
				<Route path='/movie/:id' render={props => {
					return <Movie {...props} addToSavedList={addToSavedList}/>
				}}/>
			</div>
		</Router>
	);
};

export default App;