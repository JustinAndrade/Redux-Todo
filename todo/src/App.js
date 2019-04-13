import React, { Component } from 'react';

import './App.css';

import Navigation from './components/Navigation'
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <h1>Todo List:</h1>
        <TodoList />
      </div>
    );
  }
}

export default App;
