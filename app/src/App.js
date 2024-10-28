import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Link } from 'react-router-dom';
import AboutUs from './AboutUs';
import Categories from './Categories';
import Subscription from './Subscription';
import Hero from './Hero';
import WhatsInside from './WhatsInside';
import HowItWorks from './HowItWorks';
import Footer from './Footer';
import './App.css';

function Bar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/categories">Categories</Link></li>
        <li><Link to="/subscription">Subscription</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/login">Join | Log in 🛒</Link></li>
      </ul>
    </nav>
  );
}

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Bar />
      <main>
        {location.pathname === "/" && (
          <>
            <Hero />
            <WhatsInside />
            <HowItWorks />
          </>
        )}
        <Routes>
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/subscription" element={<Subscription />} />
          {/* Add other routes if needed */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function Wrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}