import React from 'react';
import { Leaf } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <NavLink to="/" className="nav-logo">
          <Leaf color="var(--color-primary)" size={28} />
          EcoFuture
        </NavLink>
        <div className="nav-links">
          <NavLink to="/" end style={({ isActive }) => ({ color: isActive ? 'var(--color-primary)' : 'var(--color-dark)' })}>Home</NavLink>
          <NavLink to="/about" style={({ isActive }) => ({ color: isActive ? 'var(--color-primary)' : 'var(--color-dark)' })}>About</NavLink>
          <NavLink to="/services" style={({ isActive }) => ({ color: isActive ? 'var(--color-primary)' : 'var(--color-dark)' })}>Services</NavLink>
          <NavLink to="/contact" className="btn btn-primary" style={{ padding: '0.5rem 1.2rem', color: 'white' }}>Join Us</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
