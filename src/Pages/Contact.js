import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import { FaWhatsapp } from 'react-icons/fa'; // WhatsApp icon from react-icons
import { Message } from 'rsuite'; // Importing Message component from rsuite
import './Contact.css';

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    country: '',
    state: '',
    company: ''
  });

  const [showMessage, setShowMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Log form data for debugging
    console.log("Form Data: ", formData);

    // Send email with emailjs
    emailjs.sendForm('service_8leu1lj', 'template_qby788q', e.target, 'Mtnkwo1y2pwHX1Myo')
      .then((result) => {
        console.log('Message sent successfully:', result.text);

        // Show success message
        setShowMessage({
          type: 'success',
          content: 'Your message has been sent successfully!'
        });

        // Reset the form after submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          country: '',
          state: '',
          company: ''
        });
      }, (error) => {
        console.log('Failed to send message:', error.text);

        // Show error message
        setShowMessage({
          type: 'error',
          content: 'There was an error sending your message. Please try again.'
        });
      });
  };

  return (
    <Container className="contact-us-container">
      <Row>
        <Col md={6} className="contact-form-section">
          <Form onSubmit={handleSubmit} className="contact-form">
            <h2 className="form-title">Get In Touch</h2>

            <Form.Group controlId="formName">
              <Form.Control
                type="text"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Control
                type="email"
                placeholder="Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </Form.Group>

            <Form.Group controlId="formPhone">
              <Form.Control
                type="tel"
                placeholder="Your Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="form-input"
              />
            </Form.Group>

            {/* Manually entered Country and State */}
            <Form.Group controlId="formCountry">
              <Form.Control
                type="text"
                placeholder="Your Country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="form-input"
              />
            </Form.Group>

            <Form.Group controlId="formState">
              <Form.Control
                type="text"
                placeholder="Your State"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                className="form-input"
              />
            </Form.Group>

            <Form.Group controlId="formCompany">
              <Form.Control
                type="text"
                placeholder="Your Company's Name"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="form-input"
              />
            </Form.Group>

            <Form.Group controlId="formSubject">
              <Form.Control
                type="text"
                placeholder="Subject (Max 100 characters)"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                maxLength="100"
                required
                className="form-input"
              />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Your Message (Max 150 characters)"
                name="message"
                value={formData.message}
                onChange={handleChange}
                maxLength="150"
                required
                className="form-textarea"
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="form-button">
              Send Message
            </Button>
          </Form>
        </Col>

        <Col md={6} className="map-section">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14050.613520636629!2d77.3002125382199!3d28.30882230505731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cda3515555555%3A0xb2ca733bc89c89e1!2sMagnum%20Wonderplast%20Pvt%20Ltd.!5e0!3m2!1sen!2sin!4v1736275634750!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Firm Location"
            ></iframe>
          </div>
        </Col>
      </Row>

      {/* WhatsApp Button */}
      <Row className="whatsapp-section" style={{marginTop:'30px'}}>
        <Col className="text-center">
          <a
            href="https://wa.me/919811061756" // Updated WhatsApp link format
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
          >
            <FaWhatsapp className="whatsapp-icon" />
            Contact Us via WhatsApp
          </a>
        </Col>
      </Row>

      {/* Message Display */}
      {showMessage && (
        <Message showIcon type={showMessage.type}>
          <strong>{showMessage.type.charAt(0).toUpperCase() + showMessage.type.slice(1)}!</strong> {showMessage.content}
        </Message>
      )}
    </Container>
  );
};

export default ContactUs;
