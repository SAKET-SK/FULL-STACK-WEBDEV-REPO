import React, { useContext } from 'react';
import { ThemeContext } from './App';

function Footer() {
    const { theme } = useContext(ThemeContext);
    return (
      <footer className={`footer-${theme}`}>
        <p>App footer in {theme} mode</p>
      </footer>
    );
  }

export default Footer;