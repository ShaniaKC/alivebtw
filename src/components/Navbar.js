import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="row bg-white">
      <div className="col-md-4 row">
        <h5 className=" text-grey col-md-6 mt-2 px-2">ALIVE BOTSWANA</h5>
        <nav className="navbar col-md-6">
          <Link to="/" className="nav-item  active">
            Home
          </Link>
          <Link to="/signup" className="nav-item ">
            Sign Up
          </Link>
          <Link to="/login" className="nav-item ">
            Login
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
