import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CarouselPage.css';

const additionalMachines = [
  { name: "HAAS VMC : VF2", image: "/machine1.png" },
  { name: "PHILIPS EDM : PZE 400", image: "/machine2.png" },
  { name: "VMC : VM 700", image: "/machine3.jpg" },
  { name: "PRECICUT VERTICAL MILLING MACHINE", image: "/machine4.jpg" },
  { name: "PHILIPS WIRECUT", image: "/machine5.png" },
  { name: "PHILIPS EDM DRIL", image: "/machine6.jpg" }
];

const carouselSettings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 600,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } }
  ]
};

const CarouselPage = () => (
  <div className="carousel-container">
    <section className="tool-design-section">
      <div className="tool-design-left">
        <h1 className="tool-design-heading">Tool Design Capabilities</h1>
        <ul>
          <li>1-PLATE MOULD</li>
          <li>2-PLATE MOULD</li>
          <li>3- HOT RUNNER MOULD</li>
          <li>4- UNSCREWING MOULD</li>
          <li>5 -MOULDS WITH MULTIPLE LIFTERS & SIDE CORES</li>
        </ul>
      </div>
      <div className="tool-design-right">
        <img src="/col.png" alt="Tool Design" className="collage-image" />
      </div>
    </section>

    <h2 className="carousel-title">List of Tool-Room Machines</h2>
    <Slider {...carouselSettings}>
      {additionalMachines.map((machine, index) => (
        <div key={index} className="carousel-item">
          <div className="carousel-image">
            <img src={machine.image} alt={machine.name} />
          </div>
          <h3>{machine.name}</h3>
        </div>
      ))}
    </Slider>
  </div>
);

export default CarouselPage;
