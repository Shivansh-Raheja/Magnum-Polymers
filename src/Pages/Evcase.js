import React, { useEffect } from 'react';
import './SteeringComponents.css';

const Ev = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="steering-components-new-page">
      <div className="content-new-container">
        {/* Top Image */}
        <div className="top-new-image">
          <img src="/productpage4.png" alt="EV Battery Cases" />
        </div>

        {/* Heading */}
        <h1 className="page-new-heading">
          EV BATTERY CASES
        </h1>

        {/* Paragraphs Section */}
        <div className="new-paragraphs-section">
          <p>
            At Magnum Wonderplast, we specialize in the design and production of high-performance EV battery cases. Our state-of-the-art manufacturing techniques ensure that each case is built to protect and enhance the performance of electric vehicle batteries. With a focus on strength, durability, and lightweight design, we provide battery cases that meet the highest standards of safety and efficiency.
          </p>
          <p>
            The EV battery cases we produce are designed to withstand extreme conditions, providing essential protection against mechanical impacts and environmental factors. We utilize cutting-edge materials and advanced engineering to ensure that our battery cases offer superior protection while remaining lightweight and easy to integrate into various electric vehicle models.
          </p>
          <p>
            Magnum Wonderplast’s commitment to quality ensures that every EV battery case is rigorously tested to meet industry standards. Our cases are built with precision and attention to detail, providing long-lasting reliability for electric vehicle manufacturers. We strive to be at the forefront of innovation, offering solutions that exceed expectations for performance, safety, and sustainability.
          </p>
          <p>
            Sustainability is a key value at Magnum Wonderplast. We are committed to producing eco-friendly EV battery cases using recyclable materials and sustainable manufacturing practices. By minimizing waste and reducing our carbon footprint, we contribute to the advancement of the green automotive industry, ensuring that our products not only meet but exceed environmental standards.
          </p>
          <p>
            Our customer-centric approach ensures that we tailor each EV battery case to meet the specific needs of our clients. From the initial design phase to final production, we work closely with our partners to deliver products that are customized to fit their exact specifications. With a focus on innovation, quality, and customer satisfaction, Magnum Wonderplast continues to lead the way in the production of EV battery cases.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ev;