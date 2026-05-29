import React from 'react';
import { Target, Users, Shield } from 'lucide-react';

const About = () => {
  const cards = [
    {
      icon: <Target size={32} color="var(--color-primary)" />,
      title: "Our Mission",
      desc: "To accelerate the transition to a sustainable future through innovative conservation strategies and community empowerment."
    },
    {
      icon: <Users size={32} color="var(--color-primary)" />,
      title: "Community Driven",
      desc: "We believe real change starts at the local level. We work hand-in-hand with indigenous and local communities."
    },
    {
      icon: <Shield size={32} color="var(--color-primary)" />,
      title: "Protect & Preserve",
      desc: "Safeguarding critical ecosystems and biodiversity hotspots from deforestation and industrial exploitation."
    }
  ];

  return (
    <section id="about" className="section" style={{ background: 'white' }}>
      <div className="container">
        <h2 className="section-title animate-fade-in-up">About <span>EcoFuture</span></h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {cards.map((card, index) => (
            <div key={index} className={`animate-fade-in-up delay-${(index + 1) * 100}`} style={{ padding: '2.5rem', background: 'var(--color-light)', borderRadius: '24px', transition: 'var(--transition)', border: '1px solid #e2e8f0', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.borderColor = 'var(--color-primary)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#e2e8f0'; }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(12, 166, 120, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                {card.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-dark)' }}>{card.title}</h3>
              <p style={{ color: '#64748b', lineHeight: '1.7' }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
