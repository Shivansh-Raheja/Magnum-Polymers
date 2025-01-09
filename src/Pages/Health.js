import React from 'react';
import { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HealthSafety.css'; // Custom CSS for styling

const HealthSafety = () => {
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

  const images = [
    "/h1.jpeg",
    "/h2.jpeg",
    "/h3.jpeg",

  ];

  return (
    <div className="health-safety-container">
      <h1 className="title">We Value Our Family</h1>
      <div className="content">
        <div className="slider-container">
          <Slider {...sliderSettings}>
            {images.map((image, index) => (
              <div key={index} className="slide">
                <img src={image} alt={`Health and Safety ${index + 1}`} className="slide-image" />
              </div>
            ))}
          </Slider>
        </div>
        <div className="text-container">
          <p>
            At our company, the health and safety of our employees and their families are our top priorities. We are committed to creating a safe and healthy work environment through comprehensive training, rigorous safety protocols, and continuous improvements in our practices.
          </p>
          <p>
            Our health and safety initiatives are designed to prevent accidents, promote well-being, and ensure everyone goes home safely. Join us in our mission to foster a culture where safety and health are integral to everything we do.
          </p>
          <p>
  We actively engage our employees in safety awareness programs and encourage a proactive approach towards safety. Through regular safety drills, continuous learning, and feedback loops, we strive to ensure that every team member is equipped with the knowledge and skills needed to handle any emergency situation effectively. Our focus is to build a safety-first culture that permeates every level of our organization.
</p>

        </div>
      </div>
    </div>
  );
};

export default HealthSafety;
