import React from 'react';
import { MapPin, Navigation, CheckCircle2, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/carData';

export default function LocalOutstationSection() {
  return (
    <section id="local-outstation" className="section">
      <div className="container">
        <div className="section-header">
          <div className="badge-tag">Versatile Travel Options</div>
          <h2 className="section-title">
            Local & <span className="yellow-highlight">Outstation Journeys</span>
          </h2>
          <p className="section-subtitle">
            Whether you need a reliable car for a few hours around Pune or a multi-day highway tour across Maharashtra, we offer flexible packages designed for you.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {/* Card 1: Local City Travel */}
          <div style={{
            background: 'var(--navy-card)',
            border: '1.5px solid var(--navy-border)',
            borderRadius: 'var(--radius-xl)',
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '0',
              left: '0',
              right: '0',
              height: '4px',
              background: 'linear-gradient(90deg, var(--yellow-bright), transparent)'
            }}></div>

            <div style={{
              width: '54px',
              height: '54px',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(255, 196, 0, 0.12)',
              border: '1px solid var(--navy-border-glow)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--yellow-bright)',
              marginBottom: '1.5rem'
            }}>
              <MapPin size={28} />
            </div>

            <h3 style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '0.75rem' }}>
              LOCAL CITY TRAVEL
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              Hassle-free rides across Wagholi, Kharadi, Viman Nagar, Hinjewadi, Shivaji Nagar, and greater Pune.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem', flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem' }}>
                <CheckCircle2 size={18} className="yellow-highlight" />
                <span>City rides & daily shopping errands</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem' }}>
                <CheckCircle2 size={18} className="yellow-highlight" />
                <span>Personal travel & hospital/clinic visits</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem' }}>
                <CheckCircle2 size={18} className="yellow-highlight" />
                <span>Family travel & social visits</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem' }}>
                <CheckCircle2 size={18} className="yellow-highlight" />
                <span>Business meetings & client visits</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem' }}>
                <CheckCircle2 size={18} className="yellow-highlight" />
                <span>Local Pune sightseeing & heritage tours</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.85rem' }}>
              <a
                href={`https://wa.me/91${BUSINESS_INFO.whatsappNumber}?text=Hello%20JAI%20CAR%20RENTAL,%20I%20would%20like%20to%20enquire%20about%20Local%20City%20Travel.`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
                style={{ flex: 1 }}
              >
                <MessageCircle size={18} />
                <span>ENQUIRE NOW</span>
              </a>
              <a href={`tel:${BUSINESS_INFO.phonePrimary}`} className="btn btn-secondary">
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Card 2: Outstation Travel */}
          <div style={{
            background: 'var(--navy-card)',
            border: '1.5px solid var(--navy-border)',
            borderRadius: 'var(--radius-xl)',
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '0',
              left: '0',
              right: '0',
              height: '4px',
              background: 'linear-gradient(90deg, #25D366, transparent)'
            }}></div>

            <div style={{
              width: '54px',
              height: '54px',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(37, 211, 102, 0.12)',
              border: '1px solid rgba(37, 211, 102, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#25D366',
              marginBottom: '1.5rem'
            }}>
              <Navigation size={28} />
            </div>

            <h3 style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '0.75rem' }}>
              OUTSTATION TRAVEL
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              Comfortable, reliable, and scenic long-distance road trips with highway-tested cars and drivers.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem', flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem' }}>
                <CheckCircle2 size={18} style={{ color: '#25D366' }} />
                <span>Weekend trips to Lonavala, Mahabaleshwar & Alibaug</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem' }}>
                <CheckCircle2 size={18} style={{ color: '#25D366' }} />
                <span>Family journeys to Mumbai, Nashik & Goa</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem' }}>
                <CheckCircle2 size={18} style={{ color: '#25D366' }} />
                <span>Long-distance & round-trip inter-city journeys</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem' }}>
                <CheckCircle2 size={18} style={{ color: '#25D366' }} />
                <span>Group travel & pilgrimage to Shirdi, Ashtavinayak</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem' }}>
                <CheckCircle2 size={18} style={{ color: '#25D366' }} />
                <span>Holiday vacations & multi-day itineraries</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.85rem' }}>
              <a
                href={`https://wa.me/91${BUSINESS_INFO.whatsappNumber}?text=Hello%20JAI%20CAR%20RENTAL,%20I%20would%20like%20to%20book%20an%20outstation%20vehicle.`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp"
                style={{ flex: 1 }}
              >
                <MessageCircle size={18} />
                <span>PLAN YOUR TRIP</span>
              </a>
              <a href={`tel:${BUSINESS_INFO.phonePrimary}`} className="btn btn-secondary">
                <Phone size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
