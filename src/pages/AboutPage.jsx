import React from 'react';
import About from '../components/About';

const AboutPage = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
      <div className="container" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', color: 'var(--color-dark)', marginBottom: '1rem' }}>The Story of EcoFuture</h1>
        <p style={{ fontSize: '1.2rem', color: '#64748b', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
          Founded in 2026, EcoFuture started as a small group of passionate volunteers who wanted to make a tangible difference in their local communities. Today, we have grown into a global network of conservationists, scientists, and advocates dedicated to restoring the balance of our planet. Our core belief is simple: every action, no matter how small, contributes to a larger wave of positive change.
        </p>
      </div>
      <About />
      <div className="container" style={{ padding: '4rem 2rem 6rem 2rem' }}>
        <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '2rem' }}>Frequently Asked Questions</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ padding: '1.5rem', background: 'white', borderRadius: '12px', boxShadow: 'var(--shadow-sm)' }}>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Where does our funding go?</h4>
            <p style={{ color: '#64748b' }}>Over 85% of our funding goes directly into conservation projects on the ground, including tree planting, ocean cleanup operations, and community education programs.</p>
          </div>
          <div style={{ padding: '1.5rem', background: 'white', borderRadius: '12px', boxShadow: 'var(--shadow-sm)' }}>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>How can I get involved locally?</h4>
            <p style={{ color: '#64748b' }}>You can check our "Join Us" page to find a local chapter near you, or sign up for our newsletter to get updates on virtual advocacy campaigns you can participate in from home.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
