import React from 'react';
import './SteeringComponents.css';
import { useEffect } from 'react';

const Pipe = [
  '/pipe/1.png',
  '/pipe/2.png',
  '/pipe/3.png',
  '/pipe/4.png',
  '/pipe/5.png',
  '/pipe/6.png',
  '/pipe/7.png',
  '/pipe/8.png',
  '/pipe/10.png',
  '/pipe/11.png',
  '/pipe/12.png',
  '/pipe/13.png',
  '/pipe/14.png',
  '/pipe/15.png',
  '/pipe/16.png',
  '/pipe/17.png',
  '/pipe/18.png',
  '/pipe/19.png',
  '/pipe/20.png',
  
];

const Pipes = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
  return (
    <div className="steering-components-page">
      {/* Image Banner */}
      <div className="image-banner">
        <img src="/pipe/pipe.jpg" alt="Steering Components Banner" />
      </div>

      {/* Heading with Wave Animation */}
      <h1 className="page-heading animate-wave">
      HIGH PURITY WATER MANAGEMENT PLUMBING FITTINGS
      </h1>

      {/* Components Grid */}
      <div className="components-grid">
        {Pipe.map((image, index) => (
          <div key={index} className="component-item">
            <img src={image} alt={`pipe${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pipes;
