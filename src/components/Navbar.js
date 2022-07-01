import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  console.log('Navbar');
  return (
    <nav>
      <h1>Book store</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="categories">Categories</Link>
      </div>
    </nav>
  );
};
export default Navbar;
