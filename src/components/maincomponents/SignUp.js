import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import Popup from '../minorcomponents/Popup';

const SignUp = () => {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };
  //http://localhost:8080/users/signup
  // http://aliveserver-env.eba-g2b3jpif.eu-west-1.elasticbeanstalk.com:5000/users/signup
  async function handleSubmit(event) {
    event.preventDefault();
    let data;
    let error;
    try {
      const response = await fetch('http://localhost:8080/users/signup', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
      });
      //get different responses based on status
      switch (response.status) {
        case 200:
        case 201:
          data = await response.json();
          break;
        case 400:
        case 403:
        case 422:
          error = response.message;
          break;
      }
    } catch (err) {
      console.log(err);
    }
  }

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
            <p className="col-12 mt-3 mb-1 text-center">Already a member?</p>
          </form>
        </div>
        {isSignedUp && (
          <Popup
            text={<p>Signed Up successfully</p>}
            btn_text={<Link to="/login">Login</Link>}
          />
        )}
      </div>
    </div>
  );
};

export default SignUp;
