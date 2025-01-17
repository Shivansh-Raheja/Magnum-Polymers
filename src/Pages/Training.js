import React, { useState, useEffect } from 'react';
import './Training.css';

const trainingData = {
  healthAwareness: {
    images: ['/health1.jpeg', '/health2.jpeg', '/health3.jpeg'],
    description: 'Health Awareness and Emergency Training focuses on equipping employees with knowledge on handling emergencies and maintaining health standards.',
  },
  managementTraining: {
    images: ['/management1.jpeg', '/management2.jpeg', '/management3.jpeg', '/management4.jpeg', '/management5.jpeg', '/management6.jpeg'],
    description: 'P.O.S.H and Management Training aims to enhance leadership skills, project management capabilities, and strategic thinking.',
  },
  dojoRoom: {
    images: ['/dojo1.jpeg', '/dojo2.png', '/dojo3.png', '/dojo5.png', '/dojo6.png'],
    description: 'The DOJO Room is designed to provide immersive, hands-on training experiences, focusing on practical skills development and team collaboration.',
  },
  fireSafety: {
    images: ['/fire1.jpg', '/fire2.jpg', '/fire3.PNG' , '/fire4.PNG', '/fire5.PNG' , '/fire6.PNG'], // Add paths to your fire safety images
    description: 'Fire Safety Training ensures employees are well-prepared to handle fire emergencies, understand evacuation protocols, and use fire-fighting equipment effectively.',
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
      <h1 className="title">Employee Trainings</h1>
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
          P.O.S.H and Management Training
        </button>
        <button
          className={`training-button ${selectedTraining === 'dojoRoom' ? 'active' : ''}`}
          onClick={() => handleTrainingChange('dojoRoom')}
        >
          DOJO Room
        </button>
        <button
          className={`training-button ${selectedTraining === 'fireSafety' ? 'active' : ''}`}
          onClick={() => handleTrainingChange('fireSafety')}
        >
          Fire Safety Training
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
