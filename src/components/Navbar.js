import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="row bg-white">
      <img src="" alt="" className="col-md-6" />
      <nav className="navbar  col-md-6">
        <Link to="/" className="nav-item h5 active">
          Home
        </Link>
        <Link to="/signup" className="nav-item h5">
          Sign Up
        </Link>
        <Link to="/login" className="nav-item h5">
          Login
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
