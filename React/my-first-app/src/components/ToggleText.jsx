import React, { useState } from 'react';

function ToggleText() {
  // Initialize state for visibility (true means the text is visible)
  const [isVisible, setIsVisible] = useState(true);

  // Function to toggle the visibility state
  const toggleVisibility = () => {
    setIsVisible(!isVisible); // Toggle between true and false
  };

  return (
    <div>
      {/* Conditionally render the text based on isVisible state */}
      {isVisible && <p>This text can be toggled on and off.</p>}
      
      {/* Button to trigger the toggle */}
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'} Text
      </button>
    </div>
  );
}

export default ToggleText;
