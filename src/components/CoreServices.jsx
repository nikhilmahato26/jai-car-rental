import React from 'react';
import { Car, UserCheck, Plane, Building2, Compass, Briefcase, Sparkles, Users, ArrowRight } from 'lucide-react';
import { CORE_SERVICES } from '../data/carData';

export default function CoreServices() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Car': return <Car size={26} />;
      case 'UserCheck': return <UserCheck size={26} />;
      case 'Plane': return <Plane size={26} />;
      case 'Building2': return <Building2 size={26} />;
      case 'Compass': return <Compass size={26} />;
      case 'Briefcase': return <Briefcase size={26} />;
      case 'Sparkles': return <Sparkles size={26} />;
      case 'Users': return <Users size={26} />;
      default: return <Car size={26} />;
    }
  };

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-header">
          <div className="badge-tag">Comprehensive Solutions</div>
          <h2 className="section-title">
            Our Core <span className="yellow-highlight">Rental Services</span>
          </h2>
          <p className="section-subtitle">
            From self-drive flexibility to corporate luxury charters, discover specialized rental solutions tailored precisely to your schedule and destination.
          </p>
        </div>

        <div className="services-grid">
          {CORE_SERVICES.map((srv) => (
            <div key={srv.id} className="service-card">
              <div className="service-icon-wrap">
                {getIcon(srv.icon)}
              </div>
              <h3 className="service-title">{srv.title}</h3>
              <p className="service-desc">{srv.description}</p>
              <a href={srv.href} className="service-link">
                <span>{srv.actionText}</span>
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
