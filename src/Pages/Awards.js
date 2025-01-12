import React from 'react';
import { useEffect } from 'react';
import './Awards.css';

const awardsData = [
  { id: 1, imgSrc: '/award1.png', title: 'Recognition from JTEKT for Indigenization 2023-24' },
  { id: 2, imgSrc: '/award2.png', title: 'Recognition from IFB for Best Supplier 2022-23' },
  { id: 3, imgSrc: '/award3.png', title: 'Recognition from IFB for Best Supplier In All Aspects 2022-2023' },
  { id: 4, imgSrc: '/award4.jpg', title: 'Recognition from JTEKT for Quality 2014' },
  { id: 5, imgSrc: '/award5.jpg', title: 'Recognition from JTEKTfor Delivery 2018-19' },
  { id: 6, imgSrc: '/award6.jpg', title: 'Recognition from JTEKT for Indigenization 2017-18' },
  { id: 7, imgSrc: '/award7.jpg', title: 'Recognition from SONA for Cost Competence' },
  { id: 8, imgSrc: '/IFBB.jpg', title: 'Recognition from IFB Connect' },
  { id: 9, imgSrc: '/global.jpg', title: 'Participation in the Global Summit 2012' },
  { id: 10, imgSrc: '/mace.jpg', title: 'Recognition from MACE for Green Vendor' }
];

const AwardsRecognition = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="awards-container">
      <h1 className="page-heading">Our Achievements</h1>
      <div className="awards-grid">
        {awardsData.map(award => (
          <div key={award.id} className="award-card">
            <img src={award.imgSrc} alt={award.title} className="award-image" />
            <h3 className="award-title">{award.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardsRecognition;
