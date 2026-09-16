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
  Maximize2
} from 'lucide-react';
import { REAL_FLEET_GALLERY, BUSINESS_INFO } from '../data/carData';

export default function RealFleetGallery() {
  const [activeTab, setActiveTab] = useState('all');
  const [activeModalIndex, setActiveModalIndex] = useState(null);

  const filterTabs = [
    { id: 'all', label: 'All Real Photos', count: REAL_FLEET_GALLERY.length },
    { id: 'swift', label: 'Maruti Swift (Automatic)', count: REAL_FLEET_GALLERY.filter(c => c.category === 'swift').length },
    { id: 'fronx', label: 'Maruti Fronx (SUV)', count: REAL_FLEET_GALLERY.filter(c => c.category === 'fronx').length },
    { id: 'interior', label: 'Cockpit & Interior', count: REAL_FLEET_GALLERY.filter(c => c.category === 'interior').length },
  ];

  const filteredItems = REAL_FLEET_GALLERY.filter(item => {
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  });

  // Lightbox keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeModalIndex === null) return;
      if (e.key === 'Escape') {
        setActiveModalIndex(null);
      } else if (e.key === 'ArrowLeft') {
        setActiveModalIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
      } else if (e.key === 'ArrowRight') {
        setActiveModalIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalIndex, filteredItems.length]);

  // Lock scroll when modal is open
  useEffect(() => {
    if (activeModalIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [activeModalIndex]);

  const openLightbox = (index) => {
    setActiveModalIndex(index);
  };

  const closeLightbox = () => {
    setActiveModalIndex(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setActiveModalIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setActiveModalIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
  };

  const currentItem = activeModalIndex !== null ? filteredItems[activeModalIndex] : null;

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
            What you see is exactly what you drive. Check unedited, genuine photos of our actual fleet parked at our Wagholi Pune hub — spotlessly cleaned, mechanically inspected, and ready for pickup or doorstep delivery.
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
              <strong>Sanitized Before Every Ride</strong>
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
              onClick={() => {
                setActiveTab(tab.id);
                setActiveModalIndex(null);
              }}
              className={`real-fleet-filter-btn ${activeTab === tab.id ? 'active' : ''}`}
            >
              <span>{tab.label}</span>
              <span className="real-fleet-counter">{tab.count}</span>
            </button>
          ))}
        </div>

        {/* Real Photos Grid */}
        <div className="real-fleet-grid">
          {filteredItems.map((car, idx) => (
            <div 
              key={car.id} 
              className="real-fleet-card"
              onClick={() => openLightbox(idx)}
            >
              <div className="real-fleet-img-container">
                <img 
                  src={car.image} 
                  alt={car.alt} 
                  className="real-fleet-img" 
                  loading="lazy" 
                />
                
                {/* Overlay with Badges */}
                <div className="real-fleet-card-top-tags">
                  <span className="live-photo-badge">
                    <span className="live-dot"></span>
                    <span>LIVE FLEET</span>
                  </span>
                  <span className="reg-badge">{car.registration}</span>
                </div>

                {/* Hover CTA overlay */}
                <div className="real-fleet-hover-overlay">
                  <div className="hover-zoom-btn">
                    <ZoomIn size={18} />
                    <span>View Full Size</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="real-fleet-card-body">
                <div className="real-fleet-card-header">
                  <div>
                    <h3 className="real-fleet-card-title">{car.title}</h3>
                    <div className="real-fleet-card-model">{car.model}</div>
                  </div>
                </div>

                <p className="real-fleet-caption">
                  {car.caption}
                </p>

                {/* Tags */}
                <div className="real-fleet-tags">
                  {car.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="real-fleet-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Card Action */}
                <div className="real-fleet-card-footer" onClick={(e) => e.stopPropagation()}>
                  <button 
                    type="button"
                    onClick={() => openLightbox(idx)} 
                    className="btn btn-secondary btn-sm"
                    style={{ flex: '0 0 auto', padding: '0.55rem 0.9rem' }}
                    title="Enlarge photo"
                  >
                    <Maximize2 size={15} />
                    <span>Zoom</span>
                  </button>

                  <a
                    href={`https://wa.me/91${BUSINESS_INFO.whatsappNumber}?text=Hello%20JAI%20CAR%20RENTAL,%20I%20saw%20the%20real%20photo%20of%20your%20car%20(${car.title}%20-%20${car.registration})%20on%20your%20website%20and%20would%20like%20to%20check%20its%20availability%20for%20rental.`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary btn-sm"
                    style={{ flex: 1, justifyContent: 'center' }}
                  >
                    <MessageCircle size={15} />
                    <span>Book This Car</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
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
          INTERACTIVE FULLSCREEN LIGHTBOX MODAL
          ============================================================ */}
      {currentItem && (
        <div className="real-lightbox-backdrop" onClick={closeLightbox}>
          <div 
            className="real-lightbox-modal"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox Top Bar */}
            <div className="real-lightbox-header">
              <div className="real-lightbox-title-area">
                <span className="real-lightbox-badge">{currentItem.registration}</span>
                <div>
                  <h4 className="real-lightbox-title">{currentItem.title}</h4>
                  <span className="real-lightbox-subtitle">{currentItem.model} • Photo {activeModalIndex + 1} of {filteredItems.length}</span>
                </div>
              </div>

              <div className="real-lightbox-header-actions">
                <a
                  href={`https://wa.me/91${BUSINESS_INFO.whatsappNumber}?text=Hello%20JAI%20CAR%20RENTAL,%20I%20am%20viewing%20the%20photo%20of%20${currentItem.title}%20(${currentItem.registration})%20and%20want%20to%20book%20it.`}
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
              {filteredItems.length > 1 && (
                <button 
                  type="button"
                  className="lightbox-nav-btn prev-btn" 
                  onClick={prevImage}
                  aria-label="Previous photo"
                >
                  <ChevronLeft size={28} />
                </button>
              )}

              <div className="real-lightbox-img-box">
                <img 
                  src={currentItem.image} 
                  alt={currentItem.alt} 
                  className="real-lightbox-img" 
                />
              </div>

              {filteredItems.length > 1 && (
                <button 
                  type="button"
                  className="lightbox-nav-btn next-btn" 
                  onClick={nextImage}
                  aria-label="Next photo"
                >
                  <ChevronRight size={28} />
                </button>
              )}
            </div>

            {/* Lightbox Footer Caption */}
            <div className="real-lightbox-footer">
              <div className="real-lightbox-caption">
                <p>{currentItem.caption}</p>
                <div className="real-lightbox-tags">
                  {currentItem.tags.map((tag, idx) => (
                    <span key={idx} className="real-fleet-tag-pill">{tag}</span>
                  ))}
                  <span className="real-fleet-tag-pill" style={{ color: 'var(--yellow-bright)', borderColor: 'var(--yellow-bright)' }}>
                    📍 Wagholi Green Yard
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
