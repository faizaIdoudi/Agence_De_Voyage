import React from 'react';
import './Navbar.css'; // Optional if you plan to add styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Dream Horizons</h1>
      <ul className="navbar-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
