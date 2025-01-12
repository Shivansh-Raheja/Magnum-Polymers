import React from 'react';
import './SteeringComponents.css';
import { useEffect } from 'react';

const two = [
  '/products/57.png',
  '/products/59.png',
  '/products/48.png',
  '/products/41.png',

];

const Two = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
  return (
    <div className="steering-components-page">
      {/* Image Banner */}
      <div className="image-bannerr">
        <img src="/scooty.png" alt="Steering Components Banner" />
      </div>

      {/* Heading with Wave Animation */}
      <h1 className="page-headingg animate-wave">
      TWO WHEELER PARTS
      </h1>

      {/* Components Grid */}
      <div className="components-grid">
        {two.map((image, index) => (
          <div key={index} className="component-item">
            <img src={image} alt={`Steering Component ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Two;
