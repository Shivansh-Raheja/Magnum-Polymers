import React from 'react';
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

const PlantsPhotos = () => {
  return (
    <div className="plants-container">
      <h1 className="title">Our Plants-:Photos and Videos</h1>
      
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
    </div>
  );
};

export default PlantsPhotos;
