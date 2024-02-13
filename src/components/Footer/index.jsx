import React from 'react';
import { FaGithub } from "react-icons/fa";
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {

  return (
    <div className="footer-custom fixed-bottom pb-3 pt-3">
      <Container className="">
        <Row>
          <Col md={12} className="mb-2">
            <a className="ftr-link" href="https://github.com/deponte-designer" target="_blank" rel="noopener noreferrer external">
              <FaGithub className="me-2 ftr-icon" />
            </a>
            <a className="ftr-link" href="https://github.com/jsskilton" target="_blank" rel="noopener noreferrer external">
              <FaGithub className="me-2 ftr-icon" />
            </a>
            <a className="ftr-link" href="https://github.com/Meisterstu" target="_blank" rel="noopener noreferrer external">
              <FaGithub className="me-2 ftr-icon" />
            </a>
            <a className="ftr-link" href="https://github.com/abbysod" target="_blank" rel="noopener noreferrer external">
              <FaGithub className="me-2 ftr-icon" />
            </a>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <p className="m-0" style={{ fontSize: '14px' }}>&copy; 2023 - {new Date().getFullYear()} Developed by <span className="bold">Moment 12</span>. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;