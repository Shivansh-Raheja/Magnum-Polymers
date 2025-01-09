import React, { useEffect, useState } from 'react';
import './Mission.css';

const MissionVision = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 200); // Wait 200ms before triggering the animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mission-vision-container">
      <h1 className="page-heading">Mission & Vision and Quality Policy</h1>

      {/* Mission Section */}
      <div className={`mission-vision-item ${visible ? 'visible' : ''}`}>
        <div className="mission-vision-content">
          <div className="mission-vision-image">
            <img src="/mission.jpg" alt="Mission" />
          </div>
          <div className="mission-vision-text">
            <h2>Our Mission</h2>
            <p>
              Our mission is to provide high-quality products and services that
              exceed our customers' expectations. We aim to continuously innovate
              and improve our processes to deliver excellence while ensuring the
              sustainability of our business.
            </p>
            <p>
              We are committed to being a trusted partner, fostering long-term
              relationships with our customers, and driving growth through innovation
              and dedication.
            </p>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className={`mission-vision-item right ${visible ? 'visible' : ''}`}>
        <div className="mission-vision-content">
          <div className="mission-vision-text">
            <h2>Our Vision</h2>
            <p>
              Our vision is to be a global leader in the polymer industry, known for
              our commitment to excellence, sustainability, and customer satisfaction.
              We strive to continuously improve and deliver value through innovative
              solutions.
            </p>
            <p>
              We envision expanding our reach, fostering partnerships worldwide, and
              creating a positive impact on the industries we serve.
            </p>
          </div>
          <div className="mission-vision-image">
            <img src="/vision.png" alt="Vision" />
          </div>
        </div>
      </div>

      {/* Quality Policy Section */}
      <div className={`mission-vision-item ${visible ? 'visible' : ''}`}>
        <div className="mission-vision-content">
          <div className="mission-vision-image">
            <img src="/quality.png" alt="Quality Policy" />
          </div>
          <div className="mission-vision-text">
            <h2>Quality Policy</h2>
            <p>
              We are committed to delivering high-quality products that meet or exceed
              customer requirements. Our quality management system ensures continuous
              improvement, employee involvement, and compliance with applicable regulations.
            </p>
            <p>
              Our dedication to quality is integral to our business, ensuring customer
              satisfaction and long-term success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
