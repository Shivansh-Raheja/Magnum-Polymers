import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home';
import AboutPage from './Pages/AboutPage';
import Products from './Pages/Products';
import OurMachiningCapacity from './Pages/OurMachiningCapacity';
import PlantsPhotosVideos from './Pages/PlantsPhotosVideos';
import Machines from './Pages/Machinelist';
import Certifications from './Pages/Certifications';
import MissionVisionAndQualityPolicy from './Pages/Mission';
import AwardsRecognition from './Pages/Awards';

import './App.css'; // Ensure you have your styling
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Include the Header component */}
        <Header />

        {/* Define routes for different pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add routes for other sections like About Us, Products, etc. */}
        </Routes>
        <Routes>
          <Route path="/about-us" element={<AboutPage />} />
          {/* Add routes for other sections like About Us, Products, etc. */}
        </Routes>
        <Routes>
          <Route path="/products" element={<Products />} />
          {/* Add routes for other sections like About Us, Products, etc. */}
        </Routes>
        <Routes>
          <Route path="/capabilities" element={<OurMachiningCapacity />} />
          {/* Add routes for other sections like About Us, Products, etc. */}
        </Routes>
        <Routes>
          <Route path="/plant-photos-and-videos" element={<PlantsPhotosVideos />} />
          {/* Add routes for other sections like About Us, Products, etc. */}
        </Routes>
        <Routes>
          <Route path="/infrastructure/machine_capacity" element={<Machines />} />
          {/* Add routes for other sections like About Us, Products, etc. */}
        </Routes>
        <Routes>
          <Route path="/about-us/certifications" element={<Certifications />} />
          {/* Add routes for other sections like About Us, Products, etc. */}
        </Routes>
        <Routes>
          <Route path="/about-us/mission-vision" element={<MissionVisionAndQualityPolicy />} />
          {/* Add routes for other sections like About Us, Products, etc. */}
        </Routes>
        <Routes>
          <Route path="/about-us/awards-recognition" element={<AwardsRecognition />} />
          {/* Add routes for other sections like About Us, Products, etc. */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
