import React from 'react';
import { UserCheck, CheckCircle2, Shield, Clock, MapPin, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/carData';

export default function DriverRentalSection() {
  const driverHighlights = [
    'Professional, verified & polite drivers',
    'Local city travel & full-day hire',
    'Reliable airport pickups & drops',
    'Safe outstation long-distance trips',
    'Corporate executive transportation',
    'Family tours & pilgrimage travel',
    'Wedding & grand event chauffeur service'
  ];

  return (
    <section id="with-driver" className="section section-darker">
      <div className="container">
        <div className="chauffeur-box">
          <div>
            <div className="badge-tag">
              <UserCheck size={16} />
              <span>Chauffeur Driven Service</span>
            </div>
            <h2 className="section-title">
              Sit Back. <span className="yellow-highlight">We’ll Take You There.</span>
            </h2>
            <p className="section-subtitle" style={{ textAlign: 'left', margin: '0 0 1.5rem 0' }}>
              Enjoy the luxury of being driven by our courteous, route-savvy professional chauffeurs. Whether navigating Pune’s peak traffic or embarking on an outstation holiday, we handle the wheel while you relax.
            </p>

            <div className="chauffeur-tags">
              {driverHighlights.map((item, idx) => (
                <div key={idx} className="c-tag">
                  <CheckCircle2 size={16} className="yellow-highlight" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href={`https://wa.me/91${BUSINESS_INFO.whatsappNumber}?text=Hello%20JAI%20CAR%20RENTAL,%20I%20would%20like%20to%20book%20a%20car%20with%20driver.`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-lg"
              >
                <MessageCircle size={20} />
                <span>BOOK WITH DRIVER</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phonePrimary}`}
                className="btn btn-secondary btn-lg"
              >
                <Phone size={20} />
                <span>CALL: {BUSINESS_INFO.phonePrimary}</span>
              </a>
            </div>
          </div>

          <div>
            <div style={{
              background: 'rgba(7, 20, 38, 0.75)',
              border: '1px solid var(--navy-border-glow)',
              borderRadius: 'var(--radius-lg)',
              padding: '2rem',
              textAlign: 'left'
            }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--yellow-bright)' }}>
                Chauffeur Standards
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <Shield size={20} className="yellow-highlight" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong>Verified Backgrounds:</strong> Fully verified driving credentials and comprehensive route experience.
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <Clock size={20} className="yellow-highlight" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong>Punctual & Dependable:</strong> Drivers report 15 minutes before scheduled departure time.
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <MapPin size={20} className="yellow-highlight" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong>Navigational Expertise:</strong> Well-versed with Pune, Mumbai Expressway, Konkan, and Maharashtra highways.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
