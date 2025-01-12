import React from 'react';
import './SteeringComponents.css';
import { useEffect } from 'react';

const steeringComponents = [
  '/products/68.png',
  '/products/64.png',
  '/products/63.png',
  '/products/62.png',
  '/products/61.png',
  '/products/57.png',
  '/products/56.png',
  '/products/55.png',
  '/products/53.png',
  '/products/52.png',
  '/products/51.png',
  '/products/50.png',
  '/products/48.png',
  '/products/47.png',
  '/products/46.png',
  '/products/45.png',
  '/products/44.png',
  '/products/43.png',
  '/products/41.png',
  '/products/40.png',
  '/products/39.png',
  '/products/38.png',
  '/products/37.png',
  '/products/36.png',
  '/products/35.png',
  '/products/34.png',
  '/products/33.png',
  '/products/32.png',
  '/products/31.png',
  '/products/30.png',
  '/products/29.png',
  '/products/28.png',
  '/products/27.png',
  '/products/26.png',
  '/products/25.png',
  '/products/24.png',
  '/products/23.png',
  '/products/22.png',
  '/products/21.png',
  '/products/20.png',
  '/products/19.png',
  '/products/18.png',
  '/products/17.png',
  '/products/16.png',
  '/products/15.png',
  '/products/13.png',
  '/products/12.png',
  '/products/11.png',
  '/products/9.png',
  '/products/8.png',
  '/products/7.png',
  '/products/6.png',
  '/products/5.png',
  '/products/4.png',
  '/products/3.png',
];

const SteeringComponents = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
  return (
    <div className="steering-components-page">
      {/* Image Banner */}
      <div className="image-banner">
        <img src="/Steeringcomp.png" alt="Steering Components Banner" />
      </div>

      {/* Heading with Wave Animation */}
      <h1 className="page-heading animate-wave">
        MOTOR VEHICLE & COMMERCIAL VEHICLES STEERING COMPONENTS
      </h1>

      {/* Components Grid */}
      <div className="components-grid">
        {steeringComponents.map((image, index) => (
          <div key={index} className="component-item">
            <img src={image} alt={`Steering Component ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SteeringComponents;
