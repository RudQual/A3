import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section" style={{ background: 'var(--color-light)' }}>
      <div className="container">
        <h2 className="section-title animate-fade-in-up">Join <span>Us</span></h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
          <div className="animate-fade-in-up delay-100">
            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--color-dark)' }}>Get in Touch</h3>
            <p style={{ color: '#64748b', marginBottom: '2rem', fontSize: '1.1rem' }}>
              Have questions about our initiatives or want to volunteer? We'd love to hear from you. Fill out the form and our team will get back to you shortly.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)' }}>
                  <Mail color="var(--color-primary)" />
                </div>
                <div>
                  <p style={{ fontWeight: '600', color: 'var(--color-dark)', margin: 0 }}>Email Us</p>
                  <p style={{ color: '#64748b', margin: 0 }}>hello@ecofuture.ngo</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)' }}>
                  <Phone color="var(--color-primary)" />
                </div>
                <div>
                  <p style={{ fontWeight: '600', color: 'var(--color-dark)', margin: 0 }}>Call Us</p>
                  <p style={{ color: '#64748b', margin: 0 }}>+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)' }}>
                  <MapPin color="var(--color-primary)" />
                </div>
                <div>
                  <p style={{ fontWeight: '600', color: 'var(--color-dark)', margin: 0 }}>Our Office</p>
                  <p style={{ color: '#64748b', margin: 0 }}>123 Earth Avenue, Green City</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in-up delay-200" style={{ background: 'white', padding: '2.5rem', borderRadius: '24px', boxShadow: 'var(--shadow-md)' }}>
            <form onSubmit={(e) => { e.preventDefault(); alert("Thanks for reaching out! We'll be in touch soon."); }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--color-dark)' }}>Full Name</label>
                <input type="text" required placeholder="John Doe" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none', transition: 'var(--transition)' }} />
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--color-dark)' }}>Email Address</label>
                <input type="email" required placeholder="john@example.com" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none', transition: 'var(--transition)' }} />
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--color-dark)' }}>Message</label>
                <textarea required rows="4" placeholder="How would you like to help?" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none', transition: 'var(--transition)', resize: 'vertical' }}></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
