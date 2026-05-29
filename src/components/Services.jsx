import React from 'react';
import { TreePine, Droplets, Wind } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <TreePine size={40} color="white" />,
      title: "Reforestation",
      desc: "Massive scale tree planting in deforested areas to restore habitats and sequester carbon.",
      img: "https://images.unsplash.com/photo-1543837173-6c26bd816d37?auto=format&fit=crop&q=80"
    },
    {
      icon: <Droplets size={40} color="white" />,
      title: "Ocean Cleanup",
      desc: "Removing plastic waste from our oceans and protecting marine life ecosystems.",
      img: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?auto=format&fit=crop&q=80"
    },
    {
      icon: <Wind size={40} color="white" />,
      title: "Renewable Advocacy",
      desc: "Pushing for policy changes and funding towards wind and solar energy projects globally.",
      img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title animate-fade-in-up">Our <span>Impact</span> Areas</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
          {services.map((srv, index) => (
            <div key={index} className={`animate-fade-in-up delay-${(index + 1) * 100}`} style={{ borderRadius: '24px', overflow: 'hidden', background: 'white', boxShadow: 'var(--shadow-md)', position: 'relative', group: 'hover' }}>
              <div style={{ height: '200px', width: '100%', overflow: 'hidden' }}>
                <img src={srv.img} alt={srv.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'var(--transition)' }} className="service-img" />
              </div>
              <div style={{ padding: '2rem', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-30px', right: '2rem', width: '60px', height: '60px', background: 'var(--gradient-primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-glow)' }}>
                  {srv.icon}
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-dark)' }}>{srv.title}</h3>
                <p style={{ color: '#64748b', lineHeight: '1.6' }}>{srv.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        .service-img:hover {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
};

export default Services;
