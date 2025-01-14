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
          <p>
            Sustainability is a core value at Magnum Wonderplast. Our HV duct assembly filters are produced with eco-friendly practices that reduce environmental impact. We utilize recyclable materials and energy-efficient manufacturing processes, ensuring that our products contribute to a greener future while maintaining the highest standards of quality and performance.
          </p>
          <p>
            At Magnum Wonderplast, we are dedicated to building strong partnerships with our clients. We take the time to understand the unique requirements of each customer and provide tailored solutions for their needs. Our team is committed to delivering outstanding customer support, ensuring that every project is handled with the utmost care and attention to detail. With a focus on innovation, quality, and sustainability, we continue to lead the way in the HV duct assembly filter element industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Duct;
