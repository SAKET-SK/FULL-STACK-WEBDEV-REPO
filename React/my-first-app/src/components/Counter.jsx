import React, { useState } from 'react';

function Counter() {
  // Declare a state variable named "count" and a function "setCount" to update it.
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter: {count}</h2>
      {/* Increment the count when the button is clicked */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
