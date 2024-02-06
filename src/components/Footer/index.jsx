import React from 'react';
import './style.css'; 

const Footer = () => {
    return (
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Moment12. All rights reserved.</p>
      </div>
    );
  };



export default Footer;