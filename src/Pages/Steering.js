import React, { useEffect } from 'react';
import './SteeringComponents.css';

const SteeringComponents = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="steering-components-new-page">
      <div className="content-new-container">
        {/* Top Image */}
        <div className="top-new-image">
          <img src="/productpage1.png" alt="Steering Components" />
        </div>

        {/* Heading */}
        <h1 className="page-new-heading">
          MOTOR VEHICLE & COMMERCIAL VEHICLES STEERING COMPONENTS
        </h1>

        {/* Paragraphs Section */}
        <div className="new-paragraphs-section">
          <p>
            At Magnum Wonderplast, we specialize in the production of high-quality steering components for motor and commercial vehicles. Our state-of-the-art manufacturing processes ensure precision and durability in every part we produce. By leveraging advanced engineering techniques, we achieve superior quality that sets us apart in the industry.
          </p>
          <p>
            Utilizing cutting-edge technology and materials, we are committed to continuous improvement and innovation. Each component is crafted to meet stringent industry standards, ensuring optimal performance and safety. Our skilled team of engineers and technicians work tirelessly to push the boundaries of what's possible, delivering components that are both reliable and efficient.
          </p>
          <p>
            Our dedication to excellence drives us to deliver products that exceed expectations. From initial design to final production, every step is meticulously managed to provide our customers with the best possible solutions for their steering component needs. We pride ourselves on our customer-centric approach, ensuring that each product is tailored to meet the unique requirements of our clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SteeringComponents;
