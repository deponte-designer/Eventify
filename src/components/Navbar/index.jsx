import React, { useState } from 'react';
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";


const CustomNavbar = ({ onSearchSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log('Search Query:', searchQuery);
    onSearchSubmit(searchQuery);
  };

  return (
    // <Navbar bg="dark" variant="dark" fixed="top">
    //   <Navbar.Brand href="#home" className="mr-2">eventify</Navbar.Brand>
    //   <Form onSubmit={handleSearchSubmit} className="d-flex ml-auto align-items-center">
    //     <FormControl
    //       type="text"
    //       placeholder="Search artist..."
    //       className="mr-2"
    //       value={searchQuery}
    //       onChange={handleSearchChange}
    //     />
    //     <Button variant="outline-success" type="submit">
    //       Search
    //     </Button>
    //   </Form>
    // </Navbar>


    <Navbar className="bg-body-tertiary" expand="lg" bg="dark" data-bs-theme="dark" fixed="top">
      <Container>
        <Navbar.Brand className="" href="#">Eventify</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/" end>Home</NavLink>
            <NavLink className="nav-link" to="/contact" end>Contact</NavLink>
            <Form onSubmit={handleSearchSubmit} className="d-flex ">
              <Form.Control
                type="search"
                placeholder="Search artist..."
                className="me-2"
                aria-label="Search"
                value={searchQuery}
                onChange={handleSearchChange}
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
