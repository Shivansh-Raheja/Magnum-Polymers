import React from "react";
import "./OurService.css";
import { FaCar, FaHome, FaSeedling, FaCouch, FaBolt, FaPuzzlePiece } from "react-icons/fa";

const services = [
  { id: 1, icon: <FaCar />, title: "Automobile", text: "High-quality automobile solutions tailored to your needs." },
  { id: 2, icon: <FaHome />, title: "Home Appliance", text: "Advanced home appliances for modern living." },
  { id: 3, icon: <FaSeedling />, title: "Agriculture", text: "Innovative tools and services for agriculture." },
  { id: 4, icon: <FaCouch />, title: "Home Decor", text: "Elegant home decor to elevate your space." },
  { id: 5, icon: <FaBolt />, title: "Power Generation", text: "Sustainable and efficient power generation solutions." },
  { id: 6, icon: <FaPuzzlePiece />, title: "Toys & Miscellaneous", text: "Creative toys and miscellaneous products for all ages." },
];

const OurService = () => {
  return (
    <section className="our-service">
      <div className="our-service-container">
        <div className="service-header">
          <h2>Our Services</h2>
          <p>
            Discover a wide range of services designed to cater to your specific needs. From innovative solutions in 
            automobiles to sustainable agriculture, we strive to deliver excellence in every domain.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <div
              className={`service-card ${index % 2 === 0 ? "slide-in-left" : "slide-in-right"}`}
              key={service.id}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurService;
