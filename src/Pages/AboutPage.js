import React, { useEffect } from 'react';
import { FaProjectDiagram, FaUsers, FaCalendarAlt ,FaCertificate} from 'react-icons/fa';
import './AboutPage.css';

const AboutPage = () => {
    useEffect(() => {
        const counters = document.querySelectorAll('.counter');
        const speed = 200;
    
        counters.forEach(counter => {
          const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const current = +counter.innerText;
    
            const increment = target / speed;
            
            if (current < target) {
              counter.innerText = Math.ceil(current + increment);
              setTimeout(updateCount, 1);
            } else {
              counter.innerText = target;
            }
          };
          
          updateCount();
        });
      }, []);
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

      <section className="statistics-section">
    <div className="statistics-heading">
        <h2>Get to Know Us More</h2>
    </div>
    <div className="statistics-container">
        {/* Column 1: Projects Completed */}
        <div className="statistics-column">
            <div className="statistics-icon">
                <FaProjectDiagram />
            </div>
            <div className="statistics-content">
                <h3>Projects Completed</h3>
                <p className="counter" data-target="244">0</p>
            </div>
        </div>

        {/* Column 2: Number of Employees */}
        <div className="statistics-column">
            <div className="statistics-icon">
                <FaUsers />
            </div>
            <div className="statistics-content">
                <h3>No.of Employees</h3>
                <p className="counter" data-target="136">0</p>
            </div>
        </div>

        {/* Column 3: Years of Experience */}
        <div className="statistics-column">
            <div className="statistics-icon">
                <FaCalendarAlt />
            </div>
            <div className="statistics-content">
                <h3>Years of Experience</h3>
                <p className="counter" data-target="27">0</p>
            </div>
        </div>

        {/* Column 4: Certified By */}
        <div className="statistics-column">
            <div className="statistics-icon">
                <FaCertificate /> {/* Add an icon for certification */}
            </div>
            <div className="statistics-content">
                <h3>Our Happy clients</h3>
                <p className="counter" data-target="50">0</p> {/* Example of certification number */}
            </div>
        </div>
    </div>
</section>

    </div>
  );
};

export default AboutPage;
