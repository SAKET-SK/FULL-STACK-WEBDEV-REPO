import React, { useContext } from 'react';
import { ThemeContext } from './App';

function Header() {
  // Consume the theme context
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <header className={`header-${theme}`}>
      <h1>Welcome to the App</h1>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </header>
  );
}

export default Header;
