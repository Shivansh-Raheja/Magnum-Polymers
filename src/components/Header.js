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
          <img
            src="/magnum.png"
            alt="Polymers Logo"
            className="animate__animated animate__fadeIn"
            style={{ width: '40px', height: 'auto' }}
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
            <Nav.Link as={Link} to="/about-us" className={location.pathname === '/about-us' ? 'active' : ''}>
              ABOUT US
            </Nav.Link>
            <NavDropdown title="PRODUCTS" id="products-dropdown" className={location.pathname.startsWith('/products') ? 'active' : ''}>
              <NavDropdown.Item as={Link} to="/products">VIEW ALL PRODUCTS</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/products/steering-components">MOTOR VEHICLE & COMMERCIAL VEHICLES STEERING COMPONENTS</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/products/hub-components">MOTOR VEHICLE HUB COMPONENTS</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/products/hvac-ducts">MOTOR & COMMERCIAL VEHICLE HVAC DUCTS ASDYSE FILTER ELEMENTS</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/products/iv-battery-cases">IV BATTERY CASES</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/products/water-management-fittings">HIGH PURITY WATER MANAGEMENT FITTINGS</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/products/two-wheeler-parts">TWO WHEELER PARTS</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/capabilities" className={location.pathname === '/capabilities' ? 'active' : ''}>
              CAPABILITIES
            </Nav.Link>
            <NavDropdown title="INFRASTRUCTURE" id="infrastructure-dropdown" className={location.pathname.startsWith('/infrastructure') ? 'active' : ''}>
              <NavDropdown.Item as={Link} to="/infrastructure/machine_capacity">VIEW INFRASTRUCTURE</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/plant-photos-and-videos">PLANTS PHOTOS</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/infrastructure/machine_capacity">LIST OF MACHINES AND CAPABILITIES</NavDropdown.Item>
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
