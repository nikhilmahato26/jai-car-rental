import React from 'react';
import { ShieldCheck, UserCheck, Tag, Layers, Clock } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/carData';

export default function WhyChooseUs() {
  const getIcon = (name) => {
    switch (name) {
      case 'ShieldCheck': return <ShieldCheck size={28} />;
      case 'UserCheck': return <UserCheck size={28} />;
      case 'Tag': return <Tag size={28} />;
      case 'Layers': return <Layers size={28} />;
      case 'Clock': return <Clock size={28} />;
      default: return <ShieldCheck size={28} />;
    }
  };

  return (
    <section id="why-us" className="section section-darker">
      <div className="container">
        <div className="section-header">
          <div className="badge-tag">Service Excellence</div>
          <h2 className="section-title">
            Why Choose <span className="yellow-highlight">Us?</span>
          </h2>
          <p className="section-subtitle">
            We hold ourselves to uncompromising standards of vehicle readiness, professional driving courtesy, and transparent customer assistance.
          </p>
        </div>

        <div className="features-grid">
          {WHY_CHOOSE_US.map((f, idx) => (
            <div key={idx} className="feature-card">
              <div className="feature-icon-circle">
                {getIcon(f.icon)}
              </div>
              <h3 className="feature-card-title">{f.title}</h3>
              <p className="feature-card-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
