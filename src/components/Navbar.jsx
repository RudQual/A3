import React from 'react';
import { Leaf } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="#" className="nav-logo">
          <Leaf color="var(--color-primary)" size={28} />
          EcoFuture
        </a>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1.2rem', color: 'white' }}>Join Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
