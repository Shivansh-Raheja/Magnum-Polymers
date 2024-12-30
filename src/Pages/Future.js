import React from 'react';
import './Future.css';

const Future = () => {
    return (
        <section className="future-plans-container">
            <div className="content-wrapper">
                <div className="future-plans-text">
                    <h2 className="future-plans-header">Future Plans</h2>
                    <ul className="future-plans-list">
                        <li className="future-plans-list-item">To Acquire 3-4 Acre Land Near By KMP Expressway, Palwal, Haryana.</li>
                        <li className="future-plans-list-item">To Build In-House Power Press Production Line For High Precision Sheet Metal Parts.</li>
                        <li className="future-plans-list-item">To Build In-House Powder Coating Production Line.</li>
                        <li className="future-plans-list-item">To Build In-House Brass Insert Nut Machining Production Line.</li>
                        <li className="future-plans-list-item">To Build In-House Precision CNC Turned Ferrous & Non-Ferrous Parts, So, As To Provide Complete Assemblies To End Customers.</li>
                    </ul>
                </div>
                <div className="future-plans-image-container">
                    <img 
                        src="https://magnumpolymers.com/wp-content/uploads/2022/06/industrial-injection-molding-press-machine-manufacture-conditioner-parts-using-polymers-1-min.jpg" 
                        alt="Future Plans Image" 
                        className="future-plans-image" 
                    />
                </div>
            </div>
        </section>
    );
};

export default Future;
