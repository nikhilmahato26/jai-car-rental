import React from 'react';
import { Plane, Clock, ShieldCheck, Luggage, CheckCircle2, MessageCircle, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/carData';

export default function AirportTransferSection() {
  const highlights = [
    { title: 'Airport Pickup', desc: 'Flight tracking with meet & greet at terminal exit' },
    { title: 'Airport Drop', desc: 'Guaranteed on-time departures to avoid flight delays' },
    { title: 'Comfortable Vehicles', desc: 'Spacious sedans, MPVs, and SUVs with generous boot capacity' },
    { title: 'Professional Drivers', desc: 'Courteous drivers assisting with luggage and smooth routing' },
    { title: 'Advance Booking', desc: 'Secure your transfer days in advance for complete peace of mind' }
  ];

  return (
    <section id="airport-transfers" className="section section-darker">
      <div className="container">
        <div style={{
          background: 'linear-gradient(135deg, #091a33 0%, #05101f 100%)',
          border: '1.5px solid var(--navy-border-glow)',
          borderRadius: 'var(--radius-xl)',
          padding: '3rem 2rem',
          boxShadow: 'var(--shadow-lg)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'center'
          }}>
            <div>
              <div className="badge-tag">
                <Plane size={15} />
                <span>Punctual Flight Connections</span>
              </div>
              <h2 className="section-title">
                Airport Transfers <span className="yellow-highlight">Made Easy</span>
              </h2>
              <p className="section-subtitle" style={{ textAlign: 'left', margin: '0 0 2rem 0' }}>
                Never stress about missing a flight or finding a ride after landing. JAI CAR RENTAL delivers timely airport transfers with clean, air-conditioned cars and experienced chauffeurs.
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1.25rem',
                marginBottom: '2.5rem'
              }}>
                {highlights.map((h, idx) => (
                  <div key={idx} style={{
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.2rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                      <CheckCircle2 size={18} className="yellow-highlight" />
                      <strong style={{ fontSize: '1rem', color: '#FFF' }}>{h.title}</strong>
                    </div>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{h.desc}</p>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href={`https://wa.me/91${BUSINESS_INFO.whatsappNumber}?text=Hello%20JAI%20CAR%20RENTAL,%20I%20need%20an%20airport%20transfer.%20Please%20share%20the%20details.`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary btn-lg"
                >
                  <MessageCircle size={20} />
                  <span>BOOK AIRPORT TRANSFER</span>
                </a>

                <a
                  href={`tel:${BUSINESS_INFO.phonePrimary}`}
                  className="btn btn-secondary btn-lg"
                >
                  <Phone size={20} />
                  <span>CALL FOR AIRPORT CAB</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
