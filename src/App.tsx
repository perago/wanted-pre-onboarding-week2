import React from 'react';
import Board from './pages/Board';
import CreateTask from './pages/CreateTask';
import './App.css';

function App() {
  return (
    <div className="App">
      <Board />
      <CreateTask />
    </div>
  );
}

export default App;
