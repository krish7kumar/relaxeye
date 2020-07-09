import React from 'react';
import Landing from './Components/Landing/Landing';
import Exercises from './Containers/Exercises/Exercises';
import {Route, Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/exercises' component={Exercises} />
        <Route path='/' exact component={Landing} />
      </Switch>
    </div>
  );
}

export default App;
