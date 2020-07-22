import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../../Components/UI/Navbar/Navbar';
import Exercise1 from './Exercise1/Exercise1';
import Exercise2 from './Exercise2/Exercise2';
import Exercise3 from './Exercise3/Exercise3';
import Exercise4 from './Exercise4/Exercise4';

const exercises = () => {
	return (
		<React.Fragment>
			<Navbar />
			<Switch>
				<Route path="/exercises/4" component={Exercise4} />
				<Route path="/exercises/3" exact component={Exercise3} />
				<Route path="/exercises/2" exact component={Exercise2} />
				<Route path="/exercises" exact component={Exercise1} />
			</Switch>
		</React.Fragment>
	);
};

export default exercises;
