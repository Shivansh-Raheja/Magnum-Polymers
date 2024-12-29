import React from "react";
import "./Footer.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Contact Information */}
        <div className="footer-column">
          <h3>Contact Us</h3>
          <ul className="footer-list">
            <li><FaPhoneAlt /> +91-98110 61756</li>
            <li><FaEnvelope /> magnumpolymers@gmail.com</li>
            <li><FaMapMarkerAlt /> Plot No:14, Sector-59,</li>
            <li> Hsidc Ind Estate, Faridabad 121004,</li>
            <li>Haryana, India</li>
            <li className="social-links">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaInstagram /></a>
            </li>
          </ul>
        </div>

        {/* Column 2: Working Hours */}
        <div className="footer-column">
          <h3>Working Hours</h3>
          <ul className="footer-list">
            <li>Mon-Fri: 9:00 AM - 7:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul className="footer-list">
            <li><a href="#">Profile</a></li>
            <li><a href="#">Brochure</a></li>
            <li><a href="#">Get a Quote</a></li>
          </ul>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2024 All Rights Reserved | Magnum-Polymers</p>
      </div>
    </footer>
  );
};

export default Footer;
