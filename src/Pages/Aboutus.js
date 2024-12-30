import React, { useRef, useState, useEffect } from 'react';
import './Aboutus.css';
import 'lazysizes';

const AboutUs = () => {
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
        <h2>About Us</h2>
        <p>
          Magnum polymers, was established in the year 1991 by Mr. Rajeev Trehan,
          qualified Plastics Technologist who is also presently the Managing
          Director of the company.
        </p>
        <p>
          Magnum Polymers has got experience of working with big corporates like
          SAMSUNG, HERO, EMERSON, JTEKT, SONA & SYSTEMAIR and satisfying them
          over the years. Presently, Magnum Polymers is known for its quality
          Injection & blow moulded products, problem solving techniques, Cost
          reduction projects, Imports replacements and its active CSR activities.
        </p>
        <p>
          Magnum Polymers is an ISO 9001 & 14001 certified Company based at
          biggest industrial hub at FARIDABAD in Delhi NCR. We seek to produce
          quality products which are the integral part of various industrial
          products useful in our daily life. We have been a constant supplier to
          various industries like automobile, consumer durables, Power
          generation, Toys etc.
        </p>
      </div>
      <div className="image-container">
        <img
          src="/pexels-tiger-lily-4483609.jpg"
          data-src="/pexels-tiger-lily-4483609.jpg"
          alt="About Us"
          className={`lazyload ${isVisible ? 'loaded' : ''}`}
          width="500"
          height="auto"
        />
      </div>
    </section>
  );
};

export default AboutUs;
