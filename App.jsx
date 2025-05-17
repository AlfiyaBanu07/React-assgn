import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Team from './pages/Team';
import Project from './pages/Project';
import Location from './pages/Location';
import Contact from './pages/Contact';
import Login from './pages/Login';  // Import Login component
import Register from './pages/Register';  // Import Register component
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/project">Project Idea</Link> | 
        <Link to="/team">Team</Link> | 
        <Link to="/location">Location</Link> | 
        <Link to="/contact">Contact</Link> | 
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/team" element={<Team />} />
        <Route path="/location" element={<Location />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} /> {/* Added Login route */}
        <Route path="/register" element={<Register />} /> {/* Added Register route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
