import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

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
    //http://localhost:8080/users/signup
    axios
      .post('https://jsonplaceholder.typicode.com/users', {
        username: formData.username,
        password: formData.password,
        email: formData.email
      })
      .then(res => {
        setIsSignedUp(true);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <form
          onSubmit={handleSubmit}
          className="full-form col-sm-6 col-10 offset-sm-3 offset-1 px-md-5 py-5"
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
              className="form-control"
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
              className="form-control"
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
              className="form-control"
              required
            />
          </div>
          <div className="row">
            <button className="btn btn-primary col-4 offset-1">SignUp</button>
            <p className="col-6 mt-1">
              Already a member? <Link to="/login">Login</Link>
            </p>
          </div>
        </form>
      </div>
      {isSignedUp && (
        <div className="text-center h4 mt-3 text-light">
          Signed up successfully, Proceed to{' '}
          <button className="btn">
            <Link to="/login">Login</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default SignUp;
