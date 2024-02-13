import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#2596be",
    color: "#ffffff",
    textAlign: "center",
    padding: "15px 0",
    width: "100%",
    // position: "relative",
    // height: "100vh",
    bottom: "0",
  }

  const footerIcon = {
    color: "#000000",
    fontSize: "50px",
    display: "flex",
    justifyContent: "center",
    // position: 'absolute',
    // bottom: "0",
  }
  return (
    <div className="footer-custom fixed-bottom" style={footerStyle}>


      <p className="m-0">&copy; {new Date().getFullYear()} Moment12. All rights reserved.</p>

      <div style={footerIcon}>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="me-2" style={{ color: "#000000" }} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="me-2" style={{ color: "#000000" }} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagramSquare className="me-2" style={{ color: "#000000" }} />
        </a>
      </div>
    </div>
  );
};


export default Footer;