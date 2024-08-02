import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-about">
          <img src="https://marketplace.canva.com/EAFbIrf0844/1/0/1600w/canva-blue-minimal-idea-free-education-logo-tr8A9neMpOI.jpg" />
            <div className="paragraph">
          <p>
            Our school management system With user-friendly features and powerful analytics, you can easily monitor school activities and make informed decisions to support student success.
          </p>
          </div>
        </div>
        <div className="footer-social">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
        <div className="footer-contact">
          <h2>Contact Us</h2>
          <p>Email: aswinikar1998@gmail.com</p>
          <p>Phone: +91 6371036003</p>
          <p>Address: Bhubaneswar,Patia 751024</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 School Management System. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
