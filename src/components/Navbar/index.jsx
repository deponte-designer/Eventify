import React, { useState } from 'react';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import './style.css';
import {runScript} from '../../utils/Api';

const CustomNavbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log('Search Query:', searchQuery);
    // This is the updated artistName that is triggered by the search box
    runScript(searchQuery); 
  };

  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Navbar.Brand href="#home" className="mr-2">eventify</Navbar.Brand>
      <Form onSubmit={handleSearchSubmit} className="d-flex ml-auto align-items-center">
        <FormControl
          type="text"
          placeholder="Search artist..."
          className="mr-2"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <Button variant="outline-success" type="submit">
          Search
        </Button>
      </Form>
    </Navbar>
  );
};

export default CustomNavbar;
