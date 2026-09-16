import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  MessageCircle, 
  Phone, 
  CheckCircle2, 
  ShieldCheck, 
  Star, 
  Gauge, 
  Car, 
  Sparkles, 
  MapPin, 
  Calendar, 
  ChevronLeft, 
  ChevronRight, 
  Layers, 
  FileText, 
  Share2, 
  Check,
  ArrowRight
} from 'lucide-react';
import { getCarById, DETAILED_CARS_DATA, BUSINESS_INFO } from '../data/carData';

export default function CarDetailPage({ carId, onBack }) {
  const car = getCarById(carId);

  // Active slide state
  const [activeSlideIdx, setActiveSlideIdx] = useState(0);
  const [copied, setCopied] = useState(false);

  // Quick form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickupDate: '',
    duration: '24 Hours',
    rentalType: 'Self-Drive'
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [carId]);

  if (!car) {
    return (
      <div className="car-detail-page-wrapper section">
        <div className="container" style={{ textAlign: 'center', padding: '5rem 1rem' }}>
          <h2>Vehicle Not Found</h2>
          <p style={{ color: 'var(--text-muted)', margin: '1rem 0 2rem' }}>
            The requested vehicle details could not be located.
          </p>
          <button 
            type="button" 
            onClick={onBack} 
            className="btn btn-primary"
          >
            <ArrowLeft size={18} />
            <span>Return to Fleet</span>
          </button>
        </div>
      </div>
    );
  }

  const currentSlide = car.slides[activeSlideIdx] || car.slides[0];
  const totalSlides = car.slides.length;

  const handlePrevSlide = () => {
    setActiveSlideIdx(prev => (prev > 0 ? prev - 1 : totalSlides - 1));
  };

  const handleNextSlide = () => {
    setActiveSlideIdx(prev => (prev < totalSlides - 1 ? prev + 1 : 0));
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const msg = `Hello JAI CAR RENTAL, I would like to book the ${car.name} (${car.registration}).
Name: ${formData.name}
Phone: ${formData.phone}
Pickup Date: ${formData.pickupDate || 'Flexible'}
Duration: ${formData.duration}
Rental Option: ${formData.rentalType}
Please share rates and confirm vehicle availability.`;

    const url = `https://wa.me/91${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  // Other vehicles for recommendations
  const otherCars = Object.values(DETAILED_CARS_DATA)
    .filter(c => c.id !== car.id)
    .slice(0, 3);

  return (
    <div className="car-detail-page-wrapper">
      {/* Top Breadcrumb Bar */}
      <div className="car-detail-breadcrumb-bar">
        <div className="container">
          <div className="breadcrumb-flex">
            <button 
              type="button"
              onClick={onBack} 
              className="breadcrumb-back-btn"
              title="Return to home fleet"
            >
              <ArrowLeft size={18} />
              <span>Back to All Cars</span>
            </button>

            <div className="breadcrumb-trail">
              <a href="#/" onClick={(e) => { e.preventDefault(); onBack(); }}>Home</a>
              <span className="bc-separator">/</span>
              <a href="#fleet" onClick={(e) => { e.preventDefault(); onBack(); }}>Fleet</a>
              <span className="bc-separator">/</span>
              <span className="bc-current">{car.name}</span>
            </div>

            <button 
              type="button" 
              onClick={handleShare} 
              className="breadcrumb-share-btn"
              title="Copy link to this car"
            >
              {copied ? <Check size={16} style={{ color: 'var(--yellow-bright)' }} /> : <Share2 size={16} />}
              <span>{copied ? 'Link Copied!' : 'Share'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Vehicle Details Section */}
      <section className="section car-detail-main-section">
        <div className="container">
          
          <div className="car-detail-grid">
            
            {/* ============================================================
                LEFT COLUMN: GALLERY & SPECS & DETAILS
                ============================================================ */}
            <div className="car-detail-left-col">
              
              {/* Header Title & Badges */}
              <div className="car-detail-header-card">
                <div className="car-detail-tag-row">
                  <span className="detail-tag-pill">{car.category}</span>
                  <span className="detail-tag-pill verified">
                    <ShieldCheck size={14} style={{ color: 'var(--yellow-bright)' }} />
                    <span>{car.badge}</span>
                  </span>
                  <span className="detail-tag-pill rto">
                    📍 {car.registration}
                  </span>
                </div>

                <h1 className="car-detail-title">{car.name}</h1>
                <p className="car-detail-subtitle">{car.model} • {car.highlight}</p>

                <div className="car-detail-rating-row">
                  <div className="rating-stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} fill="var(--yellow-bright)" color="var(--yellow-bright)" />
                    ))}
                  </div>
                  <strong className="rating-val">{car.rating} / 5.0</strong>
                  <span className="rating-count">({car.tripsCount}+ successful Pune trips)</span>
                </div>
              </div>

              {/* Multi-Angle Image Slider Box */}
              <div className="detail-slider-card">
                <div className="detail-slider-main-box">
                  <img 
                    key={currentSlide.id}
                    src={currentSlide.image} 
                    alt={currentSlide.alt} 
                    className="detail-slider-main-img" 
                  />

                  {/* Top Badges */}
                  <div className="detail-slider-top-tags">
                    <span className="live-photo-badge">
                      <span className="live-dot"></span>
                      <span>GENUINE YARD PHOTO</span>
                    </span>
                    <span className="unified-angle-tag">
                      {currentSlide.tag || currentSlide.label}
                    </span>
                  </div>

                  {/* Slider Prev / Next Arrows */}
                  {totalSlides > 1 && (
                    <>
                      <button 
                        type="button" 
                        className="unified-slider-arrow unified-slider-arrow-prev"
                        onClick={handlePrevSlide}
                        aria-label="Previous photo angle"
                      >
                        <ChevronLeft size={22} />
                      </button>
                      <button 
                        type="button" 
                        className="unified-slider-arrow unified-slider-arrow-next"
                        onClick={handleNextSlide}
                        aria-label="Next photo angle"
                      >
                        <ChevronRight size={22} />
                      </button>
                    </>
                  )}

                  {/* Bottom overlay: counter */}
                  <div className="unified-slider-overlay-bottom">
                    <div className="unified-slider-counter">
                      Photo {activeSlideIdx + 1} of {totalSlides}
                    </div>
                  </div>
                </div>

                {/* Angle Selector Pills Bar */}
                {totalSlides > 1 && (
                  <div className="unified-angle-selector-bar">
                    <div className="angle-bar-label">
                      <Layers size={13} style={{ color: 'var(--yellow-bright)' }} />
                      <span>Switch View:</span>
                    </div>
                    <div className="angle-bar-buttons">
                      {car.slides.map((s, idx) => (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => setActiveSlideIdx(idx)}
                          className={`angle-tab-btn ${idx === activeSlideIdx ? 'active' : ''}`}
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Thumbnail Strip */}
                {totalSlides > 1 && (
                  <div className="detail-thumb-strip">
                    {car.slides.map((s, idx) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setActiveSlideIdx(idx)}
                        className={`detail-thumb-btn ${idx === activeSlideIdx ? 'active' : ''}`}
                      >
                        <img src={s.image} alt={s.label} />
                        <span>{s.label}</span>
                      </button>
                    ))}
                  </div>
                )}

                {/* Dynamic Slide Caption */}
                <div className="unified-dynamic-caption-box" style={{ margin: '1rem' }}>
                  <div className="caption-angle-title">
                    <span className="caption-dot"></span>
                    <strong>{currentSlide.title || currentSlide.label}</strong>
                  </div>
                  <p className="caption-angle-text">
                    {currentSlide.caption}
                  </p>
                </div>
              </div>

              {/* Vehicle Specifications Grid */}
              <div className="detail-section-box">
                <h3 className="detail-box-title">
                  <Gauge size={18} style={{ color: 'var(--yellow-bright)' }} />
                  <span>Technical & Performance Specifications</span>
                </h3>

                <div className="detail-specs-matrix">
                  <div className="spec-matrix-card">
                    <span className="spec-m-label">Transmission</span>
                    <strong className="spec-m-val">{car.transmission}</strong>
                  </div>
                  <div className="spec-matrix-card">
                    <span className="spec-m-label">Fuel Option</span>
                    <strong className="spec-m-val">{car.fuel}</strong>
                  </div>
                  <div className="spec-matrix-card">
                    <span className="spec-m-label">Seating Capacity</span>
                    <strong className="spec-m-val">{car.seats}</strong>
                  </div>
                  <div className="spec-matrix-card">
                    <span className="spec-m-label">Engine / Variant</span>
                    <strong className="spec-m-val">{car.engine || 'Verified Spec'}</strong>
                  </div>
                  <div className="spec-matrix-card">
                    <span className="spec-m-label">Fuel Efficiency</span>
                    <strong className="spec-m-val">{car.mileage || 'High Economy'}</strong>
                  </div>
                  <div className="spec-matrix-card">
                    <span className="spec-m-label">Boot Capacity</span>
                    <strong className="spec-m-val">{car.bootSpace || 'Spacious Boot'}</strong>
                  </div>
                  <div className="spec-matrix-card">
                    <span className="spec-m-label">Ground Clearance</span>
                    <strong className="spec-m-val">{car.groundClearance || 'High Stance'}</strong>
                  </div>
                  <div className="spec-matrix-card">
                    <span className="spec-m-label">RTO Registration</span>
                    <strong className="spec-m-val">{car.registration}</strong>
                  </div>
                </div>
              </div>

              {/* Detailed Description */}
              <div className="detail-section-box">
                <h3 className="detail-box-title">
                  <Car size={18} style={{ color: 'var(--yellow-bright)' }} />
                  <span>About This Vehicle</span>
                </h3>
                <p className="detail-desc-text">
                  {car.description}
                </p>
              </div>

              {/* Included Features & Comfort Equipment */}
              <div className="detail-section-box">
                <h3 className="detail-box-title">
                  <Sparkles size={18} style={{ color: 'var(--yellow-bright)' }} />
                  <span>Key Features & Verified Equipment</span>
                </h3>
                <div className="detail-features-grid">
                  {car.features.map((feat, idx) => (
                    <div key={idx} className="detail-feature-item">
                      <CheckCircle2 size={16} style={{ color: 'var(--yellow-bright)', flexShrink: 0 }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Required Documents & Rental Policy */}
              <div className="detail-section-box">
                <h3 className="detail-box-title">
                  <FileText size={18} style={{ color: 'var(--yellow-bright)' }} />
                  <span>Handover & KYC Requirements</span>
                </h3>
                <div className="detail-kyc-grid">
                  <div className="kyc-card">
                    <strong>1. Driving License</strong>
                    <p>Valid original Indian driving license for self-drive rentals.</p>
                  </div>
                  <div className="kyc-card">
                    <strong>2. Government ID Proof</strong>
                    <p>Aadhaar Card, Passport, or Voter ID for quick digital verification.</p>
                  </div>
                  <div className="kyc-card">
                    <strong>3. Refundable Deposit</strong>
                    <p>Minimal security deposit, settled instantly upon car inspection.</p>
                  </div>
                  <div className="kyc-card">
                    <strong>4. Same-to-Same Fuel</strong>
                    <p>Take with fuel level X, return with fuel level X. 100% transparent.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* ============================================================
                RIGHT COLUMN: STICKY BOOKING & TARIFF CARD
                ============================================================ */}
            <div className="car-detail-right-col">
              <div className="sticky-booking-card">
                
                {/* Tariff Highlight */}
                <div className="sticky-tariff-header">
                  <div>
                    <span className="sticky-tariff-tag">RENTAL TARIFF</span>
                    <h3 className="sticky-tariff-val">{car.pricing.rate}</h3>
                  </div>
                  <span className="sticky-badge-avail">Available for Booking</span>
                </div>

                {/* Rental Slots breakdown */}
                <div className="rental-slots-card">
                  <span className="slots-title">Available Rental Durations:</span>
                  <div className="slots-list">
                    {car.pricing.periods.map((period, idx) => (
                      <div key={idx} className="slot-item">
                        <span className="slot-label">{period.label}</span>
                        <span className="slot-desc">{period.detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Main WhatsApp & Call CTAs */}
                <div className="sticky-cta-buttons">
                  <a
                    href={`https://wa.me/91${BUSINESS_INFO.whatsappNumber}?text=Hello%20JAI%20CAR%20RENTAL,%20I%20am%20viewing%20the%20details%20page%20of%20${encodeURIComponent(car.name)}%20(${car.registration})%20and%20want%20to%20reserve%20it.`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary btn-lg"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <MessageCircle size={18} />
                    <span>Book on WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${BUSINESS_INFO.phonePrimary}`}
                    className="btn btn-secondary btn-lg"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <Phone size={18} />
                    <span>Call {BUSINESS_INFO.phonePrimary}</span>
                  </a>
                </div>

                {/* Quick Reservation Form */}
                <div className="quick-booking-form-box">
                  <h4 className="quick-form-title">
                    <Calendar size={15} style={{ color: 'var(--yellow-bright)' }} />
                    <span>Instant Booking Request</span>
                  </h4>

                  <form onSubmit={handleFormSubmit} className="quick-form">
                    <div className="form-group">
                      <label>Your Full Name</label>
                      <input 
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label>Phone / WhatsApp Number</label>
                      <input 
                        type="tel"
                        required
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="form-input"
                      />
                    </div>

                    <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
                      <div className="form-group">
                        <label>Pickup Date</label>
                        <input 
                          type="date"
                          value={formData.pickupDate}
                          onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                          className="form-input"
                        />
                      </div>
                      <div className="form-group">
                        <label>Duration</label>
                        <select 
                          value={formData.duration}
                          onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                          className="form-input"
                        >
                          <option value="12 Hours">12 Hours</option>
                          <option value="24 Hours">24 Hours (1 Day)</option>
                          <option value="Weekend (2-3 Days)">Weekend (2-3 Days)</option>
                          <option value="Weekly">1 Week</option>
                          <option value="Monthly">Monthly Rental</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Rental Type</label>
                      <div style={{ display: 'flex', gap: '0.6rem' }}>
                        <button
                          type="button"
                          className={`btn btn-sm ${formData.rentalType === 'Self-Drive' ? 'btn-primary' : 'btn-secondary'}`}
                          style={{ flex: 1 }}
                          onClick={() => setFormData({ ...formData, rentalType: 'Self-Drive' })}
                        >
                          Self-Drive
                        </button>
                        <button
                          type="button"
                          className={`btn btn-sm ${formData.rentalType === 'With Driver' ? 'btn-primary' : 'btn-secondary'}`}
                          style={{ flex: 1 }}
                          onClick={() => setFormData({ ...formData, rentalType: 'With Driver' })}
                        >
                          With Driver
                        </button>
                      </div>
                    </div>

                    <button type="submit" className="btn btn-whatsapp btn-block" style={{ width: '100%', marginTop: '0.5rem' }}>
                      <MessageCircle size={16} />
                      <span>Send Reservation Enquiry</span>
                    </button>
                  </form>
                </div>

                {/* Hub & Delivery Assurance */}
                <div className="sticky-hub-info">
                  <div className="hub-info-item">
                    <MapPin size={16} style={{ color: 'var(--yellow-bright)', flexShrink: 0 }} />
                    <div>
                      <strong>Pickup Hub</strong>
                      <span>Wagholi Green, Phase 2, Pune – 412207</span>
                    </div>
                  </div>
                  <div className="hub-info-item">
                    <Car size={16} style={{ color: 'var(--yellow-bright)', flexShrink: 0 }} />
                    <div>
                      <strong>Doorstep Handover</strong>
                      <span>Available across Pune, Viman Nagar, Kharadi, Hinjawadi</span>
                    </div>
                  </div>
                  <div className="hub-info-item">
                    <ShieldCheck size={16} style={{ color: 'var(--yellow-bright)', flexShrink: 0 }} />
                    <div>
                      <strong>Manager Direct Support</strong>
                      <span>Jai Prakash Singh: 7722006000 / 9021312200</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* ============================================================
              EXPLORE OTHER VEHICLES RECOMMENDATION SECTION
              ============================================================ */}
          <div className="detail-other-cars-section">
            <div className="section-header" style={{ textAlign: 'left', marginBottom: '1.75rem' }}>
              <div className="badge-tag">
                <Car size={14} />
                <span>Explore Other Options</span>
              </div>
              <h2 className="section-title" style={{ fontSize: '1.75rem' }}>
                Compare With Other <span className="yellow-highlight">Fleet Vehicles</span>
              </h2>
            </div>

            <div className="other-cars-grid">
              {otherCars.map((oc) => (
                <div key={oc.id} className="other-car-card">
                  <div className="other-car-img-box">
                    <img src={oc.slides[0].image} alt={oc.name} />
                    <span className="other-car-category">{oc.category}</span>
                  </div>
                  <div className="other-car-body">
                    <h4>{oc.name}</h4>
                    <p>{oc.model}</p>
                    <div className="other-car-specs">
                      <span>{oc.transmission}</span>
                      <span>•</span>
                      <span>{oc.fuel}</span>
                      <span>•</span>
                      <span>{oc.seats}</span>
                    </div>
                    <div className="other-car-footer">
                      <a 
                        href={`#/car/${oc.id}`} 
                        className="btn btn-secondary btn-sm"
                        style={{ flex: 1, justifyContent: 'center' }}
                      >
                        <span>View Details</span>
                        <ArrowRight size={13} />
                      </a>
                      <a
                        href={`https://wa.me/91${BUSINESS_INFO.whatsappNumber}?text=Hello%20JAI%20CAR%20RENTAL,%20I%20would%20like%20to%20enquire%20about%20${encodeURIComponent(oc.name)}.`}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary btn-sm"
                      >
                        <MessageCircle size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
