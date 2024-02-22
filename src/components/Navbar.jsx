import React from 'react';
import '../styles/Navbar.css';
import logo from '../logo.png'; // Import CSS file for styling
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
          <div className="logo">
            <img src={logo} alt = "logo of website"></img>
          </div>
          <div className="navbar-links">
          <a href="#" className="navbar-link">Home</a>
          <a href="#" className="navbar-link">Experience</a>
          <a href="#" className="navbar-link">Contact Me</a>
          </div>
      </div>
    </nav>
  );
}

export default Navbar;
