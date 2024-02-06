import React, { useState } from 'react';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import './style.css';

const CustomNavbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log('Search Query:', searchQuery);
    // last.fm API logic needed here
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





// const Navbar = () => {
//   return (
//     <div className="navbar-container">
//       <span className="brand">eventify</span>
//       {/* need to add search box component here */}
//     </div>
//   );
// };

// export default Navbar;