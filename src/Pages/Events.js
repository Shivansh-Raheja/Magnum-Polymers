import React from 'react';
import './Events.css';
import { useEffect } from 'react';

const Events = () => {
    useEffect(() => {
              window.scrollTo(0, 0);
            }, []);
  return (
    <div className="events-container">
      <h1 className="events-heading">We Make Every Event Special</h1>

      {/* Image Grid Section */}
      <div className="events-image-grid">
        <img src="/E1.jpeg" alt="Event 1" className="event-image" />
        <img src="/E2.jpeg" alt="Event 2" className="event-image" />
        <img src="/E3.jpeg" alt="Event 3" className="event-image" />
        <img src="/E4.jpeg" alt="Event 4" className="event-image" />
        <img src="/E5.jpeg" alt="Event 5" className="event-image" />
        <img src="/E6.jpeg" alt="Event 6" className="event-image" />
      </div>

      {/* Paragraph Section */}
      <div className="events-description">
        <p>
          At our core, we believe that every event should be an unforgettable experience. We meticulously plan each event, carefully curating every aspect to ensure it resonates with our audience. Whether it’s a grand corporate gathering or a more intimate celebration, we pay attention to every detail to create a seamless and engaging atmosphere. Our team works tirelessly to ensure everything runs smoothly, from the planning phase to execution, leaving our guests with lasting memories.
        </p>
      </div>

      {/* 3D Model Images Section */}
      <div className="events-model-grid">
        <img src="/3D.jpeg" alt="3D Model 1" className="model-image" />
        <img src="/3DD.jpeg" alt="3D Model 2" className="model-image" />
      </div>

      {/* Final Section with Video */}
      <div className="events-final-section">
        <h2>See You at Our Next Event: BHARAT MOBILITY GLOBAL EXPO 2025</h2>
        <div className="events-video-text">
          <div className="video-containerr">
            <video controls autoPlay muted className="event-video">
              <source src="/VID-20250110-WA0009.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="video-description">
            <p>
              Join us for GLOBAL-EXPO 2025 , Yashbhoomi IICC, Dwarka,New Delhi from 18th to 21st of January - 2025 ,Hall no. 04 | Stall No. T-22, an extraordinary event that showcases our latest innovations, products, and technology. This event is set to bring together industry leaders, experts, and enthusiasts for an immersive experience. From thought-provoking keynotes to hands-on demonstrations, Index-Plus will offer something for everyone.
            </p>
            <p>
              Our events are carefully designed to leave a lasting impression. With engaging workshops, networking opportunities, and high-impact presentations, we aim to inspire, educate, and entertain. Be a part of the excitement and see firsthand how we are shaping the future of our industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
