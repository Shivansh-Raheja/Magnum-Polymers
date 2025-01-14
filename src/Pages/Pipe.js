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
          <p>
            Innovation is at the core of our operations. We continuously enhance our product offerings to meet the evolving demands of the plumbing industry. Our fittings are designed to facilitate easy installation and maintenance, ensuring seamless integration into existing water management systems.
          </p>
          <p>
            At Magnum Wonderplast, we prioritize environmental sustainability in our manufacturing practices. Our eco-friendly approach minimizes waste and reduces our carbon footprint, reflecting our commitment to protecting the environment while delivering superior products.
          </p>
          <p>
            We value our relationships with clients and strive to deliver exceptional customer service. Our team is dedicated to providing support throughout the selection and installation process, ensuring that every customer receives a product that meets their specific needs. With a focus on quality, innovation, and customer satisfaction, Magnum Wonderplast stands out as a trusted name in high-purity water management plumbing fittings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pipe;
