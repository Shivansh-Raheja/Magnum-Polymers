import React, { useState } from 'react';
import './Training.css';
import { useEffect } from 'react';

const trainingData = {
  healthAwareness: {
    images: ['/health1.jpeg', '/health2.jpeg', '/health3.jpeg'],
    description: 'Health Awareness and Emergency Training focuses on equipping employees with knowledge on handling emergencies and maintaining health standards.',
  },
  managementTraining: {
    images: ['/management1.jpeg', '/management2.jpeg', '/management3.jpeg', '/management4.jpeg', '/management5.jpeg', '/management6.jpeg'],
    description: 'P.O.R.S.E and Management Training aims to enhance leadership skills, project management capabilities, and strategic thinking.',
  }
};

const Training = () => {
    useEffect(() => {
            window.scrollTo(0, 0);
          }, []);
  const [selectedTraining, setSelectedTraining] = useState('healthAwareness');

  const handleTrainingChange = (type) => {
    setSelectedTraining(type);
  };

  const { images, description } = trainingData[selectedTraining];

  return (
    <div className="training-container">
      <h1 className="title">Trainings Provided By Us</h1>
      <div className="training-buttons">
        <button
          className={`training-button ${selectedTraining === 'healthAwareness' ? 'active' : ''}`}
          onClick={() => handleTrainingChange('healthAwareness')}
        >
          Health Awareness and Emergency Training
        </button>
        <button
          className={`training-button ${selectedTraining === 'managementTraining' ? 'active' : ''}`}
          onClick={() => handleTrainingChange('managementTraining')}
        >
          P.O.R.S.E and Management Training
        </button>
      </div>

      <div className="training-gallery">
        {images.map((image, index) => (
          <div key={index} className="training-image-container">
            <img src={image} alt={`Training ${index + 1}`} className="training-image" />
          </div>
        ))}
      </div>
      
      <p className="training-description">{description}</p>
    </div>
  );
};

export default Training;
