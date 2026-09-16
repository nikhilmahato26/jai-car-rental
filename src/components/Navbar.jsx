import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Shield, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/carData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Fleet', href: '#fleet' },
    { label: 'Real Fleet 📸', href: '#real-fleet' },
    { label: 'Self Drive', href: '#self-drive' },
    { label: 'Services', href: '#services' },
    { label: 'Airport Transfer', href: '#airport-transfers' },
    { label: 'Outstation', href: '#local-outstation' },
    { label: 'Corporate', href: '#corporate' },
    { label: 'Wedding & Events', href: '#wedding-events' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="navbar-wrapper">
      {/* Top micro bar for direct contact */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-contact-links">
            <a href={`tel:${BUSINESS_INFO.phonePrimary}`} className="top-contact-link">
              <Phone size={13} className="yellow-highlight" />
              <span>{BUSINESS_INFO.phonePrimary}</span>
            </a>
            <span style={{ opacity: 0.3 }}>|</span>
            <a href={`tel:${BUSINESS_INFO.phoneSecondary}`} className="top-contact-link">
              <Phone size={13} className="yellow-highlight" />
              <span>{BUSINESS_INFO.phoneSecondary}</span>
            </a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem' }}>
            <span style={{ color: 'var(--yellow-bright)', fontWeight: '700' }}>📍 Wagholi, Pune</span>
            <span style={{ opacity: 0.5 }}>•</span>
            <span style={{ color: '#E2E8F0' }}>Self-Drive & With Driver</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav className={`main-navbar ${isScrolled ? 'scrolled-nav' : ''}`}>
        <div className="container navbar-container">
          <a href="#hero" className="nav-brand">
            <span className="brand-name">
              JAI <span>CAR RENTAL</span>
            </span>
            <span className="brand-subline">PUNE • SELF-DRIVE & CHAUFFEUR</span>
          </a>

          {/* Desktop Nav Items */}
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.label} className="nav-item">
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          {/* Right Action */}
          <div className="nav-actions">
            <a href="#book-now" className="btn btn-primary btn-sm" style={{ fontWeight: '800' }}>
              BOOK NOW
            </a>
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-nav-drawer">
            <ul className="mobile-nav-links">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} onClick={handleNavClick}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
              <a
                href={`tel:${BUSINESS_INFO.phonePrimary}`}
                className="btn btn-secondary btn-sm"
                style={{ flex: 1 }}
              >
                <Phone size={15} /> Call
              </a>
              <a
                href={`https://wa.me/91${BUSINESS_INFO.whatsappNumber}?text=Hello%20JAI%20CAR%20RENTAL,%20I%20would%20like%20to%20enquire%20about%20car%20rental.`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp btn-sm"
                style={{ flex: 1 }}
              >
                <MessageCircle size={15} /> WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
