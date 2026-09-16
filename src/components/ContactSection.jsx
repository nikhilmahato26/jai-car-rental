import React from 'react';
import { Phone, MessageCircle, MapPin, User, Calendar, Mail } from 'lucide-react';
import { BUSINESS_INFO } from '../data/carData';

export default function ContactSection() {
  const mapSearchAddress = encodeURIComponent(BUSINESS_INFO.address);
  const mapEmbedUrl = `https://maps.google.com/maps?q=${mapSearchAddress}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <div className="badge-tag">Direct Inquiries</div>
          <h2 className="section-title">
            Contact <span className="yellow-highlight">JAI CAR RENTAL</span>
          </h2>
          <p className="section-subtitle">
            Reach out directly for instant quotes, custom rental durations, corporate partnerships, or vehicle pick-up details.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left: Contact Info Card */}
          <div className="contact-info-card">
            <span className="manager-badge">Direct Contact</span>
            <h3 className="manager-name">{BUSINESS_INFO.owner}</h3>
            <p className="manager-title">{BUSINESS_INFO.title}</p>

            <div className="contact-items-list">
              {/* Primary Phone */}
              <div className="contact-detail-row">
                <div className="contact-icon-box">
                  <Phone size={22} />
                </div>
                <div>
                  <div className="contact-detail-label">Primary Contact & WhatsApp</div>
                  <a href={`tel:${BUSINESS_INFO.phonePrimary}`} className="contact-detail-value yellow-highlight">
                    {BUSINESS_INFO.phonePrimary}
                  </a>
                </div>
              </div>

              {/* Secondary Phone */}
              <div className="contact-detail-row">
                <div className="contact-icon-box">
                  <Phone size={22} />
                </div>
                <div>
                  <div className="contact-detail-label">Secondary Contact Number</div>
                  <a href={`tel:${BUSINESS_INFO.phoneSecondary}`} className="contact-detail-value">
                    {BUSINESS_INFO.phoneSecondary}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="contact-detail-row">
                <div className="contact-icon-box">
                  <MapPin size={22} />
                </div>
                <div>
                  <div className="contact-detail-label">Operating Office & Hub Location</div>
                  <div className="contact-detail-value" style={{ fontSize: '1rem', fontWeight: '500' }}>
                    {BUSINESS_INFO.address}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.85rem' }}>
              <a href={`tel:${BUSINESS_INFO.phonePrimary}`} className="btn btn-primary btn-sm">
                <Phone size={16} />
                <span>CALL NOW</span>
              </a>

              <a
                href={`https://wa.me/91${BUSINESS_INFO.whatsappNumber}?text=Hello%20JAI%20CAR%20RENTAL,%20I%20would%20like%20to%20enquire%20about%20car%20rental.`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp btn-sm"
              >
                <MessageCircle size={16} />
                <span>WHATSAPP</span>
              </a>

              <a href="#book-now" className="btn btn-secondary btn-sm">
                <Calendar size={16} />
                <span>BOOK A CAR</span>
              </a>
            </div>
          </div>

          {/* Right: Google Map Container */}
          <div className="map-wrapper">
            <div className="map-embed-container">
              <iframe
                title="JAI CAR RENTAL Wagholi Pune Location Map"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '340px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="map-location-footer">
              <MapPin size={18} className="yellow-highlight" style={{ flexShrink: 0 }} />
              <div>
                <strong>Location:</strong> Wagholi Green, Phase 2, Jagtap Wasti – Wagholi, Pune – 412207
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
