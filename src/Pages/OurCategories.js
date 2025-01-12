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
        <Link to="/products" className="product-tiles">
          <img
            src="/insert.png"
            data-src="/insert.png"
            alt="Blow Moulding"
            className="lazyload"
          />
          <div className="category-label">Injection & Insert Moulding</div>
        </Link>

        <Link to="/products" className="product-tiles">
          <img
            src="/blow.png"
            data-src="/blow.png"
            alt="Injection & Insert Moulding"
            className="lazyload"
          />
          <div className="category-label">Blow Moulding</div>
        </Link>

        <Link to="/products" className="product-tiles">
          <img
            src="/spm.png"
            data-src="/spm.png"
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
