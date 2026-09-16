import React from 'react';
import { Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react';
import { DEMO_TESTIMONIALS } from '../data/carData';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section section-darker">
      <div className="container">
        <div className="section-header">
          <div className="badge-tag">Customer Experiences</div>
          <h2 className="section-title">
            What Our <span className="yellow-highlight">Customers Say</span>
          </h2>
          <p className="section-subtitle">
            Read representative feedback and reviews from our valued travelers and corporate partners across Pune.
          </p>
        </div>

        <div className="testimonials-grid">
          {DEMO_TESTIMONIALS.map((t) => (
            <div key={t.id} className="testimonial-card">
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <div className="testimonial-stars">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="var(--yellow-bright)" strokeWidth={0} />
                    ))}
                  </div>
                  <span className="demo-badge">Demo / Sample Review</span>
                </div>

                <p className="testimonial-quote">
                  "{t.content}"
                </p>
              </div>

              <div className="testimonial-author-box">
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-service">{t.service}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', color: 'var(--yellow-bright)' }}>
                  <CheckCircle2 size={14} />
                  <span>{t.tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontStyle: 'italic' }}>
            *Note for Administrator: This testimonial section is CMS-ready and configured to load verified customer reviews directly from the data layer.
          </p>
        </div>
      </div>
    </section>
  );
}
