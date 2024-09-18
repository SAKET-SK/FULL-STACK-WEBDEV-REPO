import React, { createContext, useContext, useState } from 'react';

// Create the context
const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('light');  // State to manage the theme

  return (
    <ThemeContext.Provider value={theme}>
      <Header />
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </ThemeContext.Provider>
  );
}

function Header() {
  const theme = useContext(ThemeContext);  // Get the theme from context

  return (
    <header className={`header-${theme}`}>
      <h1>Current Theme: {theme}</h1>
    </header>
  );
}

export default App;