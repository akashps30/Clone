import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import './Footer.css'; // Import custom CSS

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content container-fluid py-4">
        {/* Left Section */}
        <div className="footer-left">
          <div className="footer-logo">
            <img
              src="/src/assets/ssc-logo.png"
              alt="SSC Logo"
              className="footer-logo-image"
            />
            <div className="footer-logo-text">
              <h2>Staff Selection Commission</h2>
              <p>Public Disclosure of Scores and Other Details of Non-Recommended Willing Candidates</p>
            </div>
          </div>
        </div>

        {/* Center Section */}
        <div className="footer-center">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="https://dopt.gov.in/">DoPT</a></li>
            <li><a href="https://ssc.gov.in/home/archives">Archives</a></li>
            <li><a href="https://ssc.gov.in/home/disclaimer">Disclaimer</a></li>
            <li><a href="https://ssc.gov.in/home/sitemap">Sitemap</a></li>
            <li><a href="https://ssc.gov.in/home/help">Help</a></li>
            <li><a href="https://ssc.gov.in/home/copyright-policies">Website Policies</a></li>
            <li><a href="https://ssc.gov.in/home/web-information-manager">Web Information Manager</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <h3>Contact Us</h3>
          <p><i className="fas fa-map-marker-alt"></i> Block No-12, CGO Complex,<br />Lodhi Road New Delhi - 110003</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom py-2">
        <p>&copy; 2024 SSC. All Rights Reserved.</p>
        <p>Total Visitor Count: 147324305</p>
        <p className="last-updated">Last updated on Sep 9, 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
