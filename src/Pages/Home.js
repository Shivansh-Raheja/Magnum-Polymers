import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';  // Custom styles for homepage
import 'lazysizes';
import { useLocation } from 'react-router-dom';
import ClientsSection from './Clients';
import OurService from './Services';
import AboutUs from './Aboutus';
import OurCategories from './OurCategories';

const HomePage = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const location = useLocation();
  const [isVisibleGallery, setIsVisibleGallery] = useState(false);
  const [isVisibleProducts, setIsVisibleProducts] = useState(false);
  const productsSectionRef = useRef(null);

  const gallerySectionRef = useRef(null);

  const products = Array.from({ length: 6 }, (_, i) => ({
    name: `Product ${i + 1}`,
    img: `/s${i + 1}.jpg`, // Updated to match "s1" to "s12"
  }));  

  const videos = [
    { src: '/4941355-hd_1920_1080_25fps.mp4', alt: 'Video 1' },
    { src: '898979-hd_1920_1080_25fps.mp4', alt: 'Video 2' },
  ];

  const galleryVideos = [
    { src: '/1.mp4', alt: 'Work Video 1' },
    { src: '/2.mp4', alt: 'Work Video 2' },
    { src: '/3.mp4', alt: 'Work Video 3' },
    { src: '/4.mp4', alt: 'Work Video 4' },
    { src: '/5.mp4', alt: 'Work Video 5' },
    { src: '/4.mp4', alt: 'Work Video 6' },
    { src: '/1.mp4', alt: 'Work Video 5' },
    { src: '/3.mp4', alt: 'Work Video 6' },
  ];

  // Change video every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 10000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisibleProducts(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (productsSectionRef.current) {
      observer.observe(productsSectionRef.current);
    }

    return () => {
      if (productsSectionRef.current) {
        observer.unobserve(productsSectionRef.current);
      }
    };
  }, []);

  // IntersectionObserver for Work Gallery Section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisibleGallery(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (gallerySectionRef.current) {
      observer.observe(gallerySectionRef.current);
    }

    return () => {
      if (gallerySectionRef.current) {
        observer.unobserve(gallerySectionRef.current);
      }
    };
  }, []);

  const handleVideoClick = (event) => {
    const video = event.target;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };
  

  return (
    <div className="homepage">
      {/* Video Banner Section */}
      <section className="video-banner">
        <div className="video-container">
          <video
            src={videos[currentVideo].src}
            className="video-banner-content"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="video-overlay">
            <h1 className="banner-title">Welcome to Magnum Polymers</h1>
            <p className="banner-subtitle">Innovating for a better tomorrow</p>
            <button className="cta-button">Learn More</button>
          </div>
        </div>
      </section>

      <AboutUs />

      <OurCategories />

      <section
  className={`work-gallery ${isVisibleGallery ? 'visible' : ''}`}
  ref={gallerySectionRef}
>
  <h2 style={{ fontWeight: 'bold' }}>Our Work Gallery</h2>
  <div className="gallery-grid">
    {galleryVideos.map((video, index) => (
      <div className="gallery-tile" key={index}>
        <video
          className="gallery-video lazyload"
          data-src={video.src}
           // Placeholder thumbnail
          muted
          loop
          playsInline
          onClick={(e) => handleVideoClick(e)}
        >
          Your browser does not support the video tag.
        </video>
        <p className="video-caption">{video.alt}</p>
      </div>
    ))}
  </div>
</section>

<section
      className={`our-products ${isVisibleProducts ? 'visible' : ''}`}
      ref={productsSectionRef}
    >
      <div className="our-products-container">
        {/* Left Side: Text and Animated Man */}
        <div className="left-side">
          <div className="intro-text">
            <h2 style={{fontWeight:"bold"}}>Our Products</h2>
            <p>
              Explore our wide range of high-quality products designed to meet
              the diverse needs of various industries. From automotive
              components to consumer goods, we ensure exceptional quality and
              reliability in every product we offer.
            </p>
          </div>
          <div className="animated-man">
            <img
              src="/vecteezy_3d-male-character-presenting-to-the-left_24785833.png" // Replace with an actual animation or GIF of a man
              alt="Animated Man"
              className="lazyload"
            />
          </div>
        </div>

        {/* Right Side: Product Grid */}
        <div className="right-side">
          <div className="product-grid">
            {products.map((product, index) => (
              <div className="product-tile" key={index}>
                <img
                  src={product.img}
                  data-src={product.img}
                  alt={product.name}
                  className="lazyload product-image"
                />
                <div className="product-name">{product.name}</div>
              </div>
            ))}
          </div>

          {/* Call-to-Action Button */}
                  <div className="cta-container">
          <Link to="/products">
            <button className="cta-button">See All Products</button>
          </Link>
        </div>

        </div>
      </div>
    </section>

    <ClientsSection />
    <OurService />

    </div>
  );
};

export default HomePage;
