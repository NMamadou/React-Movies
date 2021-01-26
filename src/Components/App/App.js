import React from 'react'
import MovieContainer from '../../Containers/Movie/MovieContainer'
import NewMovieContainer from '../../Containers/Movie/NewMovieContainer'
import EditMovieContainer from '../../Containers/Movie/EditMovieContainer'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../Styles/Styles.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NewMovie from '../Movie/NewMovie';
import Movies from '../Movie/Movies';

const App = () => (
	<div className="moviesContainer">
		<Router>
			<Switch>
				<Route path="/edit/">
					<EditMovieContainer />
				</Route>
				<Route path="/new">
					<NewMovieContainer />
				</Route>
				<Route path="/">
					<MovieContainer />
				</Route>
			</Switch>
		</Router>
    </div>
)

export default App
