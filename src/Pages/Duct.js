import React from 'react';
import './SteeringComponents.css';
import { useEffect } from 'react';

const duct = [
  '/duct/1.png',
  '/duct/2.png',
  '/duct/3.png',
  '/duct/du.jpg',
  '/duct/duc.jpg',
  '/duct/duct.jpg',
];

const Duct = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
  return (
    <div className="steering-components-page">
      {/* Image Banner */}
      <div className="image-banner">
        <img src="/truck.png" alt="Steering Components Banner" />
      </div>

      {/* Heading with Wave Animation */}
      <h1 className="page-heading animate-wave">
      MOTOR & COMMERCIAL VEHICLE HV DUCT ASSEMBLY FILTER ELEMENTS
      </h1>

      {/* Components Grid */}
      <div className="components-grid">
        {duct.map((image, index) => (
          <div key={index} className="component-item">
            <img src={image} alt={`Steering Component ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Duct;
