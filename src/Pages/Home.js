import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';  // Custom styles for homepage
import 'lazysizes';
import { useLocation } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import ClientsSection from './Clients';
import OurService from './Services';
import AboutUs from './Aboutus';
import OurCategories from './OurCategories';
import OurProducts from './Ourproduct';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
    { src: '/homevid1.mp4', alt: 'Video 1' },
    { src: '/homevid1.mp4', alt: 'Video 2' },
  ];

  const galleryVideos = [
    { src: '/2.mp4', alt: 'Work Video 1' },
    { src: '/3.mp4', alt: 'Work Video 2' },
    { src: '/4.mp4', alt: 'Work Video 3' },
    { src: '/5.mp4', alt: 'Work Video 4' },
    { src: '/6.mp4', alt: 'Work Video 5' },
    // { src: '/4.mp4', alt: 'Work Video 6' },
    // { src: '/1.mp4', alt: 'Work Video 5' },
    // { src: '/3.mp4', alt: 'Work Video 6' },
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

  const handleSteeringClick = (link) => {
    const steeringIcon = document.querySelector('.steering-icon');
    steeringIcon.classList.add('push-effect');
  
    // Navigate to the linked page after the animation
    setTimeout(() => {
      window.location.href = link;
    }, 1000); // Delay to allow the push animation to complete
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
    <p className="banner-title" style={{fontSize:'3.0rem'}}>
  Welcome<br />
  to<br />
  Magnum Wonderplast (P) Ltd
</p>

      <p className="banner-subtitle">We Mould Your Ideas</p>
      <div
        className="steering-icon"
        onClick={() => handleSteeringClick('/about-us')}
      >
        <img
          src="/stt.png"
          alt="Car Steering"
          className="steering-image"
        />
      </div>
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

    <OurProducts />


    <ClientsSection />

    <a
        href="https://wa.me/919811061756"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={40} />
      </a>
    

    </div>
  );
};

export default HomePage;
