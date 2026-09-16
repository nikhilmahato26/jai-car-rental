import React from 'react';
import { Phone, MessageCircle, MapPin, ArrowUp, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/carData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Brand & Tagline */}
          <div>
            <div style={{ marginBottom: '1rem' }}>
              <span className="brand-name" style={{ fontSize: '1.6rem' }}>
                JAI <span>CAR RENTAL</span>
              </span>
              <span className="brand-subline">PUNE • SELF-DRIVE & CHAUFFEUR</span>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
              Premier car rental service in Wagholi, Pune specializing in self-drive cars, chauffeur-driven rentals, airport transfers, outstation tours, corporate mobility, and wedding fleets.
            </p>

            <div style={{
              background: 'rgba(255, 196, 0, 0.08)',
              borderLeft: '3px solid var(--yellow-bright)',
              padding: '0.75rem 1rem',
              borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
              marginBottom: '1rem'
            }}>
              <div style={{ fontStyle: 'italic', fontWeight: '700', color: 'var(--yellow-bright)', fontSize: '0.95rem' }}>
                "{BUSINESS_INFO.tagline}"
              </div>
              <div style={{ fontSize: '0.78rem', color: '#94A3B8', marginTop: '0.2rem' }}>
                Drive with Confidence • Comfortable Rides
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list">
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About JAI CAR RENTAL</a></li>
              <li><a href="#fleet">Our Fleet</a></li>
              <li><a href="#self-drive">Self Drive Cars</a></li>
              <li><a href="#with-driver">Rental With Driver</a></li>
              <li><a href="#book-now">Book Your Ride</a></li>
              <li><a href="#faq">Frequently Asked Questions</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="footer-col-title">Our Services</h4>
            <ul className="footer-links-list">
              <li><a href="#self-drive">Swift Automatic Self-Drive</a></li>
              <li><a href="#self-drive">Fronx CNG Self-Drive</a></li>
              <li><a href="#airport-transfers">Airport Transfers</a></li>
              <li><a href="#local-outstation">Local Pune City Travel</a></li>
              <li><a href="#local-outstation">Outstation Long Trips</a></li>
              <li><a href="#corporate">Corporate Transportation</a></li>
              <li><a href="#wedding-events">Wedding & VIP Event Cars</a></li>
              <li><a href="#family-group">Family & Group Travel</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Leadership */}
          <div>
            <h4 className="footer-col-title">Contact & Office</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <div>
                <strong style={{ color: '#FFF' }}>{BUSINESS_INFO.owner}</strong>
                <div style={{ fontSize: '0.8rem', color: 'var(--yellow-bright)' }}>{BUSINESS_INFO.title}</div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={16} className="yellow-highlight" />
                <a href={`tel:${BUSINESS_INFO.phonePrimary}`} style={{ color: '#FFF', fontWeight: '700' }}>
                  {BUSINESS_INFO.phonePrimary}
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={16} className="yellow-highlight" />
                <a href={`tel:${BUSINESS_INFO.phoneSecondary}`} style={{ color: '#FFF', fontWeight: '700' }}>
                  {BUSINESS_INFO.phoneSecondary}
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <MapPin size={18} className="yellow-highlight" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{BUSINESS_INFO.address}</span>
              </div>
            </div>

            <div style={{ marginTop: '1.5rem' }}>
              <button
                onClick={scrollToTop}
                className="btn btn-secondary btn-sm"
                style={{ width: '100%' }}
              >
                <ArrowUp size={15} />
                <span>Back to Top</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} <strong>JAI CAR RENTAL</strong>. All rights reserved. Managed by <strong>{BUSINESS_INFO.owner}</strong>.
          </div>
          <div>
            Wagholi, Pune, Maharashtra 412207 • Car Rental & Self-Drive Services
          </div>
        </div>
      </div>
    </footer>
  );
}
