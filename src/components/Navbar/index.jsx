import React, { useState } from 'react';
import { Navbar, Nav, Container, Form, Button, Image } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import NavLogo from '../../assets/images/eventify-logo-nav.svg';
import LogoNav from '../LogoNav';

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
      <Container className="navbar-container">
        <Navbar.Brand className="navbar-logo" href="/">
          <LogoNav />
        </Navbar.Brand>

        <Form id="search-form" onSubmit={handleSearchSubmit} className="form nav-search-form d-flex d-lg-none">
          <Form.Control
            id="searchField"
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
            id="searchField"
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

