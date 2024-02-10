import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
    const footerStyle ={
        backgroundColor: "#2596be",
        color: "#ffffff",
        textAlign: "center",
        paddingTop: "15px",
    }
    const footerIcon ={
        color: "#000000",
        fontSize: "50px",

    }
    return (
      <div className="footer-container fixed-bottom" style={footerStyle}>
        
        
        <p className="m-0">&copy; {new Date().getFullYear()} Moment12. All rights reserved.</p>
      
        <div style={footerIcon} > 
        <FaGithub className="me-2" />
        <FaFacebook className="me-2" />
        <FaInstagramSquare />
        </div>
      </div>
    );
  };



export default Footer;