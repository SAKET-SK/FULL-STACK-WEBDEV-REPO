import React, { useState } from 'react';

function CounterWithStep() {
  // Initialize state with count as 0 and step as 1
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  // Function to handle the change in step value
  const handleStepChange = (event) => {
    setStep(Number(event.target.value)); // Convert the input value to a number and update step
  };

  // Function to increment the count by the current step value
  const incrementCount = () => {
    setCount(count + step); // Add the step value to the current count
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <input
        type="number"
        value={step}
        onChange={handleStepChange} // Update the step value when input changes
      />
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default CounterWithStep;
