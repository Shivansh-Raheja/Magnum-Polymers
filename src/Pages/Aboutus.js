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
          Magnum Wonderplast, was established in the year 1995 by Mr. Rajiv Trehan,
          qualified Plastics Technologist who is also presently the Managing
          Director of the company.
        </p>
        <p>
          Magnum Wonderplast has experience of working with big corporates like
          HMC, KOYO, SANDEN, JTEKT ,HONDA ,TOYOTA ,YAMAHA ,TATA ,SANTEC ETC. and satisfying them
          over the years. Presently, Magnum Wonderplast is known for its quality
          Injection & blow moulded products, problem solving techniques, Cost
          reduction projects, Imports replacements and its active CSR activities.
        </p>
        <p>
          Magnum Wonderplast is an IATF-16949, MACE GREEN , MSME ZED GOLD , ISO 14001 certified Company having four plants in sector 59, FARIDABAD,which is an industrial hub in Delhi NCR. 
        </p>
        <p>MAGNUM
          quality products which are the integral part of various industrial
          products useful in our daily life. Magnum is original equipment supplier to
          various industries like automobile, consumer durables, Power
          generation, Toys etc.</p>
      </div>
      <div className="image-container">
        <img
          src="/about-us.jpeg"
          data-src="/about-us.jpeg"
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
