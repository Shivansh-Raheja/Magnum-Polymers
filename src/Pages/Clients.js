import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ClientSection.css';

const ClientsSection = () => {
  const directClients = [
    { id: 1, logo: '/c1.png' },
    { id: 2, logo: '/c2.png' },
    { id: 3, logo: '/c3.png' },
    { id: 4, logo: '/c4.png' },
    { id: 5, logo: '/c5.png' },
    { id: 8, logo: '/c8.png' },
    { id: 9, logo: '/c9.png' },
    { id: 10, logo: '/c10.png' },
    { id: 11, logo: '/c11.png' },
  ];

  const indirectClients = [
    { id: 12, logo: '/c12.png' },
    { id: 13, logo: '/c13.png' },
    { id: 14, logo: '/c14.png' },
    { id: 15, logo: '/c15.png' },
    { id: 16, logo: '/c16.png' },
    { id: 17, logo: '/c17.png' },
    { id: 18, logo: '/c18.png' },
    { id: 19, logo: '/c19.png' },
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
          slidesToShow: 1,
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

        <div className="subheading">
          <h3>Brands directly served by us</h3>
        </div>
        <div className="slider-container">
          <Slider {...sliderSettings}>
            {directClients.map((client) => (
              <div key={client.id} className="client-tile">
                <img src={client.logo} alt={`Client ${client.id}`} />
              </div>
            ))}
          </Slider>
        </div>

        <div className="subheading">
          <h3>Brands served indirectly by us</h3>
        </div>
        <div className="slider-container">
          <Slider {...sliderSettings} rtl={true}>
            {indirectClients.map((client) => (
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
