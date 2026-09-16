import React, { useState } from 'react';
import { Key, CheckCircle, Phone, MessageCircle, ChevronLeft, ChevronRight, ArrowRight, Camera } from 'lucide-react';
import { BUSINESS_INFO, REAL_FLEET_VEHICLES } from '../data/carData';

export default function SelfDriveSection() {
  const [swiftSlideIdx, setSwiftSlideIdx] = useState(0);
  const [fronxSlideIdx, setFronxSlideIdx] = useState(0);

  const swiftVehicle = REAL_FLEET_VEHICLES.find(v => v.id === 'swift-automatic-mh14') || REAL_FLEET_VEHICLES[0];
  const fronxVehicle = REAL_FLEET_VEHICLES.find(v => v.id === 'fronx-cng-mh12') || REAL_FLEET_VEHICLES[1];

  const currentSwiftSlide = swiftVehicle.slides[swiftSlideIdx] || swiftVehicle.slides[0];
  const currentFronxSlide = fronxVehicle.slides[fronxSlideIdx] || fronxVehicle.slides[0];

  const selfDriveFeatures = [
    { label: 'Automatic & Manual Options', desc: 'Effortless city and highway driving' },
    { label: 'Petrol & CNG Available', desc: 'Fuel efficient and cost-saving choices' },
    { label: 'Spotless & Well-Maintained', desc: 'Full mechanical check before handover' },
    { label: 'Flexible Rental Packages', desc: '12-Hour, 24-Hour, Daily to Monthly' },
    { label: 'Fast & Easy Booking', desc: 'Minimal paperwork and quick KYC' },
    { label: '24/7 Roadside Assistance', desc: 'Complete peace of mind on the road' }
  ];

  return (
    <section id="self-drive" className="section self-drive-section">
      <div className="container">
        <div className="section-header">
          <div className="badge-tag">
            <Key size={15} />
            <span>Freedom of the Open Road</span>
          </div>
          <h2 className="section-title">
            Rent a Car. <span className="yellow-highlight">Explore More.</span>
          </h2>
          <p className="section-subtitle">
            Drive with confidence and enjoy the freedom of your own journey with JAI CAR RENTAL. Experience total privacy, flexible schedules, and verified top-trim cars.
          </p>
        </div>

        {/* Featured Self-Drive Cars Grid (Swift & Fronx) */}
        <div className="self-drive-highlight-grid">
          {/* Card 1: Swift Automatic ZXi Petrol */}
          <div className="featured-car-card">
            <div className="featured-car-img-box">
              <img
                key={currentSwiftSlide.id}
                src={currentSwiftSlide.image}
                alt={currentSwiftSlide.alt}
                className="featured-car-img"
              />
              <span className="featured-tag">★ Actual Car • MH14 MF 8712</span>
              
              {/* Slider Angle Tag */}
              <span className="featured-angle-tag">{currentSwiftSlide.tag}</span>

              {/* Slider Controls */}
              <button
                type="button"
                className="card-slider-nav-btn prev"
                onClick={() => setSwiftSlideIdx((prev) => (prev > 0 ? prev - 1 : swiftVehicle.slides.length - 1))}
                aria-label="Previous photo angle"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                className="card-slider-nav-btn next"
                onClick={() => setSwiftSlideIdx((prev) => (prev < swiftVehicle.slides.length - 1 ? prev + 1 : 0))}
                aria-label="Next photo angle"
              >
                <ChevronRight size={20} />
              </button>

              <div className="card-slider-dots">
                {swiftVehicle.slides.map((s, idx) => (
                  <button
                    key={s.id}
                    type="button"
                    className={`card-slider-dot ${idx === swiftSlideIdx ? 'active' : ''}`}
                    onClick={() => setSwiftSlideIdx(idx)}
                    aria-label={s.label}
                  />
                ))}
              </div>
            </div>

            {/* Quick Angle Switcher Tabs */}
            <div className="card-quick-angle-tabs">
              {swiftVehicle.slides.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setSwiftSlideIdx(idx)}
                  className={`quick-angle-tab-btn ${idx === swiftSlideIdx ? 'active' : ''}`}
                >
                  {s.label}
                </button>
              ))}
            </div>

            <div className="featured-car-content">
              <div className="featured-car-header">
                <div>
                  <h3 className="featured-car-name">Swift Automatic ZXi Petrol</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    Top-Trim Automatic Hatchback • Effortless City & Highway Drive
                  </p>
                </div>
              </div>

              {/* Verified Specs */}
              <div className="spec-grid">
                <div className="spec-item">
                  <div className="spec-label">Transmission</div>
                  <div className="spec-value">Automatic</div>
                </div>
                <div className="spec-item">
                  <div className="spec-label">Fuel Type</div>
                  <div className="spec-value">Petrol</div>
                </div>
                <div className="spec-item">
                  <div className="spec-label">Trim / Variant</div>
                  <div className="spec-value">ZXi Top Trim</div>
                </div>
              </div>

              {/* Pricing Ready Card */}
              <div className="pricing-preview-box">
                <div className="pricing-badge-row">
                  <span className="pricing-label">Rental Tariff</span>
                  <span className="pricing-value">Price on Enquiry</span>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.6rem' }}>
                  Customizable slots for all travel durations:
                </p>
                <div className="rental-periods-list">
                  <span className="period-pill">12 Hours</span>
                  <span className="period-pill">24 Hours</span>
                  <span className="period-pill">Daily Rental</span>
                  <span className="period-pill">Weekly</span>
                  <span className="period-pill">Monthly</span>
                  <span className="period-pill">Security Deposit Applicable</span>
                  <span className="period-pill">Fair Fuel Policy</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href={`#/car/${swiftVehicle.id}`}
                  className="btn btn-secondary"
                  style={{ flex: 1, justifyContent: 'center' }}
                >
                  <span>View Details</span>
                  <ArrowRight size={16} />
                </a>
                <a
                  href={`https://wa.me/91${BUSINESS_INFO.whatsappNumber}?text=Hello%20JAI%20CAR%20RENTAL,%20I%20am%20interested%20in%20a%20self-drive%20car:%20Swift%20Automatic%20ZXi%20Petrol.%20Please%20share%20the%20available%20options.`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                  style={{ flex: 1.2, justifyContent: 'center' }}
                >
                  <MessageCircle size={16} />
                  <span>Book Self-Drive</span>
                </a>
                <a
                  href={`tel:${BUSINESS_INFO.phonePrimary}`}
                  className="btn btn-secondary"
                  title="Call now"
                >
                  <Phone size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Fronx CNG */}
          <div className="featured-car-card">
            <div className="featured-car-img-box">
              <img
                key={currentFronxSlide.id}
                src={currentFronxSlide.image}
                alt={currentFronxSlide.alt}
                className="featured-car-img"
              />
              <span className="featured-tag">★ Actual Car • MH12 XQ 6698</span>

              {/* Slider Angle Tag */}
              <span className="featured-angle-tag">{currentFronxSlide.tag}</span>

              {/* Slider Controls */}
              <button
                type="button"
                className="card-slider-nav-btn prev"
                onClick={() => setFronxSlideIdx((prev) => (prev > 0 ? prev - 1 : fronxVehicle.slides.length - 1))}
                aria-label="Previous photo angle"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                className="card-slider-nav-btn next"
                onClick={() => setFronxSlideIdx((prev) => (prev < fronxVehicle.slides.length - 1 ? prev + 1 : 0))}
                aria-label="Next photo angle"
              >
                <ChevronRight size={20} />
              </button>

              <div className="card-slider-dots">
                {fronxVehicle.slides.map((s, idx) => (
                  <button
                    key={s.id}
                    type="button"
                    className={`card-slider-dot ${idx === fronxSlideIdx ? 'active' : ''}`}
                    onClick={() => setFronxSlideIdx(idx)}
                    aria-label={s.label}
                  />
                ))}
              </div>
            </div>

            {/* Quick Angle Switcher Tabs */}
            <div className="card-quick-angle-tabs">
              {fronxVehicle.slides.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setFronxSlideIdx(idx)}
                  className={`quick-angle-tab-btn ${idx === fronxSlideIdx ? 'active' : ''}`}
                >
                  {s.label}
                </button>
              ))}
            </div>

            <div className="featured-car-content">
              <div className="featured-car-header">
                <div>
                  <h3 className="featured-car-name">Fronx CNG</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    Modern Coupe Crossover SUV • Superior Fuel Economy & Comfort
                  </p>
                </div>
              </div>

              {/* Verified Specs */}
              <div className="spec-grid">
                <div className="spec-item">
                  <div className="spec-label">Transmission</div>
                  <div className="spec-value">Manual</div>
                </div>
                <div className="spec-item">
                  <div className="spec-label">Fuel Type</div>
                  <div className="spec-value">CNG (Dual-Fuel)</div>
                </div>
                <div className="spec-item">
                  <div className="spec-label">Style / Category</div>
                  <div className="spec-value">Crossover SUV</div>
                </div>
              </div>

              {/* Pricing Ready Card */}
              <div className="pricing-preview-box">
                <div className="pricing-badge-row">
                  <span className="pricing-label">Rental Tariff</span>
                  <span className="pricing-value">Price on Enquiry</span>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.6rem' }}>
                  Customizable slots for all travel durations:
                </p>
                <div className="rental-periods-list">
                  <span className="period-pill">12 Hours</span>
                  <span className="period-pill">24 Hours</span>
                  <span className="period-pill">Daily Rental</span>
                  <span className="period-pill">Weekly</span>
                  <span className="period-pill">Monthly</span>
                  <span className="period-pill">Security Deposit Applicable</span>
                  <span className="period-pill">Fair Fuel Policy</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href={`#/car/${fronxVehicle.id}`}
                  className="btn btn-secondary"
                  style={{ flex: 1, justifyContent: 'center' }}
                >
                  <span>View Details</span>
                  <ArrowRight size={16} />
                </a>
                <a
                  href={`https://wa.me/91${BUSINESS_INFO.whatsappNumber}?text=Hello%20JAI%20CAR%20RENTAL,%20I%20am%20interested%20in%20a%20self-drive%20car:%20Fronx%20CNG.%20Please%20share%20the%20available%20options.`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                  style={{ flex: 1.2, justifyContent: 'center' }}
                >
                  <MessageCircle size={16} />
                  <span>Book Self-Drive</span>
                </a>
                <a
                  href={`tel:${BUSINESS_INFO.phonePrimary}`}
                  className="btn btn-secondary"
                  title="Call now"
                >
                  <Phone size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Real Fleet Photos Teaser CTA */}
        <div style={{ textAlign: 'center', marginTop: '2.5rem', marginBottom: '2rem' }}>
          <a
            href="#real-fleet"
            className="btn btn-secondary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              borderRadius: 'var(--radius-full)',
              padding: '0.85rem 1.8rem',
              borderColor: 'var(--yellow-bright)',
              background: 'rgba(255, 196, 0, 0.08)',
              color: 'var(--text-pure)'
            }}
          >
            <Camera size={18} style={{ color: 'var(--yellow-bright)' }} />
            <span style={{ fontWeight: '700' }}>Want to see all genuine yard photos? Explore Real Fleet Gallery (7 Photos) &darr;</span>
          </a>
        </div>

        {/* Highlight Bullets */}
        <div className="self-drive-features-row">
          {selfDriveFeatures.map((feat, idx) => (
            <div key={idx} className="sd-feature-card">
              <CheckCircle size={22} className="yellow-highlight" style={{ flexShrink: 0 }} />
              <div>
                <p>{feat.label}</p>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{feat.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
