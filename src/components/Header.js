import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Navbar expand="lg" className="navbar-custom" sticky="top">
      <Container>
      <Navbar.Brand as={Link} to="/" className="logo">
  <video
    src="/logovi.mp4" // Path to your video file
    alt="Polymers Logo"
    className="animate__animated animate__fadeIn"
    style={{ width: '150px', height: '100px' }}
    autoPlay
    loop
    muted
  />
</Navbar.Brand>


        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={toggleMenu}
          className="navbar-toggler-custom"
        >
          <FaBars style={{ color: "white" }} />
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav" className={menuOpen ? 'show animate__animated animate__fadeInUp' : 'animate__animated animate__fadeOut'}>
          <Nav className="ml-auto navbar-nav-center">
            <Nav.Link as={Link} to="/" className={location.pathname === '/' ? 'active' : ''}>
              HOME
            </Nav.Link>
            <NavDropdown title="ABOUT US" id="about-us-dropdown" className={location.pathname === '/about-us' || location.pathname.startsWith('/about-us') ? 'active' : ''}>
              <NavDropdown.Item as={Link} to="/about-us">ABOUT US</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about-us/milestones">MILESTONES</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about-us/certifications">CERTIFICATIONS</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about-us/mission-vision">MISSION,VISION AND GOALS</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about-us/awards-recognition">AWARDS AND RECOGNITION</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="PRODUCTS" id="products-dropdown" className={location.pathname.startsWith('/products') ? 'active' : ''}>
              {/* <NavDropdown.Item as={Link} to="/products">VIEW ALL PRODUCTS</NavDropdown.Item> */}
              <NavDropdown.Item as={Link} to="/products/steering-components">MOTOR VEHICLE & COMMERCIAL VEHICLES STEERING COMPONENTS</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/products/hub-components">MOTOR VEHICLE HUB COMPONENTS</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/products/hvac-ducts">MOTOR & COMMERCIAL VEHICLE HV DUCT ASSEMBLY FILTER ELEMENTS</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/products/ev-battery-cases">EV BATTERY CASES</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/products/water-management-fittings">HIGH PURITY WATER MANAGEMENT PLUMBING FITTINGS</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/products/two-wheeler-parts">TWO WHEELER PARTS</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/products/passenger-sitting-system">PASSENGER SEATING SYSTEM</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/capabilities" className={location.pathname === '/capabilities' ? 'active' : ''}>
              CAPABILITIES
            </Nav.Link>
            <NavDropdown title="INFRASTRUCTURE" id="infrastructure-dropdown" className={location.pathname.startsWith('/infrastructure') ? 'active' : ''}>
              <NavDropdown.Item as={Link} to="/infrastructure/machine_capacity">VIEW INFRASTRUCTURE</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/plant-photos-and-videos">PLANTS PHOTOS</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/infrastructure/machine_capacity">LIST OF MACHINES AND CAPABILITIES</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="GOOD MANUFACTURING PRACTICES" id="gmp-dropdown" className={location.pathname.startsWith('/good-manufacturing-practices') ? 'active' : ''}>
              <NavDropdown.Item as={Link} to="/good-manufacturing-practices/events">EVENTS</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/good-manufacturing-practices/training">TRAINING</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/good-manufacturing-practices/health-safety">HEALTH AND SAFETY</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/good-manufacturing-practices/innovations-kaizens">INNOVATIONS AND KAIZENS</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
              CONTACT US
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
