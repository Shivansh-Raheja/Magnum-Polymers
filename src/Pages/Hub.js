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
            At Magnum Wonderplast, we specialize in the production of high-performance motor vehicle hub components. Our hubs are designed to provide superior durability and reliability under all conditions, ensuring a smooth and safe driving experience. With precision engineering and advanced manufacturing techniques, we deliver products that meet the highest standards of quality.
          </p>
          <p>
            Each hub component is crafted using the latest technology and top-grade materials to ensure long-lasting performance. Our design process focuses on strength, efficiency, and compatibility with a wide range of vehicle models. Whether it's for passenger cars, trucks, or commercial vehicles, we offer hub solutions that deliver consistent and exceptional results.
          </p>
          <p>
            We take pride in our commitment to innovation. Our team of engineers continuously explores new possibilities in hub design and manufacturing to enhance functionality and improve performance. We aim to provide our customers with the most advanced hub components, helping them to optimize their vehicle's performance while maintaining safety and reliability.
          </p>
          <p>
            Magnum Wonderplast is also committed to sustainability in our production processes. We strive to minimize our environmental footprint by utilizing eco-friendly materials and manufacturing methods. By integrating sustainable practices into our operations, we ensure that our hub components are not only high in quality but also environmentally responsible.
          </p>
          <p>
            Our dedication to customer satisfaction drives us to offer tailored solutions for every need. We work closely with our clients to understand their specific requirements and deliver hub components that meet those needs with precision. Through consistent innovation, exceptional service, and a customer-focused approach, Magnum Wonderplast continues to be a leader in the hub components industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hub;
