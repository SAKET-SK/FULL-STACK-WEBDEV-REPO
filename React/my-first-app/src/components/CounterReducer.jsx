import React, { useReducer } from 'react';

// Step 1: Define the reducer function
function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

// Step 2: Create the Counter component
function CounterReducer() {
  // Initial state
  const initialState = { count: 0 };

  // Step 3: Use the useReducer hook
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      {/* Step 4: Dispatch actions to update the state */}
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}

// Step 5: Export the Counter component
export default CounterReducer;
