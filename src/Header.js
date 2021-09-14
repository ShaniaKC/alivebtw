import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="container">
      <div className="row">
        <Link className="h5 col-md-4 offset-md-3 mt-3" to="/">
          SignUp
        </Link>
        <Link className="h5 col-md-4 offset-md-1 mt-3" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Header;
