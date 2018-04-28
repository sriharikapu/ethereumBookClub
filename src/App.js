import React, { Component } from 'react';
import './App.css';
import {
    HashRouter,
    Route
} from 'react-router-dom';
import Begin from './begin';
import SignUp from './signup';
import Home from './home';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route path="/" render={()=><Begin/>}/>
          <Route path="/signup" render={() => <SignUp/>}/>
          <Route path="/homepage" render={() => <Home/>}/>
        </div>
      </HashRouter>
    );
  }
}

export default App;
