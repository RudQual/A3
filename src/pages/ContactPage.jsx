import React from 'react';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
      <div className="container" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', color: 'var(--color-dark)' }}>We're Here to Help</h1>
        <p style={{ fontSize: '1.2rem', color: '#64748b', maxWidth: '600px', margin: '1rem auto' }}>
          Whether you're looking to volunteer, donate, or just say hello, our team is always ready to connect with fellow planet protectors!
        </p>
      </div>
      <Contact />
    </div>
  );
};

export default ContactPage;
