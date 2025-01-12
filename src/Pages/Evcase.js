import React from 'react';
import './SteeringComponents.css';
import { useEffect } from 'react';

const ev = [
  '/hub/e.png',
  '/hub/ev.png',
  '/hub/evv.png',
  '/hub/evvv.png',
];

const Ev = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
  return (
    <div className="steering-components-page">
      {/* Image Banner */}
      <div className="image-banner">
        <img src="/hub/bat.png" alt="Steering Components Banner" />
      </div>

      {/* Heading with Wave Animation */}
      <h1 className="page-heading animate-wave">
      EV BATTERY CASES
      </h1>

      {/* Components Grid */}
      <div className="components-grid">
        {ev.map((image, index) => (
          <div key={index} className="component-item">
            <img src={image} alt={`Steering Component ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ev;
