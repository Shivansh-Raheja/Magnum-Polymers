import React from 'react';
import './PassengerSittingSystem.css';
import { useEffect } from 'react';

const PassengerSittingSystem = () => {
  useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
  return (
    <div className="passenger-sitting-system-container">
      {/* Bus Image Banner */}
      <div className="banner">
        <img
          src="/marco.jpg" // Replace with your actual image path
          alt="Bus Banner"
          className="banner-image"
        />
      </div>

      {/* Heading */}
      <div className="section-heading">
        <h1>Passenger Sitting System</h1>
      </div>

      {/* Chair Image and Details */}
      <div className="chair-details-section">
        <div className="chair-image-container">
          <img
            src="/seat.png" // Replace with your actual chair image path
            alt="Chair"
            className="chair-image"
          />
        </div>
        <div className="chair-description-container">
          <h2>BLOW MOULDED CHAIRS</h2>
          <p>
            Our comfortable passenger sitting system is designed to offer a
            superior level of comfort, durability, and safety. The ergonomic
            design provides excellent support, making long journeys more
            enjoyable. Perfect for buses, coaches, and other public transport
            vehicles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PassengerSittingSystem;
