import React, { useContext } from 'react';

const ThemeContext = React.createContext('dark');

function ThemeButton() {
  const theme = useContext(ThemeContext);

  return <textarea style={{ background: theme === 'light' ? '#fff' : '#333' }}>Theme</textarea>;
}

export default ThemeButton;
