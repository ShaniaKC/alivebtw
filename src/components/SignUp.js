import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import Navbar from './Navbar';

const SignUp = () => {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: ''
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(formData => ({ ...formData, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post(
        'http://aliveserver-env.eba-g2b3jpif.eu-west-1.elasticbeanstalk.com:5000/',
        null,
        {
          params: {
            username: formData.username,
            password: formData.password,
            email: formData.email
          }
        }
      )
      .then(res => {
        setIsSignedUp(true);
      });
  };

  return (
    <div className="container-fluid">
      <Navbar />
      <div className="container">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/5452255/pexels-photo-5452255.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt=""
            height="360px"
            className="col-md-6 img-responsive mt-4"
          />
          <form
            onSubmit={handleSubmit}
            className="full-form col-md-5 col-10 mt-4 mx-auto px-md-5 py-5 px-3"
          >
            <h1 className="text-center">Sign Up</h1>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                name="username"
                onChange={handleChange}
                value={formData.username}
                placeholder="John Doe Mann"
                className="form-control py-3"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={formData.email}
                placeholder="user@email.com"
                className="form-control py-3"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={formData.password}
                placeholder="*******"
                className="form-control py-3"
                required
              />
            </div>

            <button className="btn btn-primary col-12 py-3 mt-1">SignUp</button>
            <p className="col-12 mt-3 mb-1 text-center">
              Already a member? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
        {/* {isSignedUp && (
        <div className="text-center h4 mt-3 text-light">
          Signed up successfully, Proceed to{' '}
          <button className="btn">
            <Link to="/login">Login</Link>
          </button>
        </div>
      )} */}
      </div>
    </div>
  );
};

export default SignUp;
