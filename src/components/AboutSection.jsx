import React from 'react';
import { ShieldCheck, UserCheck, MapPin, Award, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/carData';

export default function AboutSection() {
  return (
    <section id="about" className="section section-darker">
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          alignItems: 'center'
        }}>
          <div>
            <div className="badge-tag">Company Profile</div>
            <h2 className="section-title">
              About <span className="yellow-highlight">JAI CAR RENTAL</span>
            </h2>
            
            <div style={{
              background: 'var(--navy-card)',
              border: '1px solid var(--navy-border-glow)',
              borderRadius: 'var(--radius-xl)',
              padding: '2.5rem',
              boxShadow: 'var(--shadow-md)'
            }}>
              <p style={{ fontSize: '1.1rem', color: '#E2E8F0', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                <strong>JAI CAR RENTAL</strong> provides premier car rental solutions based out of <strong>Wagholi, Pune</strong>. We offer comprehensive automotive mobility covering <strong>self-drive rentals, chauffeur-driven travel, airport transfers, local rides, outstation trips, corporate travel, wedding & event transportation</strong>, and <strong>family & group travel</strong>.
              </p>

              <div style={{
                background: 'rgba(255, 196, 0, 0.08)',
                borderLeft: '4px solid var(--yellow-bright)',
                padding: '1.25rem 1.5rem',
                borderRadius: '0 var(--radius-md) var(--radius-md) 0',
                marginBottom: '2rem'
              }}>
                <div style={{ fontSize: '0.82rem', textTransform: 'uppercase', color: 'var(--yellow-bright)', fontWeight: '800' }}>
                  Leadership & Management
                </div>
                <div style={{ fontSize: '1.35rem', fontWeight: '900', color: '#FFF', marginTop: '0.2rem' }}>
                  {BUSINESS_INFO.owner}
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  {BUSINESS_INFO.title} • JAI CAR RENTAL Pune
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <CheckCircle size={18} className="yellow-highlight" />
                  <span style={{ fontSize: '0.92rem' }}>Wagholi Green, Pune Hub</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <CheckCircle size={18} className="yellow-highlight" />
                  <span style={{ fontSize: '0.92rem' }}>Self-Drive & With Driver</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <CheckCircle size={18} className="yellow-highlight" />
                  <span style={{ fontSize: '0.92rem' }}>Local & Maharashtra Outstation</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <CheckCircle size={18} className="yellow-highlight" />
                  <span style={{ fontSize: '0.92rem' }}>24/7 Booking Assistance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
