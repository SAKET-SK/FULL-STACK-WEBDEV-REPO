import React, { useRef } from 'react';

function FocusInput() {
  // Create a ref object
  const inputRef = useRef(null);

  // Function to focus the input field
  const handleFocus = () => {
    inputRef.current.focus(); // Focus the input element
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Focus me!" />
      <br/>
      <button onClick={handleFocus}>Focus the input</button>
    </div>
  );
}

export default FocusInput;
