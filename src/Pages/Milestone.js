import React from 'react';
import './Milestone.css';
import { useEffect } from 'react';

const Milestones = () => {
     useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className="milestones-container">
      <h1 className="milestones-heading">Our Milestones</h1>
      <div className="milestones-content">
        <div className="milestones-text">
          <ul>
            <li>Partner Performance Award received from JTEKT India Group for “Support in Localisation” in FY 2023-24.</li>
            <li>2 Nos High Precision 2 Microns Accuracy HASS VMC added in tool room.</li>
            <li>ZNC High Precision EDM Machine Added in Tool Room.</li>
            <li>MITUTOYO CRYSTA APEX V574 Commissioned in July 2024.</li>
            <li>Vision Measuring Machine Hexagon make Accuracy 2 Microns Added to achieve more accuracy in part dimension inspection.</li>
            <li>100% Supplier Performance Rating for JTEKT for Period Apr’23 – Mar’24.</li>
            <li>Upcoming Manufacturing Unit in 6 Acres area in Palwal Near KMP Circle.</li>
          </ul>
        </div>
        <div className="milestones-image">
          <img src="/milestone.png" alt="Milestones" />
        </div>
      </div>
    </div>
  );
};

export default Milestones;
