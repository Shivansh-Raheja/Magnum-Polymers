import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './OurCategories.css'; // Optional: Separate styles for the component
import 'lazysizes';

const OurCategories = () => {
  const [isVisibleCategories, setIsVisibleCategories] = useState(false);
  const categoriesSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisibleCategories(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (categoriesSectionRef.current) {
      observer.observe(categoriesSectionRef.current);
    }

    return () => {
      if (categoriesSectionRef.current) {
        observer.unobserve(categoriesSectionRef.current);
      }
    };
  }, []);

  return (
    <section
      className={`product-categories ${isVisibleCategories ? 'visible' : ''}`}
      ref={categoriesSectionRef}
    >
      <h2>Our Categories</h2>
      <div className="product-gridd">
        <Link to="/products/steering-components" className="product-tiles">
          <img
            src="/insert.jpg"
            data-src="/insert.jpg"
            alt="Blow Moulding"
            className="lazyload"
          />
          <div className="category-label">Injection & Insert Moulding</div>
        </Link>

        <Link to="/products/steering-components" className="product-tiles">
          <img
            src="/blowm.png"
            data-src="/blowm.png"
            alt="Injection & Insert Moulding"
            className="lazyload"
          />
          <div className="category-label">Blow Moulding</div>
        </Link>

        <Link to="/products/steering-components" className="product-tiles">
          <img
            src="/cat3.png"
            data-src="/cat3.png"
            alt="Inhouse Tooling & SPM"
            className="lazyload"
          />
          <div className="category-label">Inhouse Tooling & SPM</div>
        </Link>
      </div>
    </section>
  );
};

export default OurCategories;
