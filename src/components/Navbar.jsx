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
