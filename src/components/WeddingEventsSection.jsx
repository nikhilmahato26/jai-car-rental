import React from 'react';
import { Sparkles, Heart, Crown, Users, CheckCircle2, MessageCircle, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/carData';

export default function WeddingEventsSection() {
  const weddingOfferings = [
    { title: 'Bridal & Groom Grand Entry', desc: 'Decorated luxury sedans and premium SUVs for unforgettable milestone photographs.' },
    { title: 'Wedding Guest Shuttles', desc: 'Comfortable Innova Crysta and Tempo Travellers shuttling guests between venues and hotels.' },
    { title: 'VIP Dignitary Escort', desc: 'Discreet, polished, and top-trim cars suited for high-profile attendees and family elders.' },
    { title: 'Multi-Day Wedding Packages', desc: 'Comprehensive fleet bookings covering Haldi, Sangeet, Baraat, and Reception ceremonies.' }
  ];

  return (
    <section id="wedding-events" className="section section-darker" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          alignItems: 'center'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(15, 34, 64, 0.95) 0%, rgba(7, 20, 38, 0.98) 100%)',
            border: '1.5px solid var(--yellow-bright)',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5), var(--shadow-yellow)'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              alignItems: 'center'
            }}>
              <div style={{ maxHeight: '380px', overflow: 'hidden' }}>
                <img
                  src="/images/wedding_luxury.jpg"
                  alt="Wedding & Event Luxury Car"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div style={{ padding: '3rem 2.5rem' }}>
                <div className="badge-tag">
                  <Crown size={15} />
                  <span>Celebrations & Milestones</span>
                </div>
                <h2 className="section-title">
                  Make Every <span className="yellow-highlight">Arrival Special</span>
                </h2>
                <p className="section-subtitle" style={{ textAlign: 'left', margin: '0 0 2rem 0' }}>
                  Celebrate life’s most cherished celebrations with regal sophistication. From bride & groom luxury arrivals to end-to-end guest logistics across Pune and destination venues.
                </p>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: '1.25rem',
                  marginBottom: '2.5rem'
                }}>
                  {weddingOfferings.map((item, idx) => (
                    <div key={idx} style={{
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 196, 0, 0.2)',
                      borderRadius: 'var(--radius-md)',
                      padding: '1.25rem'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                        <Sparkles size={16} className="yellow-highlight" />
                        <strong style={{ color: '#FFF' }}>{item.title}</strong>
                      </div>
                      <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <a
                    href={`https://wa.me/91${BUSINESS_INFO.whatsappNumber}?text=Hello%20JAI%20CAR%20RENTAL,%20I%20would%20like%20to%20enquire%20about%20Wedding%20and%20Event%20Cars.`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary btn-lg"
                  >
                    <MessageCircle size={20} />
                    <span>BOOK EVENT CARS</span>
                  </a>
                  <a
                    href={`tel:${BUSINESS_INFO.phonePrimary}`}
                    className="btn btn-secondary btn-lg"
                  >
                    <Phone size={20} />
                    <span>SPEAK WITH EVENT PLANNER</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
