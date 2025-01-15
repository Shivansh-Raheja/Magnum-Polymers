import React, { useEffect } from 'react';
import './SteeringComponents.css';

const Duct = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="steering-components-new-page">
      <div className="content-new-container">
        {/* Top Image */}
        <div className="top-new-image">
          <img src="/productpage3.png" alt="HV Duct Assembly Filter Elements" />
        </div>

        {/* Heading */}
        <h1 className="page-new-heading">
          MOTOR & COMMERCIAL VEHICLE HV DUCT ASSEMBLY FILTER ELEMENTS
        </h1>

        {/* Paragraphs Section */}
        <div className="new-paragraphs-section">
          <p>
            At Magnum Wonderplast, we specialize in the design and production of high-performance HV duct assembly filter elements for motor and commercial vehicles. These essential components ensure optimal air filtration, helping to maintain the efficiency of the vehicle's HVAC system. With a focus on durability and high-quality materials, we provide filter elements that offer superior performance even in the most demanding conditions.
          </p>
          <p>
            Our HV duct assembly filter elements are engineered with cutting-edge technology to ensure precision and reliability. We understand the critical role these components play in ensuring that air circulation systems operate efficiently. Our filters are designed to meet rigorous industry standards, providing enhanced air quality while protecting HVAC systems from contaminants.
          </p>
          <p>
            Magnum Wonderplast’s HV duct assembly filter elements are built to last, offering exceptional performance over extended periods. Our commitment to continuous improvement means that we are always innovating, ensuring that our products remain at the forefront of the industry. We aim to deliver solutions that not only meet but exceed customer expectations for both performance and longevity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Duct;
