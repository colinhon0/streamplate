import logo from './logo.svg';
import './App.css';

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Profile from './pages/Profile'
import Edit from './pages/Edit'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Profile />
          </Route>
          <Route exact path="/edit">
            <Edit />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
