import React, { useState } from 'react';
import { Navbar, Nav, Container, Form, Button, Image } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import NavLogo from '../../assets/images/eventify-logo-nav.svg';


let CustomNavbar = ({ onSearchSubmit }) => {
  let [searchQuery, setSearchQuery] = useState('');
  let navigate = useNavigate(); // Initialize navigate function

  let handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  let handleSearchSubmit = (event) => {
    event.preventDefault();
    // console.log('Search Query:', searchQuery);
    onSearchSubmit(searchQuery);
    navigate('/artists');
  };

  return (
    <Navbar className="bg-body-tertiary-opacity nav-opacity mb-3" expand="lg" data-bs-theme="dark" fixed="top">
      <Container>

        {/* <Navbar.Brand className="" href="#">Eventify</Navbar.Brand> */}

        <Navbar.Brand className="" href="#">
          <Image
            className="d-inline-block align-top"
            src={NavLogo}
            alt="Eventify logo"
            height="35px"
          />
        </Navbar.Brand>

        {/* <Container>
          <Navbar.Brand href="#home">
            <Image
              src={NavLogo}
              
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container> */}


        <Form onSubmit={handleSearchSubmit} className="d-flex d-lg-none">
          <Form.Control
            type="search"
            placeholder="Search by Artist..."
            className="me-2"
            aria-label="Search"
            value={searchQuery}
            // onChange={handleSearchChange}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button variant="outline-success" className="btn-outline-purple" type="submit">Search</Button>
        </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/" end>Home</NavLink>
            <NavLink className="nav-link" to="/artists" end>Artists</NavLink>
            <NavLink className="nav-link" to="/contact" end>Contact</NavLink>

          </Nav>
        </Navbar.Collapse>
        <Form onSubmit={handleSearchSubmit} className="d-lg-flex d-none">
          <Form.Control
            type="search"
            placeholder="Search by Artist..."
            className="me-2"
            aria-label="Search"
            value={searchQuery}
            // onChange={handleSearchChange}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button variant="outline-success" className="btn-outline-purple" type="submit">Search</Button>
        </Form>

      </Container>
    </Navbar>

  );
};

export default CustomNavbar;

