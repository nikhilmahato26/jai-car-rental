import React, { useState } from 'react';
import { Send, Calendar, Clock, MapPin, User, Phone, Users, Car, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/carData';

export default function BookingSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    rentalType: 'Self Drive',
    vehiclePreference: 'Swift Automatic ZXi Petrol',
    serviceMode: 'Self Drive',
    pickupLocation: '',
    dropLocation: '',
    pickupDate: '',
    pickupTime: '',
    returnDate: '',
    passengers: '1-4 Passengers',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct WhatsApp message URL
    const messageText = `*🚗 NEW BOOKING ENQUIRY - JAI CAR RENTAL*
---------------------------------------
*👤 Name:* ${formData.fullName || 'Not specified'}
*📞 Phone:* ${formData.mobileNumber || 'Not specified'}
*📋 Rental Type:* ${formData.rentalType}
*🚘 Vehicle Preference:* ${formData.vehiclePreference}
*🕹️ Service Mode:* ${formData.serviceMode}
*📍 Pickup Location:* ${formData.pickupLocation || 'Not specified'}
*🏁 Drop Location:* ${formData.dropLocation || 'Not specified'}
*📅 Pickup Date:* ${formData.pickupDate || 'Not specified'}
*⏰ Pickup Time:* ${formData.pickupTime || 'Not specified'}
*🔄 Return Date:* ${formData.returnDate || 'Not specified'}
*👥 Passengers:* ${formData.passengers}
*💬 Additional Notes:* ${formData.message || 'None'}
---------------------------------------
_Sent via JAI CAR RENTAL Booking Portal_`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/91${BUSINESS_INFO.whatsappNumber}?text=${encodedMessage}`;

    setSubmitted(true);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="book-now" className="section booking-section">
      <div className="container">
        <div className="section-header">
          <div className="badge-tag">Quick Reservation</div>
          <h2 className="section-title">
            Book Your <span className="yellow-highlight">Ride</span>
          </h2>
          <p className="section-subtitle">
            Fill in your travel preferences below for an instant quotation and confirmed booking directly on WhatsApp.
          </p>
        </div>

        <div className="booking-card-wrapper">
          <form onSubmit={handleSubmit} className="booking-form-grid">
            {/* Full Name */}
            <div className="form-group">
              <label className="form-label">
                <User size={15} />
                <span>Full Name</span> *
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your name"
                className="form-input"
              />
            </div>

            {/* Mobile Number */}
            <div className="form-group">
              <label className="form-label">
                <Phone size={15} />
                <span>Mobile Number</span> *
              </label>
              <input
                type="tel"
                name="mobileNumber"
                required
                value={formData.mobileNumber}
                onChange={handleChange}
                placeholder="Enter 10-digit mobile number"
                className="form-input"
              />
            </div>

            {/* Rental Type */}
            <div className="form-group">
              <label className="form-label">Rental Type *</label>
              <select
                name="rentalType"
                value={formData.rentalType}
                onChange={handleChange}
                className="form-select"
              >
                <option value="Self Drive">Self Drive</option>
                <option value="With Driver">With Driver</option>
                <option value="Airport Transfer">Airport Transfer</option>
                <option value="Local">Local City Travel</option>
                <option value="Outstation">Outstation Trip</option>
                <option value="Corporate">Corporate Travel</option>
                <option value="Wedding/Event">Wedding / Event</option>
                <option value="Family/Group">Family & Group Travel</option>
              </select>
            </div>

            {/* Self Drive / With Driver */}
            <div className="form-group">
              <label className="form-label">Drive Preference *</label>
              <select
                name="serviceMode"
                value={formData.serviceMode}
                onChange={handleChange}
                className="form-select"
              >
                <option value="Self Drive">Self Drive (I will drive)</option>
                <option value="Chauffeur Driven">With Professional Driver</option>
              </select>
            </div>

            {/* Vehicle Preference */}
            <div className="form-group">
              <label className="form-label">
                <Car size={15} />
                <span>Vehicle Preference</span>
              </label>
              <select
                name="vehiclePreference"
                value={formData.vehiclePreference}
                onChange={handleChange}
                className="form-select"
              >
                <option value="Swift Automatic ZXi Petrol">Swift Automatic ZXi Petrol (Self-Drive / City)</option>
                <option value="Fronx CNG">Fronx CNG (Eco Crossover)</option>
                <option value="Fortuner">Toyota Fortuner (Premium SUV)</option>
                <option value="Innova Crysta">Toyota Innova Crysta (Luxury MPV)</option>
                <option value="Tempo Traveller">Tempo Traveller (12-17 Seater)</option>
                <option value="Executive Sedan">Executive Sedan</option>
                <option value="Luxury Wedding Car">Luxury Wedding & Event Car</option>
                <option value="Any Available Hatchback">Any Available Hatchback</option>
                <option value="Any Available SUV">Any Available SUV</option>
              </select>
            </div>

            {/* Number of Passengers */}
            <div className="form-group">
              <label className="form-label">
                <Users size={15} />
                <span>Number of Passengers</span>
              </label>
              <select
                name="passengers"
                value={formData.passengers}
                onChange={handleChange}
                className="form-select"
              >
                <option value="1-2 Passengers">1-2 Passengers</option>
                <option value="3-4 Passengers">3-4 Passengers</option>
                <option value="5-7 Passengers">5-7 Passengers (MPV / SUV)</option>
                <option value="8-12 Passengers">8-12 Passengers (Traveller / Multi-car)</option>
                <option value="12+ Passengers">12+ Passengers (Large Group)</option>
              </select>
            </div>

            {/* Pickup Location */}
            <div className="form-group">
              <label className="form-label">
                <MapPin size={15} />
                <span>Pickup Location</span> *
              </label>
              <input
                type="text"
                name="pickupLocation"
                required
                value={formData.pickupLocation}
                onChange={handleChange}
                placeholder="e.g. Wagholi, Airport, Kharadi, etc."
                className="form-input"
              />
            </div>

            {/* Drop Location */}
            <div className="form-group">
              <label className="form-label">
                <MapPin size={15} />
                <span>Drop Location</span> *
              </label>
              <input
                type="text"
                name="dropLocation"
                required
                value={formData.dropLocation}
                onChange={handleChange}
                placeholder="e.g. Local Pune, Mumbai, Lonavala, etc."
                className="form-input"
              />
            </div>

            {/* Pickup Date */}
            <div className="form-group">
              <label className="form-label">
                <Calendar size={15} />
                <span>Pickup Date</span> *
              </label>
              <input
                type="date"
                name="pickupDate"
                required
                value={formData.pickupDate}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            {/* Pickup Time */}
            <div className="form-group">
              <label className="form-label">
                <Clock size={15} />
                <span>Pickup Time</span>
              </label>
              <input
                type="time"
                name="pickupTime"
                value={formData.pickupTime}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            {/* Return Date */}
            <div className="form-group">
              <label className="form-label">
                <Calendar size={15} />
                <span>Return Date</span>
              </label>
              <input
                type="date"
                name="returnDate"
                value={formData.returnDate}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            {/* Empty column placeholder for grid symmetry */}
            <div className="form-group" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--yellow-bright)', fontStyle: 'italic', textAlign: 'center' }}>
                ✦ Instant confirmation sent via WhatsApp
              </div>
            </div>

            {/* Message / Requirements */}
            <div className="form-group form-group-full">
              <label className="form-label">Special Requests / Message</label>
              <textarea
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                placeholder="Any special requirements, luggage details, or schedule preferences..."
                className="form-textarea"
              ></textarea>
            </div>

            {/* Submit CTA */}
            <div className="form-group-full" style={{ marginTop: '0.5rem' }}>
              <button
                type="submit"
                className="btn btn-primary btn-lg"
                style={{ width: '100%', fontSize: '1.1rem', fontWeight: '800' }}
              >
                <MessageCircle size={22} />
                <span>REQUEST BOOKING</span>
              </button>
              <p style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.75rem' }}>
                Your request details will be sent directly to <strong>JAI PRAKASH SINGH</strong> on WhatsApp at <strong>{BUSINESS_INFO.phonePrimary}</strong> for immediate booking confirmation.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
