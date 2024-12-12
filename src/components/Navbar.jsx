<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const logo = "/Pictures/Logo.jpg"; // Path to your logo image

  return (
    <header className="header">
      <section className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
      </section>
      <nav>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
       
        <Link to="/login" className="nav-link">Login</Link>
      </nav>
    </header>
  );
};

export default Navbar;
=======
// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
};

export default Navbar;

>>>>>>> origin/main
