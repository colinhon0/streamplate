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
    <div className='App'>
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
    </div>
  );
}

export default App;
