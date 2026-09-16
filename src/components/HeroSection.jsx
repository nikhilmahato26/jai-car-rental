import React from 'react';
import { Phone, MessageCircle, Calendar, ShieldCheck, CheckCircle2, ChevronRight, Car } from 'lucide-react';
import { BUSINESS_INFO } from '../data/carData';

export default function HeroSection() {
  const heroVehicles = [
    { name: 'Swift Automatic', type: 'Self-Drive / City' },
    { name: 'Fronx CNG', type: 'Self-Drive / Eco' },
    { name: 'Fortuner', type: 'Premium SUV' },
    { name: 'Innova Crysta', type: 'Luxury MPV' },
    { name: 'Traveller', type: 'Group 12-17 Seater' }
  ];

  return (
    <section id="hero" className="hero-section">
      {/* Background Graphic & Dark Navy Gradient */}
      <div className="hero-background-wrapper">
        <img
          src="/images/hero_banner.jpg"
          alt="JAI CAR RENTAL Premium Fleet"
          className="hero-bg-img"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-content-wrapper">
          {/* Left Column: Heading & Value Proposition */}
          <div className="hero-text">
            <div className="hero-label">
              <ShieldCheck size={16} />
              <span>JAI CAR RENTAL • PUNE</span>
            </div>

            <h1 className="hero-title">
              RENT A CAR FOR <br />
              <span className="hero-title-highlight">EVERY JOURNEY</span>
            </h1>

            <div className="hero-subservices">
              <span>Local</span> • 
              <span>Outstation</span> • 
              <span>Airport</span> • 
              <span>Corporate</span> • 
              <span>Weddings</span> • 
              <span>Family Trips</span>
            </div>

            <div className="hero-tagline-box">
              <p className="hero-tagline-text">
                "{BUSINESS_INFO.tagline}"
              </p>
              <p style={{ fontSize: '0.85rem', color: '#94A3B8', marginTop: '0.25rem' }}>
                Drive with Confidence • Comfortable Rides. Memorable Journeys.
              </p>
            </div>

            {/* CTAs */}
            <div className="hero-cta-group">
              <a href="#book-now" className="btn btn-primary btn-lg">
                <Calendar size={20} />
                <span>BOOK YOUR CAR</span>
              </a>

              <a
                href={`https://wa.me/91${BUSINESS_INFO.whatsappNumber}?text=Hello%20JAI%20CAR%20RENTAL,%20I%20would%20like%20to%20enquire%20about%20car%20rental.`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                <MessageCircle size={20} />
                <span>WHATSAPP</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phonePrimary}`}
                className="btn btn-secondary btn-lg"
              >
                <Phone size={20} />
                <span>CALL NOW</span>
              </a>
            </div>

            {/* Direct Phone Numbers Strip */}
            <div className="hero-contact-strip">
              <div className="hero-contact-item">
                <Phone size={18} className="yellow-highlight" />
                <a href={`tel:${BUSINESS_INFO.phonePrimary}`}>{BUSINESS_INFO.phonePrimary}</a>
              </div>
              <div className="hero-contact-item">
                <Phone size={18} className="yellow-highlight" />
                <a href={`tel:${BUSINESS_INFO.phoneSecondary}`}>{BUSINESS_INFO.phoneSecondary}</a>
              </div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                📍 Wagholi Green, Pune 412207
              </div>
            </div>
          </div>

          {/* Right Column: High Converting Quick Card */}
          <div className="hero-card">
            <div className="hero-card-header">
              <h3 className="hero-card-title">
                <Car className="yellow-highlight" size={24} />
                <span>Instant Fleet Availability</span>
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.35rem' }}>
                Self-Drive or Chauffeur Driven cars ready in Wagholi & Pune.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(255,255,255,0.04)', padding: '0.75rem', borderRadius: 'var(--radius-md)' }}>
                <CheckCircle2 className="yellow-highlight" size={20} />
                <div>
                  <div style={{ fontWeight: '700', fontSize: '0.95rem' }}>Swift Automatic ZXi Petrol</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Verified Self-Drive Option</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(255,255,255,0.04)', padding: '0.75rem', borderRadius: 'var(--radius-md)' }}>
                <CheckCircle2 className="yellow-highlight" size={20} />
                <div>
                  <div style={{ fontWeight: '700', fontSize: '0.95rem' }}>Fronx CNG</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Verified Eco & Fuel Efficient</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(255,255,255,0.04)', padding: '0.75rem', borderRadius: 'var(--radius-md)' }}>
                <CheckCircle2 className="yellow-highlight" size={20} />
                <div>
                  <div style={{ fontWeight: '700', fontSize: '0.95rem' }}>Fortuner, Innova & Crysta</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Luxury MPVs & Chauffeur Rides</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(255,255,255,0.04)', padding: '0.75rem', borderRadius: 'var(--radius-md)' }}>
                <CheckCircle2 className="yellow-highlight" size={20} />
                <div>
                  <div style={{ fontWeight: '700', fontSize: '0.95rem' }}>Tempo Traveller (12-17 Seats)</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Group & Pilgrimage Tours</div>
                </div>
              </div>
            </div>

            <a href="#book-now" className="btn btn-primary" style={{ width: '100%' }}>
              <span>REQUEST A QUOTE</span>
              <ChevronRight size={18} />
            </a>
          </div>
        </div>

        {/* Featured Vehicles Ticker Bar */}
        <div className="hero-fleet-strip">
          {heroVehicles.map((car, idx) => (
            <div key={idx} className="fleet-pill">
              <span>✓</span>
              <div>
                <strong>{car.name}</strong>{' '}
                <small style={{ opacity: 0.6 }}>({car.type})</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
