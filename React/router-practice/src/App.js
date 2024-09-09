import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Home component
function Home() {
  return <h2>Home Page</h2>;
}

// About component
function About() {
  return <h2>About Page</h2>;
}

// Services component
function Services() {
  return (
    <div>
      <h2>Our Services</h2>
      <ul>
        <li>Web Development</li>
        <li>Mobile App Development</li>
        <li>SEO Optimization</li>
      </ul>
    </div>
  );
}

// Contact component
function Contact() {
  return (
    <div>
      <h2>Contact Us</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message" />
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

// 404 Not Found component
function NotFound() {
  return <h2>404 - Page Not Found</h2>;
}

// Main App component with routing
function App() {
  return (
    <Router>
      <div>
        {/* Navigation menu */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Routes configuration */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
