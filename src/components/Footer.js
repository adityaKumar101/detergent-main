import React from 'react';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Thrive and Prosper private limited</h3>
              <ul>
                {/* <li>Email: info@ghar.com</li> */}
                <li>Address: Kanpur</li>
                <li>Phone: +91 8368767269</li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Useful Links</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Career</a></li>
                <li><a href="#">Social Activities</a></li>

              </ul>
            </div>
            <div className="footer-section">

              <h3>Connect with Us</h3>
              <div className="social-links">
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
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