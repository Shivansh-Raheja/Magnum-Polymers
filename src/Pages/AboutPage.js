import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* About Us Section */}
      <section className="about-us-section">
        <h1 className="about-title">About Us</h1>
        <div className="about-content">
          {/* Left: Video */}
          <div className="about-video-container">
            <video
              className="about-video"
              src="/Mango AI Work_20241230-132401.mp4" // Replace with your video source
              autoPlay
              loop
              muted
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Right: Text Content */}
          <div className="about-text">
            <p>
              Magnum Polymers is a leading name in the polymer industry,
              delivering innovative and sustainable solutions for a diverse
              range of industries. With decades of expertise, state-of-the-art
              infrastructure, and a dedicated team, we have consistently set
              benchmarks in quality, reliability, and customer satisfaction.
            </p>
            <p>
              Our core values include innovation, sustainability, and
              excellence, driving us to create products that meet the highest
              standards of performance and durability.
            </p>
            <p>
              We take pride in our commitment to sustainability and
              environmental responsibility, ensuring our processes and products
              contribute to a greener future.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
