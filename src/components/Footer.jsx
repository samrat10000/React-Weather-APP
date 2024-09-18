import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <div className='Footer'>
      <div className="footertext">
        Get In Touch
      </div>

      <div className="socials">
        <div className="insta">
          <a href="https://www.instagram.com/samrat___10?igsh=bzYydHE2Z3JoazBk" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
        <div className="linkedin">
          <a href="https://www.linkedin.com/in/samrat-dutta-6a017524a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <div className="github">
          <a href="https://github.com/samrat10000" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
        <div className="youtube">
          <a href="https://youtube.com/@samrat___10?si=lm8B3iRLCOzLgXKo" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>

      <div className="copyright">
        &copy; {new Date().getFullYear()} Samrat Dutta. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
