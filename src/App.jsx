import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import VehicleCategories from './components/VehicleCategories';
import SelfDriveSection from './components/SelfDriveSection';
import RealFleetGallery from './components/RealFleetGallery';
import DriverRentalSection from './components/DriverRentalSection';
import CoreServices from './components/CoreServices';
import FleetSection from './components/FleetSection';
import PopularBrands from './components/PopularBrands';
import LocalOutstationSection from './components/LocalOutstationSection';
import AirportTransferSection from './components/AirportTransferSection';
import CorporateSection from './components/CorporateSection';
import WeddingEventsSection from './components/WeddingEventsSection';
import FamilyGroupSection from './components/FamilyGroupSection';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import BrandPromise from './components/BrandPromise';
import BookingSection from './components/BookingSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import CarDetailPage from './components/CarDetailPage';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#/car/')) {
      return { page: 'car-detail', carId: hash.replace('#/car/', '') };
    }
    return { page: 'home', carId: null };
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/car/')) {
        const carId = hash.replace('#/car/', '');
        setCurrentRoute({ page: 'car-detail', carId });
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentRoute({ page: 'home', carId: null });
        if (hash && hash !== '#/' && hash !== '#') {
          setTimeout(() => {
            const targetId = hash.replace('#', '');
            const el = document.getElementById(targetId);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }, 50);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToHome = (sectionId = '') => {
    if (sectionId) {
      window.location.hash = `#${sectionId}`;
    } else {
      window.location.hash = '#/';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="app-root">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Render Dedicated Car Details Page when on #/car/:id route */}
      {currentRoute.page === 'car-detail' ? (
        <CarDetailPage 
          key={currentRoute.carId}
          carId={currentRoute.carId} 
          onBack={() => navigateToHome('fleet')} 
        />
      ) : (
        /* Full Landing Page Content */
        <>
          {/* Hero Section */}
          <HeroSection />

          {/* 5 Vehicle Category Cards */}
          <VehicleCategories />

          {/* Featured Self-Drive Section with Swift & Fronx */}
          <SelfDriveSection />

          {/* Genuine Ground Fleet: Real Car Multi-Angle Slider Cards */}
          <RealFleetGallery />

          {/* Rental With Chauffeur Driver Section */}
          <DriverRentalSection />

          {/* Core Services Section (8 Services) */}
          <CoreServices />

          {/* Interactive Fleet Showcase */}
          <FleetSection />

          {/* Popular Brands Banner */}
          <PopularBrands />

          {/* Local City & Outstation Section */}
          <LocalOutstationSection />

          {/* Airport Transfer Specialized Section */}
          <AirportTransferSection />

          {/* Corporate Travel Solutions */}
          <CorporateSection />

          {/* Wedding & Special Event Cars */}
          <WeddingEventsSection />

          {/* Family & Group Travel Section */}
          <FamilyGroupSection />

          {/* Why Choose Us (5 Value Cards) */}
          <WhyChooseUs />

          {/* How It Works (4 Steps) */}
          <HowItWorks />

          {/* High Impact Brand Promise Section */}
          <BrandPromise />

          {/* High Converting Booking & WhatsApp Form */}
          <BookingSection />

          {/* Testimonials (CMS Ready) */}
          <TestimonialsSection />

          {/* Frequently Asked Questions */}
          <FAQSection />

          {/* About JAI CAR RENTAL & Manager Info */}
          <AboutSection />

          {/* Contact Information & Google Map */}
          <ContactSection />
        </>
      )}

      {/* Site Footer */}
      <Footer />

      {/* Floating Call, WhatsApp & Sticky Mobile Action Bar */}
      <FloatingActions />
    </div>
  );
}
