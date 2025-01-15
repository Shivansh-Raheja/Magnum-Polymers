import React from "react";
import "./Footer.css";
import { FaWhatsapp,FaTimes, FaYoutube, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Contact Information */}
        <div className="footer-column">
          <h3>Contact Us</h3>
          <ul className="footer-list">
            <li><FaWhatsapp /> +91-98110 61756</li>
            <li><FaWhatsapp /> +91 93184 93058</li>
            <li><FaEnvelope /> inquiry@magnumwonderplast.com</li>
            <li><FaMapMarkerAlt /> Plot No:14,25,30 Sector-59,</li>
            <li>Ind Estate, Faridabad 121004,</li>
            <li>Haryana, India</li>
            <li className="social-links">
              <a href="#"><FaFacebook /></a>
              <a href="https://x.com/magnumpvtltd"><FaTimes /></a>
              <a href="https://www.linkedin.com/in/magnum-wonderplast-a1994b346/"><FaLinkedin /></a>
              <a href="https://www.instagram.com/magnumwonderplast/?hl=en"><FaInstagram /></a>
              <a href="https://www.youtube.com/@magnumwonderplastpvtltd"><FaYoutube /></a>
            </li>
          </ul>
        </div>

        {/* Column 2: Working Hours */}
        <div className="footer-column">
          <h3>Working Hours</h3>
          <ul className="footer-list">
            <li>Mon-Sat: 9:00 AM - 7:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul className="footer-list">
            <li><a href="/Magnum Company Profile 2024-25.pptx">Profile</a></li>
            <li><a href="/contact">Get a Quote</a></li>
          </ul>
        </div>

        {/* Column 4: Plants Outside India */}
        <div className="footer-column">
          <h3>Global Contacts</h3>
          <ul className="footer-list">
            <li>
              <img src="/mexico.png" alt="Mexico Flag" className="footer-flag" />
              <div>Mexico</div>
              <div>Mr. Suresh Rajagopalan</div>
              <div><a href="mailto:sr@magnumpolymers.com">sr@magnumwonderplast.com</a></div>
              <div>+1 647 961 1283</div>
            </li>
            <li>
              <img src="/canada.png" alt="Canada Flag" className="footer-flag" />
              <div>Canada</div>
              <div>Rithwik Trehan</div>
              <div><a href="mailto:ritwiktrehan@magnumwonderplast.com">rithwiktrehan@magnumwonderplast.com</a></div>
              <div>+1 (647) 649-8826</div>
            </li>
            <li>
              <img src="/usa.png" alt="USA Flag" className="footer-flag" />
              <div>USA</div>
              <div>Mr. Lalit Verma</div>
              <div><a href="mailto:lalit.verma@magnumplast.com">lalit.verma@magnumplast.com</a></div>
              <div>+1 248 778 6553</div>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2025 All Rights Reserved | Magnum Wonderplast (P) Ltd</p>
        <br />
        <p style={{fontSize:'0.7rem'}}>Disclaimer: The information provided by us on www.magnumwonderplast.com is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. your use of the site and your reliance on any information on the site is solely at your own risk.</p>
      </div>
    </footer>
  );
};

export default Footer;
