import * as React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

import Navbar from './components/Navbar';
import Chirps from './components/Chirps';
import Add from './components/AddChirp';
import Admin from './components/Admin';
import './scss/app';

const App: React.FC<AppProps> = (props: AppProps) => {
		
	return (
		<main className="container">
			<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Chirps}></Route>
				<Route exact path="/add" component={Add}></Route>
				<Route exact path="/chirps/:id/" component={Admin}></Route>
			</Switch>
			</BrowserRouter>
		</main>
	);
};

interface AppProps {}

export default App;