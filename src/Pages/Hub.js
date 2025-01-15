import React, { useEffect } from 'react';
import './SteeringComponents.css';

const Hub = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="steering-components-new-page">
      <div className="content-new-container">
        {/* Top Image */}
        <div className="top-new-image">
          <img src="/productpage2.png" alt="Hub Components" />
        </div>

        {/* Heading */}
        <h1 className="page-new-heading">
          MOTOR VEHICLE HUB COMPONENTS
        </h1>

        {/* Paragraphs Section */}
        <div className="new-paragraphs-section">
          <p>
            At Magnum Wonderplast, we specialize in the production of high-performance motor vehicle hub components. Our hub components are designed to provide superior durability and reliability under all conditions, ensuring a smooth and safe driving experience. With precision engineering and advanced manufacturing techniques, we deliver products that meet the highest standards of quality.
          </p>
          <p>
            Each hub component is crafted using the latest technology and top-grade materials to ensure long-lasting performance. Our design process focuses on strength, efficiency, and compatibility with a wide range of vehicle models. Whether it's for passenger cars, trucks, or commercial vehicles, we offer hub solutions that deliver consistent and exceptional results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hub;
