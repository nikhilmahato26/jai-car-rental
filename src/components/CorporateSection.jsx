import React from 'react';
import { Briefcase, Building, Users, Calendar, Shield, MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/carData';

export default function CorporateSection() {
  const corporateServices = [
    { title: 'Executive Transportation', desc: 'Premium sedans and SUVs for CXOs and senior business leadership.' },
    { title: 'Business Meetings & Roadshows', desc: 'Full-day standby chauffeur service for packed boardroom schedules.' },
    { title: 'Client Transportation', desc: 'Make an exceptional impression when hosting visiting VIP delegates.' },
    { title: 'Employee Commute & Travel', desc: 'Scheduled transfers for IT parks in Kharadi, Magarpatta, and Hinjewadi.' },
    { title: 'Executive Airport Charters', desc: 'Seamless, flight-monitored airport pickups with zero waiting time.' },
    { title: 'Flexible Invoicing & Billing', desc: 'GST compliant invoices and transparent corporate rental agreements.' }
  ];

  return (
    <section id="corporate" className="section">
      <div className="container">
        <div className="section-header">
          <div className="badge-tag">
            <Briefcase size={15} />
            <span>Business Fleet Management</span>
          </div>
          <h2 className="section-title">
            Corporate <span className="yellow-highlight">Travel Solutions</span>
          </h2>
          <p className="section-subtitle">
            Reliable, polished, and punctual mobility services engineered to meet the demanding standards of modern enterprises and professionals.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem'
        }}>
          {corporateServices.map((srv, idx) => (
            <div key={idx} style={{
              background: 'var(--navy-card)',
              border: '1px solid var(--navy-border)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.75rem',
              transition: 'var(--transition-smooth)'
            }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: 'var(--radius-sm)',
                background: 'rgba(255, 196, 0, 0.1)',
                border: '1px solid var(--navy-border-glow)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--yellow-bright)',
                marginBottom: '1rem'
              }}>
                <Building size={20} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '800', marginBottom: '0.4rem', color: '#FFF' }}>
                {srv.title}
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                {srv.desc}
              </p>
            </div>
          ))}
        </div>

        <div style={{
          textAlign: 'center',
          background: 'rgba(11, 27, 51, 0.7)',
          border: '1px solid var(--navy-border)',
          borderRadius: 'var(--radius-xl)',
          padding: '2.5rem 1.5rem'
        }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>
            Elevate Your Organization's Ground Mobility
          </h3>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 1.75rem auto' }}>
            Get in touch with Mr. Jai Prakash Singh to arrange customized corporate packages, recurring booking arrangements, and priority vehicle reservations.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href={`https://wa.me/91${BUSINESS_INFO.whatsappNumber}?text=Hello%20JAI%20CAR%20RENTAL,%20I%20have%20a%20corporate%20travel%20requirement.%20Please%20connect.`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              <MessageCircle size={18} />
              <span>CORPORATE ENQUIRY</span>
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phonePrimary}`}
              className="btn btn-secondary"
            >
              <Phone size={18} />
              <span>CALL: {BUSINESS_INFO.phonePrimary}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
