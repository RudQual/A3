import React from 'react';
import { ArrowRight, LeafyGreen } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="section animate-fade-in-up" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(12, 166, 120, 0.1)', color: 'var(--color-primary-dark)', padding: '0.5rem 1rem', borderRadius: '9999px', marginBottom: '2rem', fontWeight: '600' }}>
            <LeafyGreen size={20} />
            Protecting Our Planet
          </div>
          <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem', color: 'var(--color-dark)' }}>
            Together we can <br />
            <span style={{ color: 'var(--color-primary)', display: 'inline-block', transform: 'rotate(-2deg)' }}>Restore</span> the Earth
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#475569', marginBottom: '2.5rem', maxWidth: '600px' }}>
            Join our global initiative to combat climate change, protect endangered species, and build a sustainable future for generations to come.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#services" className="btn btn-primary">
              Discover Our Work <ArrowRight size={20} />
            </a>
            <a href="#about" className="btn btn-outline">
              Learn More
            </a>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <div style={{ width: '100%', height: '500px', background: 'var(--gradient-primary)', borderRadius: '30px 30px 150px 30px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
             <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80" alt="Lush green forest" style={{ width: '100%', height: '100%', objectFit: 'cover', mixBlendMode: 'overlay', opacity: '0.8' }} />
          </div>
          
          {/* Decorative elements */}
          <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', background: 'white', padding: '1.5rem', borderRadius: '20px', boxShadow: 'var(--shadow-md)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ background: '#ecfdf5', color: 'var(--color-primary)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <h3 style={{ fontSize: '1.5rem', margin: 0 }}>5M+</h3>
            </div>
            <div>
              <p style={{ fontWeight: '700', margin: 0, color: 'var(--color-dark)' }}>Trees Planted</p>
              <p style={{ fontSize: '0.875rem', color: '#64748b', margin: 0 }}>Worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
