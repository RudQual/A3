import React from 'react';
import { Heart, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <Globe size={24} color="var(--color-primary)" />
          <h3 style={{ fontSize: '1.5rem', color: 'white' }}>EcoFuture</h3>
        </div>
        <p>Built with <Heart size={16} color="red" style={{ display: 'inline', verticalAlign: 'middle' }} /> by AI for a greener tomorrow.</p>
        <p style={{ marginTop: '2rem', fontSize: '0.875rem' }}>&copy; {new Date().getFullYear()} EcoFuture NGO. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
