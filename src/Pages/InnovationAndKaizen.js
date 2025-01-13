import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './InnovationAndKaizen.css';

const InnovationAndKaizen = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sliderSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <section className="innovation-kaizen-section">
            <Container>
                <Row>
                    <Col md={6} className="text-section">
                        <h2 className="section-heading">Innovation and Kaizen</h2>
                        <p className="section-paragraph">
                            MAGNUM actively embraces Kaizen, a Japanese term meaning "change for the better" or "continuous improvement," 
                            which is a fundamental philosophy in manufacturing. It emphasizes the importance of making small, incremental 
                            improvements in processes, products, or services to enhance efficiency and quality. For manufacturing firms, 
                            adhering to Kaizen principles fosters a culture of innovation, reduces waste, improves productivity, and leads 
                            to higher customer satisfaction.
                        </p>
                    </Col>
                    <Col md={6} className="image-section">
                        <Slider {...sliderSettings}>
                            <div>
                                <img src="/p1.png" alt="Kaizen 1" className="kaizen-image" />
                            </div>
                            <div>
                                <img src="/p2.png" alt="Kaizen 2" className="kaizen-image" />
                            </div>
                            <div>
                                <img src="/p3.png" alt="Kaizen 3" className="kaizen-image" />
                            </div>
                            <div>
                                <img src="/p4.png" alt="Kaizen 4" className="kaizen-image" />
                            </div>
                            <div>
                                <img src="/p5.png" alt="Kaizen 5" className="kaizen-image" />
                            </div>
                            <div>
                                <img src="/p6.png" alt="Kaizen 6" className="kaizen-image" />
                            </div>
                            <div>
                                <img src="/p7.png" alt="Kaizen 7" className="kaizen-image" />
                            </div>
                            <div>
                                <img src="/p8.png" alt="Kaizen 8" className="kaizen-image" />
                            </div>
                            <div>
                                <img src="/p9.png" alt="Kaizen 9" className="kaizen-image" />
                            </div>
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default InnovationAndKaizen;
