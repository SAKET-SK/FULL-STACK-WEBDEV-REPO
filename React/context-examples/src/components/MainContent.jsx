import React, { useContext } from 'react';
import { UserContext } from './App';

function MainContent() {
  // Consume the user context
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

export default MainContent;
