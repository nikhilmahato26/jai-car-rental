import React from 'react';
import { HOW_IT_WORKS } from '../data/carData';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section">
      <div className="container">
        <div className="section-header">
          <div className="badge-tag">Seamless 4-Step Process</div>
          <h2 className="section-title">
            How It <span className="yellow-highlight">Works</span>
          </h2>
          <p className="section-subtitle">
            Booking your self-drive vehicle or chauffeur-driven car in Pune is effortless and transparent.
          </p>
        </div>

        <div className="process-grid">
          {HOW_IT_WORKS.map((step) => (
            <div key={step.step} className="process-card">
              <div className="process-number">{step.step}</div>
              <h3 className="process-title">{step.title}</h3>
              <p className="process-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
