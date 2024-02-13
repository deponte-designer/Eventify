import React, { useState } from 'react';
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook


let CustomNavbar = ({ onSearchSubmit }) => {
  let [searchQuery, setSearchQuery] = useState('');
  let navigate = useNavigate(); // Initialize navigate function

  let handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  let handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log('Search Query:', searchQuery);
    onSearchSubmit(searchQuery);
    navigate('/artists');
  };

  return (
    <Navbar className="bg-body-tertiary mb-3" expand="lg" bg="dark" data-bs-theme="dark" fixed="top">
      <Container>
        <Navbar.Brand className="" href="#">Eventify</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <NavLink className="nav-link" to="/" end>Home</NavLink>
            <NavLink className="nav-link" to="/artists" end>Artists</NavLink>
            <NavLink className="nav-link" to="/contact" end>Contact</NavLink>
            <Form onSubmit={handleSearchSubmit} className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search artist..."
                className="me-2"
                aria-label="Search"
                value={searchQuery}
                // onChange={handleSearchChange}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button variant="outline-success" type="submit">Search</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
};

export default CustomNavbar;
