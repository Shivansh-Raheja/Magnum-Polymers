import React from 'react';
import './SteeringComponents.css';
import { useEffect } from 'react';

const hub = [
  '/hub/hub.png',
  '/hub/cover.png',
  '/hub/holder.png',
  '/hub/cap.png',
];

const Hub = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
  return (
    <div className="steering-components-page">
      {/* Image Banner */}
      <div className="image-banner">
        <img src="/hub.png" alt="Steering Components Banner" />
      </div>

      {/* Heading with Wave Animation */}
      <h1 className="page-heading animate-wave">
      MOTOR VEHICLE HUB COMPONENTS
      </h1>

      {/* Components Grid */}
      <div className="components-grid">
        {hub.map((image, index) => (
          <div key={index} className="component-item">
            <img src={image} alt={`Steering Component ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hub;
