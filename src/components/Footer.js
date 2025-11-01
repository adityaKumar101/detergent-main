import React from 'react';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Ghar</h3>
              <p>Premium detergent powder for brighter, cleaner clothes and a happier home.</p>
            </div>
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#how-to-use">How to Use</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Contact Us</h3>
              <ul>
                <li>Email: info@ghar.com</li>
                <li>Phone: (555) 123-4567</li>
                <li>Address: 123 Clean Street, Fresh City</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Thrive and Prosper private limited . All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;