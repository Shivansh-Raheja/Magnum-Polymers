import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import Hamburger and Close icons
import { useLocation } from 'react-router-dom';
import './Header.css'; // Custom styles if needed

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle the menu
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Navbar expand="lg" className="navbar-custom" sticky="top">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="logo">
  <img
    src="/magnum.png" // Path to your logo image
    alt="Polymers Logo"
    className="animate__animated animate__fadeIn"
    style={{ width: '40px', height: 'auto' }} // Adjust the size of the logo as needed
  />
</Navbar.Brand>


        {/* Hamburger Icon (on smaller screens) */}
        <Navbar.Toggle 
          aria-controls="responsive-navbar-nav" 
          onClick={toggleMenu}
          className="navbar-toggler-custom"
        >
          <FaBars style={{color:"white"}}/>
        </Navbar.Toggle>

        {/* Navigation Links */}
        <Navbar.Collapse id="responsive-navbar-nav" className={menuOpen ? 'show animate__animated animate__fadeInUp' : 'animate__animated animate__fadeOut'}>
          <Nav className="ml-auto navbar-nav-center">
            <Nav.Link as={Link} to="/" className={location.pathname === '/' ? 'active' : ''}>
              HOME
            </Nav.Link>
            <Nav.Link as={Link} to="/about-us" className={location.pathname === '/about-us' ? 'active' : ''}>
              ABOUT US
            </Nav.Link>
            <Nav.Link as={Link} to="/" className={location.pathname === '/products' ? 'active' : ''}>
              PRODUCTS
            </Nav.Link>
            <Nav.Link as={Link} to="/" className={location.pathname === '/capabilities' ? 'active' : ''}>
              CAPABILITIES
            </Nav.Link>
            <Nav.Link as={Link} to="/" className={location.pathname === '/infrastructure' ? 'active' : ''}>
              INFRASTRUCTURE
            </Nav.Link>
            <Nav.Link as={Link} to="/" className={location.pathname === '/certificates' ? 'active' : ''}>
              CERTIFICATES
            </Nav.Link>
            <Nav.Link as={Link} to="/" className={location.pathname === '/contact' ? 'active' : ''}>
              CONTACT US
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
