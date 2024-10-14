import React from 'react';
import { useSelector, useDispatch } from 'react-redux';  // Import hooks
import { increment, decrement } from './actions/counterActions';

function App() {
  const count = useSelector((state) => state);  // Access the state
  const dispatch = useDispatch();  // Create a dispatch function

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
}

export default App;
