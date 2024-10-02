import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, Form, InputGroup } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  const [language, setLanguage] = useState('en'); // Default language: English
  const [fontSize, setFontSize] = useState(16);  // Default font size in px

  // Language toggle function
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  // Font size increase function
  const increaseFontSize = () => {
    setFontSize(prevSize => prevSize + 2);
    document.body.style.fontSize = `${fontSize + 2}px`;
  };

  // Font size decrease function
  const decreaseFontSize = () => {
    if (fontSize > 12) {
      setFontSize(prevSize => prevSize - 2);
      document.body.style.fontSize = `${fontSize - 2}px`;
    }
  };

  return (
    <header>
      {/* Top Row: Feedback, SSC Old Website, Skip to Main Content */}
      <div className="d-flex justify-content-between align-items-center p-2" style={{ backgroundColor: '##441015', fontSize: '14px' }}>
        <div>
          <a href="https://ssc.gov.in/home/feedback" className="me-3" >Feedback </a>
          <a href="https://ssc.nic.in/">SSC Old Website</a>
        </div>
        <div className="d-flex align-items-center">
          <a href="NoticBoard.jsx" className="me-3">Skip to Main Content</a>
          <a href="#english" className="me-3" onClick={() => handleLanguageChange('en')}>English</a>
          <a href="#hindi" className="me-3" onClick={() => handleLanguageChange('hi')}>हिन्दी</a>
          <span className="me-3">
            <a href="#increase-font" onClick={increaseFontSize}>+A</a>
            <a href="#decrease-font" onClick={decreaseFontSize}>-A</a>
          </span>
        </div>
      </div>

      {/* Logo, Title, and Search */}
      <Navbar bg="light" expand="lg" className="py-2">
        <Container fluid className="d-flex justify-content-between align-items-center">
          {/* Left Section - Logo and Title */}
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <img
              src="/src/assets/ssc-logo.png"
              alt="SSC Logo"
              style={{ width: '40px', marginRight: '10px' }}
            />
            <div>
              <h6 className="mb-0" style={{ fontSize: '16px' }}>
                {language === 'en' ? 'Government of India' : 'भारत सरकार'}
              </h6>
              <h5 className="mb-0" style={{ fontSize: '18px', fontWeight: 'bold' }}>
                {language === 'en' ? 'Staff Selection Commission' : 'कर्मचारी चयन आयोग'}
              </h5>
            </div>
          </Navbar.Brand>

          {/* Right Section - Search and Login/Register */}
          <div className="d-flex align-items-center">
            <Form className="me-3">
              <InputGroup>
                <Form.Control type="text" placeholder="Search" style={{ borderRadius: '22px', marginRight: '15px' }} />
                <Button variant="outline-secondary" style={{ borderRadius: '20px' }}>
                  <i className="bi bi-search"></i>
                </Button>
              </InputGroup>
            </Form>
            <Button variant="outline-danger" style={{ borderRadius: '20px' }} className="me-3">
              <a href="href='https://ssc.gov.in/candidate-portal/one-time-registration/home-page"></a>
              Login or Register
            </Button>
            <img
              src="/src/assets/emblem.png"
              alt="India Emblem"
              style={{ width: '25px' }}
            />
          </div>
        </Container>
      </Navbar>

      {/* Navigation Links */}
      <Navbar bg="light" expand="lg" className="py-0">
        <Container>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto">
              <Nav.Link href="/" className="nav-link-spacing">Home</Nav.Link>
              <Nav.Link href="https://ssc.gov.in/chairman-message" className="nav-link-spacing">Chairman’s Message</Nav.Link>
              <Nav.Link href="https://ssc.gov.in/for-candidates/cgl-exam/1bv75ftehwsjy1f" className="nav-link-spacing">For Candidates</Nav.Link>
              <Nav.Link href="https://ssc.gov.in/tender" className="nav-link-spacing">Tender</Nav.Link>
              <Nav.Link href="https://ssc.gov.in/rti/proactive-disclosure" className="nav-link-spacing">RTI</Nav.Link>
              <Nav.Link href="https://ssc.gov.in/about-us/organisation-structure" className="nav-link-spacing">About Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* SSC Banner Image */}
      <div className="ssc-banner">
        <img 
          src="src/assets/SSC_Banners.webp"  // Update this with your image path
          alt="SSC Banner" 
          className="ssc-banner-img"
        />
      </div>

      {/* Marquee Section */}
      <div className="marquee-container">
        <marquee 
          className="marquee-text" 
          behavior="scroll" 
          direction="left" 
          scrollamount="5" 
          onmouseover="this.stop();" 
          onmouseout="this.start();"
        >
          Candidates are advised to upload their signature with dimensions of 6.0 cm in width and 2.0 cm in height.   For inquiries or support, candidates can email: helpdesk-ssc@ssc.nic.in    Toll-Free Candidate Helpline No.: 1800-309-3063 - Languages Supported: English and Hindi
        </marquee>
      </div>
    </header>
  );
};

export default Header;
