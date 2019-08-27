import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Speakers from './components/Speakers';
import Header from './components/Header';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/speakers">
          <Speakers />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
