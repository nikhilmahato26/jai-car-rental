import React from 'react';
import { POPULAR_BRANDS } from '../data/carData';

export default function PopularBrands() {
  return (
    <section className="popular-brands-section">
      <div className="container">
        <div className="brands-header-box">
          <p style={{
            fontSize: '0.85rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--yellow-bright)',
            fontWeight: '800',
            marginBottom: '0.4rem'
          }}>
            Trusted Automakers
          </p>
          <h3 style={{ fontSize: '1.75rem', fontWeight: '800' }}>
            Popular Brands Available
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
            Vehicles from India's most reliable and renowned automotive manufacturers.
          </p>
        </div>

        <div className="brands-flex">
          {POPULAR_BRANDS.map((brand, idx) => (
            <div key={idx} className="brand-pill">
              {brand.name}
            </div>
          ))}
        </div>

        <p style={{
          textAlign: 'center',
          fontSize: '0.75rem',
          color: 'var(--text-dim)',
          marginTop: '1.5rem'
        }}>
          *All brand names, trademarks, and logos are properties of their respective owners and used solely for vehicle fleet identification. JAI CAR RENTAL is an independent rental agency.
        </p>
      </div>
    </section>
  );
}
