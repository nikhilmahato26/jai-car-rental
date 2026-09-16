import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/carData';

export default function FloatingActions() {
  return (
    <>
      {/* Desktop Floating Action Buttons */}
      <div className="desktop-floating-actions" aria-label="Quick Contact Options">
        <a
          href={`https://wa.me/91${BUSINESS_INFO.whatsappNumber}?text=Hello%20JAI%20CAR%20RENTAL,%20I%20would%20like%20to%20enquire%20about%20car%20rental.`}
          target="_blank"
          rel="noreferrer"
          className="floating-btn floating-whatsapp"
          title="Chat on WhatsApp"
        >
          <MessageCircle size={28} />
        </a>

        <a
          href={`tel:${BUSINESS_INFO.phonePrimary}`}
          className="floating-btn floating-call"
          title="Call JAI CAR RENTAL"
        >
          <Phone size={26} />
        </a>
      </div>

      {/* Mobile Sticky Action Bar: CALL | WHATSAPP | BOOK NOW */}
      <div className="mobile-sticky-bar" aria-label="Mobile Action Bar">
        <a
          href={`tel:${BUSINESS_INFO.phonePrimary}`}
          className="mobile-bar-btn mobile-bar-call"
        >
          <Phone size={16} className="yellow-highlight" />
          <span>Call</span>
        </a>

        <a
          href={`https://wa.me/91${BUSINESS_INFO.whatsappNumber}?text=Hello%20JAI%20CAR%20RENTAL,%20I%20would%20like%20to%20enquire%20about%20car%20rental.`}
          target="_blank"
          rel="noreferrer"
          className="mobile-bar-btn mobile-bar-whatsapp"
        >
          <MessageCircle size={16} />
          <span>WhatsApp</span>
        </a>

        <a
          href="#book-now"
          className="mobile-bar-btn mobile-bar-book"
        >
          <Calendar size={16} />
          <span>Book Now</span>
        </a>
      </div>
    </>
  );
}
