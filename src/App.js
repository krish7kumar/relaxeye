import React from 'react';
import Landing from './Components/Landing/Landing';
import Exercises from './Containers/Exercises/Exercises';
import {HashRouter,Route, Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
      <Switch>
        <Route path='/exercises' component={Exercises} />
        <Route path='/' exact component={Landing} />
      </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
