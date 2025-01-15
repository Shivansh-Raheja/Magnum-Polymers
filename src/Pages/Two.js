import React, { useEffect } from 'react';
import './SteeringComponents.css';

const Two = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="steering-components-new-page">
      <div className="content-new-container">
        {/* Top Image */}
        <div className="top-new-image">
          <img src="/productpage5.png" alt="Two Wheeler Parts" />
        </div>

        {/* Heading */}
        <h1 className="page-new-heading">
          TWO WHEELER PARTS
        </h1>

        {/* Paragraphs Section */}
        <div className="new-paragraphs-section">
          <p>
            At Magnum Wonderplast, we specialize in the design and manufacturing of high-quality components for two-wheelers. Our product range includes critical parts that contribute to the smooth operation, safety, and performance of motorcycles and scooters. From engine components to body panels, we ensure that every part meets stringent industry standards for quality and durability.
          </p>
          <p>
            Using advanced materials and cutting-edge technology, we create components that are lightweight, durable, and resistant to the wear and tear of everyday use. Our focus on precision engineering ensures that each part fits seamlessly into the vehicle’s design, improving both functionality and aesthetics. We aim to provide parts that not only perform well but also enhance the overall riding experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Two;
