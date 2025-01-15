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
        </div>
      </div>
    </div>
  );
};

export default Ev;