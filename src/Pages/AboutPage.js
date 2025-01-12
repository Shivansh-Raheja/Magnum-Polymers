import React, { useEffect } from 'react';
import { FaProjectDiagram, FaUsers, FaCalendarAlt ,FaCertificate} from 'react-icons/fa';
import {  FaCog, FaIndustry, FaHeadset } from 'react-icons/fa';
import Future from './Future';
import './AboutPage.css';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
              src="/Mango AI Work_20250108-000633.mp4" // Replace with your video source
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
            Magnum Wonderplast (P) ltd is a leading name in the Automotive IC+EV components Industry worldwide  delivering highly critical components for Steering Assy, 3rd Generation wheel Hub assys , HVAC assys for Commercial vehicles,Passenger vehicles,Two wheelers, Bicycles. With decades of expertise, state-of-the-art
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

<section className="certification-section">
    <div className="certification-container">
        {/* Text Content */}
        <div className="certification-text">
            <h2>By Whom We Are Accredited ?</h2>
            <p>
            We are Accredited by Organizations like BSI for IATF16949-2016 ,CVI for ISO 14001 regarding environmental management and MSME for ZED GOLD regarding sustainability.
            We are also certified by Maruti Suzuki India limited as a green vendor for MACE.
            </p>
            <p>
                These certifications validate our commitment to delivering exceptional 
                services while maintaining sustainability and ethical practices in every project we undertake.
            </p>
            <p>
            These certifications not only demonstrate our dedication to meeting industry benchmarks but also inspire trust among our clients and partners. They reflect our relentless pursuit of innovation, efficiency, and excellence, ensuring that every service we deliver aligns with global standards and exceeds expectations.
            </p>
        </div>
        {/* Image Content */}
        <div className="certification-image-container">
            <div className="certification-image">
                <img 
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/certificate-3d-icon-download-in-png-blend-fbx-gltf-file-formats--diploma-degree-document-education-achievement-teacher-day-pack-school-icons-5117408.png" 
                    alt="Certification Example" 
                    className="responsive-image dancing-image" 
                />
            </div>
        </div>
    </div>
</section>

<section class="vision-section">
  <div class="vision-container">
    <div class="vision-left">
      <h2 class="vision-title">Our Vision</h2>
      <video class="vision-video" controls>
        <source src="./Mango AI Work_20241230-211335.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="vision-right">
      <div class="vision-tiles">
        <div class="vision-tile">
          <FaUsers size={30} className="vision-icon" />
          <h3>Professional Teams</h3>
          <p>Our expert teams bring top-level expertise and experience.</p>
        </div>
        <div class="vision-tile">
          <FaCog size={30} className="vision-icon" />
          <h3>Smart Services</h3>
          <p>Innovative and efficient solutions for every challenge.</p>
        </div>
        <div class="vision-tile">
          <FaIndustry size={30} className="vision-icon" />
          <h3>Latest Machinery</h3>
          <p>State-of-the-art machinery for maximum performance.</p>
        </div>
        <div class="vision-tile">
          <FaHeadset size={30} className="vision-icon" />
          <h3>Great Support</h3>
          <p>Dedicated support available whenever you need it.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<Future />

    </div>
  );
};

export default AboutPage;
