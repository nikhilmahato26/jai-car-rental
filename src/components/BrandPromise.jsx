import React from 'react';
import { ShieldCheck, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/carData';

export default function BrandPromise() {
  return (
    <section className="brand-promise-section">
      <div className="container">
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(255, 196, 0, 0.1)',
            border: '1px solid var(--yellow-bright)',
            padding: '0.4rem 1.25rem',
            borderRadius: 'var(--radius-full)',
            color: 'var(--yellow-bright)',
            fontSize: '0.85rem',
            fontWeight: '800',
            textTransform: 'uppercase',
            marginBottom: '1.5rem'
          }}>
            <ShieldCheck size={16} />
            <span>The JAI CAR RENTAL Promise</span>
          </div>

          <h2 className="promise-heading">
            Drive With Confidence
          </h2>

          <h3 className="promise-subheading">
            Comfortable Rides. Memorable Journeys.
          </h3>

          <p className="promise-tagline">
            “Your Ride. Your Freedom. Our Responsibility.”
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="#book-now"
              className="btn btn-primary btn-lg"
            >
              <span>RESERVE YOUR CAR</span>
            </a>
            <a
              href={`https://wa.me/91${BUSINESS_INFO.whatsappNumber}?text=Hello%20JAI%20CAR%20RENTAL,%20I%20would%20like%20to%20enquire%20about%20booking%20a%20car.`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              <MessageCircle size={20} />
              <span>WHATSAPP NOW</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
