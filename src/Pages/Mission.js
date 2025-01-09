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
      <h1 className="page-heading">Mission , Vision and Goals</h1>

      {/* Mission Section */}
      <div className={`mission-vision-item ${visible ? 'visible' : ''}`}>
        <div className="mission-vision-content">
          <div className="mission-vision-image">
            <img src="/mission.jpg" alt="Mission" />
          </div>
          <div className="mission-vision-text">
            <h2>Our Mission</h2>
            <p>
            To provide our customers with a full range of value-added products and services that exceed their expectations. To develop and retain dedicated, empowered employees who share in our success. To continuously improve & to achieve profitable growth over the long term using Innovative new manufacturing  technologies to  improve the performance and optimize  the cost.

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
            At Magnum Polymers our vision is to drive innovation and excellence through our precision engineering and creative solutions. We aim to revolutionize industries by providing top-tier, customized plastic molding solutions that cater to diverse needs and challenges.

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
            <h2>Our Goal</h2>
            <p>
  Our goal is to be among the top 10 automotive components providers in the industry. We are committed to delivering high-quality, innovative products that not only meet but exceed customer expectations. Through continuous improvement, we strive to enhance our manufacturing processes, ensuring efficiency and precision at every step.
</p>
<p>
  By fostering a culture of excellence and engaging our skilled workforce, we aim to drive sustainable growth and solidify our position as a trusted partner in the automotive sector. Our dedication to quality, customer satisfaction, and technological advancement propels us towards achieving industry leadership and long-term success.
</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
