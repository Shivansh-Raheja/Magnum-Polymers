import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ClientSection.css';

const ClientsSection = () => {
  const clients = [
    { id: 1, logo: '/c1.png' },
    { id: 2, logo: '/c2.png' },
    { id: 3, logo: '/c3.png' },
    { id: 4, logo: '/c4.png' },
    { id: 5, logo: '/c5.png' },
    { id: 6, logo: '/c6.png' },
  ];

  const sliderSettings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
    dots: true,
    arrows: false,
  };

  return (
    <section className="clients-section">
      <div className="clients-container">
        <div className="text-container">
          <h2>Our Prestigious Clients</h2>
          <p>We are proud to collaborate with some of the most esteemed companies worldwide.</p>
        </div>
        <div className="slider-container">
          <Slider {...sliderSettings}>
            {clients.map((client) => (
              <div key={client.id} className="client-tile">
                <img src={client.logo} alt={`Client ${client.id}`} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
