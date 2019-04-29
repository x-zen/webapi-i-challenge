import React, { Component } from 'react';
import './App.css';

import UserList from './components/UserList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Friends GUI | By: x-zen</h1>

        <UserList />
      </div>
    );
  }
}

export default App;
