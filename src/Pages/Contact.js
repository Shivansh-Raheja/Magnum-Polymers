import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import './Contact.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_6n89xub', 'template_bh0jd1p', e.target, 'o1nQqm-AkSFGxwVfn')
      .then((result) => {
        console.log('Message sent successfully:', result.text);
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      }, (error) => {
        console.log('Failed to send message:', error.text);
        alert('Failed to send message, please try again.');
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
    </Container>
  );
};

export default ContactUs;
