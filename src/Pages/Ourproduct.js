import React, { useRef, useState, useEffect } from 'react';
import './Aboutus.css';
import 'lazysizes';

const OurProducts = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (aboutSectionRef.current) {
      observer.observe(aboutSectionRef.current);
    }

    return () => {
      if (aboutSectionRef.current) {
        observer.unobserve(aboutSectionRef.current);
      }
    };
  }, []);

  return (
    <section
      className={`about-us ${isVisible ? 'visible' : ''}`}
      ref={aboutSectionRef}
    >
      <div className="content">
        <h2>Our Products</h2>
        <p>
              Explore our wide range of high-quality products designed to meet
              the diverse needs of various industries. From automotive
              components to consumer goods, we ensure exceptional quality and
              reliability in every product we offer.
            </p>
            <p>
            Magnum Wonderplast is a leading manufacturing firm specializing in high-quality products for the automotive industry and advanced moulding solutions. With a commitment to innovation and precision, the company produces a diverse range of components that cater to the evolving needs of modern vehicles, including dashboards, interior panels, and exterior trims. Leveraging state-of-the-art technology and a highly skilled workforce, Magnum Wonderplast excels in delivering durable, lightweight, and aesthetically pleasing products that enhance vehicle performance and design. Their moulding expertise ensures custom solutions for complex requirements, making them a trusted partner for top automotive brands worldwide.
            </p>
      </div>
      <div className="image-container">
        <img
          src="/collage.png"
          data-src="/collage.png"
          alt="About Us"
          className={`lazyload ${isVisible ? 'loaded' : ''}`}
          width="500"
          height="auto"
        />
      </div>
    </section>
  );
};

export default OurProducts;
