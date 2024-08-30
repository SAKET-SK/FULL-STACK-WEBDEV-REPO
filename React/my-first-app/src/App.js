import React from 'react';
import CounterReducer from './components/CounterReducer'; // Assuming Counter.js is in the same directory

function App() {
  return (
    <div className="App">
      <h1>React Counter with useReducer</h1>
      <CounterReducer />
    </div>
  );
}

export default App;
