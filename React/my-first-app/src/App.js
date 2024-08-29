import React, { createContext, useContext, useState } from 'react';

// Step 1: Create a Context for the theme with a default value of "light"
const ThemeContext = createContext('light');

function App() {
  // Step 2: Manage the theme state with useState
  const [theme, setTheme] = useState('light');

  // Function to toggle between "light" and "dark" themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    // Step 3: Provide the current theme value to all child components
    <ThemeContext.Provider value={theme}>
      {/* Button to toggle the theme */}
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
      
      {/* Render the component that uses the theme */}
      <ThemedComponent />
    </ThemeContext.Provider>
  );
}

function ThemedComponent() {
  // Step 4: Access the current theme value from the ThemeContext
  const theme = useContext(ThemeContext);

  // Apply styles based on the current theme and display the theme
  return (
    <div style={{ 
      background: theme === 'light' ? '#fff' : '#333', 
      color: theme === 'light' ? '#000' : '#fff',
      padding: '10px',
      borderRadius: '5px',
      textAlign: 'center',
      marginTop: '20px',
      border: '5px solid crimson'
    }}>
      The current theme is {theme}.
    </div>
  );
}

export default App;
