import React, { createContext, useContext, useState } from 'react';

// Create contexts
const ThemeContext = createContext(null);
const UserContext = createContext(null);

function App() {
  // State for theme and user
  const [theme, setTheme] = useState('light');
  const [user, setUser] = useState({ name: 'Guest', isLoggedIn: false });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <MainContent />
        <Footer />
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

function Header() {
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

function MainContent() {
  const { user, setUser } = useContext(UserContext);

  const handleLogin = () => {
    setUser({ name: 'John Doe', isLoggedIn: true });
  };

  const handleLogout = () => {
    setUser({ name: 'Guest', isLoggedIn: false });
  };

  return (
    <main>
      {user.isLoggedIn ? (
        <div>
          <h2>Welcome, {user.name}!</h2>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      ) : (
        <div>
          <h2>Please log in</h2>
          <button onClick={handleLogin}>Log In</button>
        </div>
      )}
    </main>
  );
}

function Footer() {
  const { theme } = useContext(ThemeContext);
  return (
    <footer className={`footer-${theme}`}>
      <p>App footer in {theme} mode</p>
    </footer>
  );
}

export default App;
