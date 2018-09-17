import React, { Component } from 'react';
import {Switch, Route} from "react-router-dom";

import Header from "../Header";
import AddWord from "../AddWord";
import Home from "../Home";
import Auth from "../Auth";
import Dictionaries from "../Dictionaries";
import Dictionary from "../Dictionary";

class App extends Component {
	render() {
		return (
			<div className="app">
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/add-word" component={AddWord} />
					<Route path="/dictionaries" component={Dictionaries} />
					<Route path="/dictionary/:lang" component={Dictionary} />
					<Route path="/login" component={Auth} />
				</Switch>
			</div>
		);
	}
}
export default App;
