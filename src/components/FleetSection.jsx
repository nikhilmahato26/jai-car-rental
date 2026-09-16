import React, { useState } from 'react';
import { MessageCircle, Phone, ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { FLEET_DATA, BUSINESS_INFO } from '../data/carData';

export default function FleetSection() {
  const [filter, setFilter] = useState('all');

  const categories = [
    { label: 'All Fleet', value: 'all' },
    { label: 'Self-Drive', value: 'self-drive' },
    { label: 'Hatchback & Crossover', value: 'compact' },
    { label: 'SUVs & MUVs', value: 'suv' },
    { label: 'Group & Luxury', value: 'group-luxury' }
  ];

  const filteredCars = FLEET_DATA.filter((car) => {
    if (filter === 'all') return true;
    if (filter === 'self-drive') return car.rentalType.includes('Self-Drive');
    if (filter === 'compact') return car.category.includes('Hatchback') || car.category.includes('Crossover') || car.category.includes('Sedan');
    if (filter === 'suv') return car.category.includes('SUV') || car.category.includes('MPV');
    if (filter === 'group-luxury') return car.category.includes('Traveller') || car.category.includes('Luxury');
    return true;
  });

  return (
    <section id="fleet" className="section section-darker">
      <div className="container">
        <div className="section-header">
          <div className="badge-tag">
            <Sparkles size={15} />
            <span>Premium Automotive Fleet</span>
          </div>
          <h2 className="section-title">
            Our Featured <span className="yellow-highlight">Vehicle Fleet</span>
          </h2>
          <p className="section-subtitle">
            Meticulously maintained, fully sanitised, and ready to roll. Choose from verified self-drive models, executive sedans, spacious MPVs, and luxury event cars.
          </p>

          {/* ALL POPULAR BRANDS AVAILABLE Prominent Display */}
          <div style={{
            display: 'inline-block',
            marginTop: '1.25rem',
            background: 'linear-gradient(90deg, rgba(255, 196, 0, 0.15) 0%, rgba(255, 196, 0, 0.25) 50%, rgba(255, 196, 0, 0.15) 100%)',
            border: '1.5px solid var(--yellow-bright)',
            padding: '0.6rem 1.75rem',
            borderRadius: 'var(--radius-full)',
            color: 'var(--yellow-bright)',
            fontWeight: '900',
            letterSpacing: '0.12em',
            fontSize: '0.95rem'
          }}>
            ✦ ALL POPULAR BRANDS AVAILABLE ✦
          </div>
        </div>

        {/* Filter Navigation */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2.5rem' }}>
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`btn btn-sm ${filter === cat.value ? 'btn-primary' : 'btn-secondary'}`}
              style={{ borderRadius: 'var(--radius-full)' }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Fleet Grid */}
        <div className="fleet-grid">
          {filteredCars.map((car) => (
            <div key={car.id} className="fleet-card">
              <div className="fleet-img-box">
                <img src={car.image} alt={car.name} className="fleet-img" loading="lazy" />
                <span className="fleet-category-badge">{car.category}</span>
              </div>

              <div className="fleet-body">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.25rem' }}>
                  <h3 className="fleet-name">{car.name}</h3>
                </div>

                <div className="fleet-highlight-text">
                  ✦ {car.highlight}
                </div>

                {/* Verified Specs */}
                <div className="fleet-specs-row">
                  <span className="fleet-spec-badge">
                    <strong>Rental:</strong> {car.rentalType}
                  </span>
                  <span className="fleet-spec-badge">
                    <strong>Fuel:</strong> {car.fuel}
                  </span>
                  <span className="fleet-spec-badge">
                    <strong>Gear:</strong> {car.transmission}
                  </span>
                </div>

                {/* Price Display */}
                <div className="fleet-pricing-box">
                  <span className="fleet-pricing-label">Tariff</span>
                  <span className="fleet-pricing-val">{car.pricing.rate}</span>
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
                  <a
                    href={`https://wa.me/91${BUSINESS_INFO.whatsappNumber}?text=Hello%20JAI%20CAR%20RENTAL,%20I%20would%20like%20to%20enquire%20about%20${encodeURIComponent(car.name)}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    <MessageCircle size={15} />
                    <span>Enquire</span>
                  </a>

                  <a
                    href={`tel:${BUSINESS_INFO.phonePrimary}`}
                    className="btn btn-secondary btn-sm"
                  >
                    <Phone size={15} />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
