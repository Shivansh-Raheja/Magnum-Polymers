import React from 'react';
import { useEffect } from 'react';
import './PlantsPhotosVideos.css'; // Custom CSS for styling

const plants = [
  {
    name: "Plant 1",
    image: "/Plant1.png",
    address: "Plot No. 14, HSIDC Industrial Estate, Sector – 59, Faridabad Haryana (INDIA)."
  },
  {
    name: "Plant 2",
    image: "/Plant2.jpg",
    address: "Plot No. 25. PRAGATI VIHAR Industrial Estate, Sector – 59, Faridabad Haryana (INDIA)."
  },
  {
    name: "Plant 3",
    image: "/Plant3.png",
    address: "Plot No. 30. PRAGATI VIHAR Industrial Estate, Sector – 59, Faridabad Haryana (INDIA)."
  },
  // Add more plant objects as needed
];

const upcomingProject = {
  name: "Plant 4",
  image: "/plant4.png", // Replace with your upcoming project image
  address: "Deeghot – Palwal, Haryana (INDIA), Plot Size : 6.5 Acres (Covered Area : 1 Lakhs Sq. Feet)",
  disclaimer: "Please note that the image above is for illustrative purposes only. We do not own the rights to this image, and it is used here solely to represent the conceptualization of our upcoming project."
};

const PlantsPhotos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="plants-container">
      <h1 className="title">Our Plants Details</h1>
      
      <div className="plants-gallery">
        {plants.map((plant, index) => (
          <div key={index} className="plant-item">
            <div className="plant-image-container">
              <img src={plant.image} alt={plant.name} className="plant-image" />
            </div>
            <div className="plant-info">
              <h2>{plant.name}</h2>
              <p>{plant.address}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Our Upcoming Project Section */}
      <div className="upcoming-project-section">
        <h2 className="upcoming-title">Our Upcoming Project</h2>
        <div className="upcoming-project">
          <div className="upcoming-image-container">
            <img src={upcomingProject.image} alt={upcomingProject.name} className="upcoming-image" />
          </div>
          <div className="upcoming-info">
            <h3>{upcomingProject.name}</h3>
            <p><b>Address-: </b>{upcomingProject.address}</p>
            <p className="disclaimer"><b>Disclaimer-: </b>{upcomingProject.disclaimer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PlantsPhotos;
