import React from 'react';
import './App.css';
import TodosLogic from './components/TodosLogic';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="toDo_title">TO DO List</h1>
        <p>Items will persist in the browser local storage</p>
      </header>
      <div className="todos">
        <TodosLogic />
      </div>
    </div>
  );
}

export default App;
