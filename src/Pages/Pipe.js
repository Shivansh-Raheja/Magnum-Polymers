import React, { useEffect } from 'react';
import './SteeringComponents.css';

const Pipe = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="steering-components-new-page">
      <div className="content-new-container">
        {/* Top Image */}
        <div className="top-new-image">
          <img src="/productpage6.png" alt="HIGH PURITY WATER MANAGEMENT PLUMBING FITTINGS" />
        </div>

        {/* Heading */}
        <h1 className="page-new-heading">
          HIGH PURITY WATER MANAGEMENT PLUMBING FITTINGS
        </h1>

        {/* Paragraphs Section */}
        <div className="new-paragraphs-section">
          <p>
            At Magnum Wonderplast, we specialize in the production of high-purity water management plumbing fittings. Our products are designed to ensure the highest standards of water purity and safety, catering to both residential and commercial needs. Utilizing advanced manufacturing processes, we guarantee precision and reliability in every fitting.
          </p>
          <p>
            Our plumbing fittings are crafted using top-grade materials, ensuring durability and resistance to corrosion. We employ cutting-edge technology to meet the stringent requirements of modern water management systems, providing solutions that are both efficient and sustainable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pipe;
