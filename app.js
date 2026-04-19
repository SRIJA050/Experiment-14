import React from 'react';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2 style={{ textAlign: "center" }}>TODO APP</h2>
      <TodoList />
    </div>
  );
}

export default App;
