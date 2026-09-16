import React from 'react';
import { ChevronRight, ArrowUpRight } from 'lucide-react';
import { VEHICLE_CATEGORIES, BUSINESS_INFO } from '../data/carData';

export default function VehicleCategories() {
  return (
    <section id="categories" className="section section-darker">
      <div className="container">
        <div className="section-header">
          <div className="badge-tag">Vehicle Fleet Categories</div>
          <h2 className="section-title">
            Explore Our <span className="yellow-highlight">Vehicle Categories</span>
          </h2>
          <p className="section-subtitle">
            Whether it's a solo city commute, a comfortable family getaway, or a grand wedding entrance, we have the ideal ride for your itinerary.
          </p>
        </div>

        <div className="category-grid">
          {VEHICLE_CATEGORIES.map((cat) => (
            <div key={cat.id} className="category-card">
              <div className="category-img-box">
                <img src={cat.image} alt={cat.title} className="category-img" loading="lazy" />
                <span className="category-badge">{cat.badge}</span>
              </div>
              <div className="category-body">
                <h3 className="category-title">{cat.title}</h3>
                <div className="category-tagline">{cat.tagline}</div>
                <p className="category-desc">{cat.description}</p>
                
                <div className="category-actions">
                  <a href="#fleet" className="btn btn-secondary btn-sm">
                    <span>View Vehicles</span>
                  </a>
                  <a
                    href={`https://wa.me/91${BUSINESS_INFO.whatsappNumber}?text=Hello%20JAI%20CAR%20RENTAL,%20I%20am%20interested%20in%20booking%20a%20${encodeURIComponent(cat.title)}%20vehicle.`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    <span>Book Now</span>
                    <ArrowUpRight size={14} />
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
