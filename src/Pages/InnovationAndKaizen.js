import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './InnovationAndKaizen.css';
import { useEffect } from 'react';

const InnovationAndKaizen = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <section className="innovation-kaizen-section">
      <Container>
        <Row>
          <Col md={6} className="text-section">
            <h2 className="section-heading">Innovation and Kaizen</h2>
            <p className="section-paragraph">
              Kaizen, a Japanese term meaning "change for the better" or "continuous improvement," is a fundamental philosophy in manufacturing. It emphasizes the importance of making small, incremental improvements in processes, products, or services to enhance efficiency and quality. For manufacturing firms, adhering to Kaizen principles fosters a culture of innovation, reduces waste, improves productivity, and leads to higher customer satisfaction.
            </p>
          </Col>
          <Col md={6} className="image-section">
            <img 
              src="/kai.jpg" 
              alt="Kaizen in Manufacturing" 
              className="kaizen-image"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default InnovationAndKaizen;
