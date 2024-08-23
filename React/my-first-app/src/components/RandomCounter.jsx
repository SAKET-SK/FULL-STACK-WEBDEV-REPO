import React, { useState } from 'react';

function RandomCounter() {
  // Function to generate a random number
  const generateRandomNumber = () => {
    console.log('Generating a random number...');
    return Math.floor(Math.random() * 100);
  };

  // Initialize the state with the random number generator function
  const [count, setCount] = useState(generateRandomNumber);

  return (
    <div>
      <p>Initial Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default RandomCounter;
