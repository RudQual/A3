import React from 'react';
import Services from '../components/Services';

const ServicesPage = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
      <div style={{ background: 'var(--gradient-primary)', color: 'white', padding: '6rem 2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Our Global Impact</h1>
        <p style={{ fontSize: '1.25rem', opacity: '0.9', maxWidth: '600px', margin: '0 auto' }}>
          Explore the key areas where EcoFuture is making a difference across the globe, from the depths of our oceans to the canopy of our forests.
        </p>
      </div>
      <Services />
      <div className="container" style={{ padding: '2rem 2rem 6rem 2rem', textAlign: 'center' }}>
        <div style={{ background: 'var(--color-light)', padding: '3rem', borderRadius: '24px', display: 'inline-block', maxWidth: '800px' }}>
          <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Need customized partnership solutions?</h3>
          <p style={{ color: '#64748b', marginBottom: '2rem' }}>We work with businesses of all sizes to help them achieve their ESG goals and reduce their carbon footprint through direct sponsorship of our programs.</p>
          <a href="#/contact" className="btn btn-primary">Partner With Us</a>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
