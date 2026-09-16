import React, { useState, useEffect } from 'react';
import { 
  Camera, 
  ShieldCheck, 
  ZoomIn, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  MessageCircle, 
  Phone, 
  CheckCircle2, 
  Sparkles,
  Car,
  MapPin,
  Maximize2,
  Layers
} from 'lucide-react';
import { REAL_FLEET_VEHICLES, BUSINESS_INFO } from '../data/carData';

export default function RealFleetGallery() {
  const [activeTab, setActiveTab] = useState('all');
  
  // Track active slide index for each car card: { [carId]: number }
  const [activeSlideMap, setActiveSlideMap] = useState({
    'swift-automatic-mh14': 0,
    'fronx-cng-mh12': 0
  });

  // Lightbox modal state: { vehicleId: string, slideIndex: number } | null
  const [lightboxData, setLightboxData] = useState(null);

  const filterTabs = [
    { id: 'all', label: 'All Fleet Cars', count: REAL_FLEET_VEHICLES.length },
    { id: 'swift', label: 'Maruti Swift (Automatic)', count: REAL_FLEET_VEHICLES.filter(c => c.category === 'swift').length },
    { id: 'fronx', label: 'Maruti Fronx (SUV)', count: REAL_FLEET_VEHICLES.filter(c => c.category === 'fronx').length }
  ];

  const filteredVehicles = REAL_FLEET_VEHICLES.filter(vehicle => {
    if (activeTab === 'all') return true;
    return vehicle.category === activeTab;
  });

  // Slide navigation handlers for individual car cards
  const handlePrevSlide = (vehicleId, totalSlides, e) => {
    if (e) e.stopPropagation();
    setActiveSlideMap(prev => {
      const current = prev[vehicleId] || 0;
      const next = current > 0 ? current - 1 : totalSlides - 1;
      return { ...prev, [vehicleId]: next };
    });
  };

  const handleNextSlide = (vehicleId, totalSlides, e) => {
    if (e) e.stopPropagation();
    setActiveSlideMap(prev => {
      const current = prev[vehicleId] || 0;
      const next = current < totalSlides - 1 ? current + 1 : 0;
      return { ...prev, [vehicleId]: next };
    });
  };

  const handleSelectSlide = (vehicleId, index, e) => {
    if (e) e.stopPropagation();
    setActiveSlideMap(prev => ({ ...prev, [vehicleId]: index }));
  };

  // Lightbox opening
  const openLightbox = (vehicleId, slideIndex) => {
    setLightboxData({ vehicleId, slideIndex });
  };

  const closeLightbox = () => {
    setLightboxData(null);
  };

  // Modal navigation
  const activeVehicle = lightboxData 
    ? REAL_FLEET_VEHICLES.find(v => v.id === lightboxData.vehicleId) 
    : null;
    
  const currentModalSlide = activeVehicle && lightboxData 
    ? activeVehicle.slides[lightboxData.slideIndex] 
    : null;

  const handleModalPrev = (e) => {
    if (e) e.stopPropagation();
    if (!activeVehicle || !lightboxData) return;
    const total = activeVehicle.slides.length;
    const nextIndex = lightboxData.slideIndex > 0 ? lightboxData.slideIndex - 1 : total - 1;
    setLightboxData(prev => ({ ...prev, slideIndex: nextIndex }));
  };

  const handleModalNext = (e) => {
    if (e) e.stopPropagation();
    if (!activeVehicle || !lightboxData) return;
    const total = activeVehicle.slides.length;
    const nextIndex = lightboxData.slideIndex < total - 1 ? lightboxData.slideIndex + 1 : 0;
    setLightboxData(prev => ({ ...prev, slideIndex: nextIndex }));
  };

  // Lightbox keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxData || !activeVehicle) return;
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        handleModalPrev();
      } else if (e.key === 'ArrowRight') {
        handleModalNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxData, activeVehicle]);

  // Lock scroll when modal is open
  useEffect(() => {
    if (lightboxData) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [lightboxData]);

  return (
    <section id="real-fleet" className="section real-fleet-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-tag">
            <Camera size={15} />
            <span>100% Real Fleet Photos • On-Ground Yard</span>
          </div>
          <h2 className="section-title">
            Our Real Cars in Action. <span className="yellow-highlight">No Fake Renders.</span>
          </h2>
          <p className="section-subtitle">
            Every car below is photographed on-ground at our Wagholi Pune hub. Slide between front fascia, side profile, rear views, and cockpit interior all in the same card!
          </p>
        </div>

        {/* Real Fleet Trust Strip */}
        <div className="real-fleet-trust-strip">
          <div className="trust-strip-item">
            <div className="trust-strip-icon-box">
              <ShieldCheck size={20} />
            </div>
            <div>
              <strong>Genuine Ground Fleet</strong>
              <span>Exact car delivered at handover</span>
            </div>
          </div>

          <div className="trust-strip-item">
            <div className="trust-strip-icon-box">
              <MapPin size={20} />
            </div>
            <div>
              <strong>Pune RTO Plates (MH-12 & MH-14)</strong>
              <span>Registered & legally compliant vehicles</span>
            </div>
          </div>

          <div className="trust-strip-item">
            <div className="trust-strip-icon-box">
              <Sparkles size={20} />
            </div>
            <div>
              <strong>Sanitized Before Handover</strong>
              <span>Deep-cleaned seats & fresh AC filter</span>
            </div>
          </div>

          <div className="trust-strip-item">
            <div className="trust-strip-icon-box">
              <Car size={20} />
            </div>
            <div>
              <strong>Self-Drive & Chauffeur</strong>
              <span>Swift Automatic & Fronx CNG available</span>
            </div>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="real-fleet-filter-bar">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`real-fleet-filter-btn ${activeTab === tab.id ? 'active' : ''}`}
            >
              <span>{tab.label}</span>
              <span className="real-fleet-counter">{tab.count}</span>
            </button>
          ))}
        </div>

        {/* ============================================================
            VEHICLE CARDS GRID WITH INTEGRATED ANGLE SLIDERS
            ============================================================ */}
        <div className="real-fleet-unified-grid">
          {filteredVehicles.map((vehicle) => {
            const currentSlideIdx = activeSlideMap[vehicle.id] || 0;
            const currentSlide = vehicle.slides[currentSlideIdx] || vehicle.slides[0];
            const totalSlides = vehicle.slides.length;

            return (
              <div 
                key={vehicle.id} 
                className="real-car-unified-card"
              >
                {/* Header bar */}
                <div className="unified-card-topbar">
                  <div>
                    <span className="unified-card-type-badge">{vehicle.typeBadge}</span>
                    <h3 className="unified-card-title">{vehicle.name}</h3>
                    <div className="unified-card-model">{vehicle.model}</div>
                  </div>
                  <span className="unified-plate-badge">{vehicle.registration}</span>
                </div>

                {/* Interactive Slider Container */}
                <div 
                  className="unified-slider-box"
                  onClick={() => openLightbox(vehicle.id, currentSlideIdx)}
                  title="Click to view full-screen lightbox"
                >
                  <img 
                    key={currentSlide.id}
                    src={currentSlide.image} 
                    alt={currentSlide.alt} 
                    className="unified-slider-img"
                    loading="lazy" 
                  />
                  
                  {/* Overlay Badges */}
                  <div className="unified-slider-overlay-top">
                    <span className="live-photo-badge">
                      <span className="live-dot"></span>
                      <span>LIVE YARD PHOTO</span>
                    </span>

                    <span className="unified-angle-tag">
                      {currentSlide.tag}
                    </span>
                  </div>

                  {/* Prev / Next Controls on image */}
                  <button 
                    type="button"
                    className="unified-slider-arrow unified-slider-arrow-prev"
                    onClick={(e) => handlePrevSlide(vehicle.id, totalSlides, e)}
                    aria-label="Previous view angle"
                    title="Previous view"
                  >
                    <ChevronLeft size={22} />
                  </button>

                  <button 
                    type="button"
                    className="unified-slider-arrow unified-slider-arrow-next"
                    onClick={(e) => handleNextSlide(vehicle.id, totalSlides, e)}
                    aria-label="Next view angle"
                    title="Next view"
                  >
                    <ChevronRight size={22} />
                  </button>

                  {/* Overlay Bottom Row: Dots & Counter & Zoom */}
                  <div className="unified-slider-overlay-bottom">
                    <div className="unified-slider-counter">
                      Photo {currentSlideIdx + 1} of {totalSlides}
                    </div>

                    <div className="unified-slider-dots">
                      {vehicle.slides.map((s, sIdx) => (
                        <button
                          key={s.id}
                          type="button"
                          className={`slider-dot-btn ${sIdx === currentSlideIdx ? 'active' : ''}`}
                          onClick={(e) => handleSelectSlide(vehicle.id, sIdx, e)}
                          aria-label={`Go to ${s.label}`}
                          title={s.label}
                        />
                      ))}
                    </div>

                    <div className="unified-zoom-hint">
                      <ZoomIn size={14} />
                      <span>Zoom</span>
                    </div>
                  </div>
                </div>

                {/* Angle Selector Tabs Bar (Click to switch front, side, rear, interior) */}
                <div className="unified-angle-selector-bar">
                  <div className="angle-bar-label">
                    <Layers size={13} style={{ color: 'var(--yellow-bright)' }} />
                    <span>Switch Angle:</span>
                  </div>
                  <div className="angle-bar-buttons">
                    {vehicle.slides.map((slide, sIdx) => (
                      <button
                        key={slide.id}
                        type="button"
                        onClick={(e) => handleSelectSlide(vehicle.id, sIdx, e)}
                        className={`angle-tab-btn ${sIdx === currentSlideIdx ? 'active' : ''}`}
                      >
                        {slide.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Dynamic Angle Description Box */}
                <div className="unified-dynamic-caption-box">
                  <div className="caption-angle-title">
                    <span className="caption-dot"></span>
                    <strong>{currentSlide.title}</strong>
                  </div>
                  <p className="caption-angle-text">
                    {currentSlide.caption}
                  </p>
                </div>

                {/* Specs Row */}
                <div className="unified-specs-row">
                  <div className="unified-spec-col">
                    <span className="spec-label">Transmission</span>
                    <span className="spec-val">{vehicle.transmission}</span>
                  </div>
                  <div className="unified-spec-col">
                    <span className="spec-label">Fuel Type</span>
                    <span className="spec-val">{vehicle.fuel}</span>
                  </div>
                  <div className="unified-spec-col">
                    <span className="spec-label">Capacity</span>
                    <span className="spec-val">{vehicle.seats}</span>
                  </div>
                  <div className="unified-spec-col">
                    <span className="spec-label">RTO Hub</span>
                    <span className="spec-val">Pune RTO</span>
                  </div>
                </div>

                {/* Feature Tags */}
                <div className="unified-feature-tags">
                  {vehicle.features.map((feat, fIdx) => (
                    <span key={fIdx} className="unified-feature-pill">
                      <CheckCircle2 size={12} style={{ color: 'var(--yellow-bright)' }} />
                      <span>{feat}</span>
                    </span>
                  ))}
                </div>

                {/* Card Action Footer */}
                <div className="unified-card-footer">
                  <button 
                    type="button"
                    onClick={() => openLightbox(vehicle.id, currentSlideIdx)} 
                    className="btn btn-secondary btn-sm"
                    title="Enlarge photo"
                  >
                    <Maximize2 size={15} />
                    <span>View All {totalSlides} Photos</span>
                  </button>

                  <a
                    href={`https://wa.me/91${BUSINESS_INFO.whatsappNumber}?text=Hello%20JAI%20CAR%20RENTAL,%20I%20saw%20the%20real%20photos%20of%20your%20${vehicle.name}%20(${vehicle.registration})%20on%20your%20website%20and%20would%20like%20to%20check%20its%20availability%20for%20rental.`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary btn-sm"
                    style={{ flex: 1, justifyContent: 'center' }}
                  >
                    <MessageCircle size={15} />
                    <span>Book This Exact Car</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Yard Assurance Banner */}
        <div className="real-fleet-banner">
          <div className="real-fleet-banner-content">
            <div className="real-fleet-banner-left">
              <span className="banner-badge">📍 Wagholi Green, Phase 2, Pune</span>
              <h3>Want a live video tour before booking?</h3>
              <p>
                We understand trusting a rental provider matters. Send us a message on WhatsApp and our team will send you a real-time 30-second walkaround video of the exact car you will receive!
              </p>
            </div>
            <div className="real-fleet-banner-actions">
              <a 
                href={`https://wa.me/91${BUSINESS_INFO.whatsappNumber}?text=Hello%20JAI%20CAR%20RENTAL,%20can%20you%20please%20send%20me%20a%20live%20video%20walkaround%20of%20the%20Swift%20or%20Fronx%20available%20at%20your%20yard?`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageCircle size={18} />
                <span>Request Live Video</span>
              </a>
              <a 
                href={`tel:${BUSINESS_INFO.phonePrimary}`}
                className="btn btn-secondary"
              >
                <Phone size={18} />
                <span>Call {BUSINESS_INFO.phonePrimary}</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* ============================================================
          INTERACTIVE FULLSCREEN LIGHTBOX MODAL WITH THUMBNAILS
          ============================================================ */}
      {activeVehicle && currentModalSlide && (
        <div className="real-lightbox-backdrop" onClick={closeLightbox}>
          <div 
            className="real-lightbox-modal"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox Top Bar */}
            <div className="real-lightbox-header">
              <div className="real-lightbox-title-area">
                <span className="real-lightbox-badge">{activeVehicle.registration}</span>
                <div>
                  <h4 className="real-lightbox-title">{activeVehicle.name}</h4>
                  <span className="real-lightbox-subtitle">
                    {currentModalSlide.title} • Photo {lightboxData.slideIndex + 1} of {activeVehicle.slides.length}
                  </span>
                </div>
              </div>

              <div className="real-lightbox-header-actions">
                <a
                  href={`https://wa.me/91${BUSINESS_INFO.whatsappNumber}?text=Hello%20JAI%20CAR%20RENTAL,%20I%20am%20viewing%20the%20photo%20of%20${activeVehicle.name}%20(${activeVehicle.registration}%20-%20${currentModalSlide.title})%20and%20want%20to%20book%20it.`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary btn-sm"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                >
                  <MessageCircle size={15} />
                  <span>Book This Exact Car</span>
                </a>

                <button 
                  type="button"
                  onClick={closeLightbox} 
                  className="real-lightbox-close-btn"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Lightbox Main Image Area with Prev / Next */}
            <div className="real-lightbox-body">
              {activeVehicle.slides.length > 1 && (
                <button 
                  type="button"
                  className="lightbox-nav-btn prev-btn" 
                  onClick={handleModalPrev}
                  aria-label="Previous photo"
                >
                  <ChevronLeft size={28} />
                </button>
              )}

              <div className="real-lightbox-img-box">
                <img 
                  key={currentModalSlide.id}
                  src={currentModalSlide.image} 
                  alt={currentModalSlide.alt} 
                  className="real-lightbox-img" 
                />
              </div>

              {activeVehicle.slides.length > 1 && (
                <button 
                  type="button"
                  className="lightbox-nav-btn next-btn" 
                  onClick={handleModalNext}
                  aria-label="Next photo"
                >
                  <ChevronRight size={28} />
                </button>
              )}
            </div>

            {/* Lightbox Thumbnail Strip */}
            <div className="real-lightbox-thumb-strip">
              {activeVehicle.slides.map((s, sIdx) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setLightboxData(prev => ({ ...prev, slideIndex: sIdx }))}
                  className={`lightbox-thumb-item ${sIdx === lightboxData.slideIndex ? 'active' : ''}`}
                >
                  <img src={s.image} alt={s.label} />
                  <span className="lightbox-thumb-label">{s.label}</span>
                </button>
              ))}
            </div>

            {/* Lightbox Footer Caption */}
            <div className="real-lightbox-footer">
              <div className="real-lightbox-caption">
                <p>{currentModalSlide.caption}</p>
                <div className="real-lightbox-tags">
                  <span className="real-fleet-tag-pill">{currentModalSlide.tag}</span>
                  <span className="real-fleet-tag-pill">{activeVehicle.model}</span>
                  <span className="real-fleet-tag-pill" style={{ color: 'var(--yellow-bright)', borderColor: 'var(--yellow-bright)' }}>
                    📍 Wagholi Green Hub
                  </span>
                </div>
              </div>
              <div className="real-lightbox-contact-btns">
                <a 
                  href={`tel:${BUSINESS_INFO.phonePrimary}`} 
                  className="btn btn-secondary btn-sm"
                >
                  <Phone size={15} />
                  <span>Call {BUSINESS_INFO.phonePrimary}</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
