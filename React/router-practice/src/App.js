import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

function Home() {
  const navigate = useNavigate();

  const goToProfile = () => {
    // Programmatically navigate to /profile
    navigate('/profile');
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={goToProfile}>Go to Profile</button>
    </div>
  );
}

function Profile() {
  return <h2>User Profile</h2>;
}

export default App;
