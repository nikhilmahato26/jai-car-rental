import React from 'react';
import { Users, Armchair, Luggage, Shield, MessageCircle, Phone, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/carData';

export default function FamilyGroupSection() {
  const groupVehicles = [
    {
      name: 'Toyota Innova Crysta',
      type: '7 to 8 Seater Premium MPV',
      img: '/images/innova.jpg',
      features: ['Reclining Captain Seats', 'Dual Air Conditioning', 'Generous Luggage Space', 'Ultra Quiet Cabin']
    },
    {
      name: 'Toyota Fortuner',
      type: '7 Seater Full-Size Luxury SUV',
      img: '/images/fortuner.jpg',
      features: ['Commanding High View', 'Powerful All-Terrain Drive', 'Rugged Safety', 'VIP Stature']
    },
    {
      name: 'Force Tempo Traveller',
      type: '12 to 17 Seater Executive Minibus',
      img: '/images/traveller.jpg',
      features: ['Pushback Luxury Seats', 'Ample Overhead & Boot Space', 'High Roof Standing Comfort', 'Tour & Pilgrimage Specialist']
    }
  ];

  return (
    <section id="family-group" className="section">
      <div className="container">
        <div className="section-header">
          <div className="badge-tag">
            <Users size={15} />
            <span>Group Mobility Solutions</span>
          </div>
          <h2 className="section-title">
            Travel Together. <span className="yellow-highlight">Travel Comfortably.</span>
          </h2>
          <p className="section-subtitle">
            Comfortable vehicle options for families, groups and tours. Keep the laughter, conversations, and memories alive under one roof.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {groupVehicles.map((v, idx) => (
            <div key={idx} style={{
              background: 'var(--navy-card)',
              border: '1.5px solid var(--navy-border)',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ height: '220px', overflow: 'hidden' }}>
                <img
                  src={v.img}
                  alt={v.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{ fontSize: '1.35rem', fontWeight: '800', marginBottom: '0.25rem' }}>{v.name}</h3>
                <div style={{ color: 'var(--yellow-bright)', fontSize: '0.85rem', fontWeight: '700', marginBottom: '1.25rem' }}>
                  {v.type}
                </div>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem', flex: 1 }}>
                  {v.features.map((feat, fIdx) => (
                    <li key={fIdx} style={{ fontSize: '0.86rem', color: '#CBD5E1', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: 'var(--yellow-bright)' }}>✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/91${BUSINESS_INFO.whatsappNumber}?text=Hello%20JAI%20CAR%20RENTAL,%20I%20am%20looking%20for%20a%20group%20vehicle:%20${encodeURIComponent(v.name)}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                >
                  <MessageCircle size={18} />
                  <span>FIND A GROUP VEHICLE</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
