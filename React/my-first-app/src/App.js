import React from 'react';
import Greeting from './Greeting';

function App() {
  return (
    <div className="App">
      <Greeting name="John" />
      <Greeting name="Jane" />
      <Greeting name="Doe" />
    </div>
  );
}

export default App;
