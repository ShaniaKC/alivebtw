import React, { useState, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Popup from '../minorcomponents/Popup';

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // http://localhost:8080/users/signin
    // http://aliveserver-env.eba-g2b3jpif.eu-west-1.elasticbeanstalk.com:5000/users/signin
    axios
      .post(`http://localhost:8080/users/signin`, null, {
        params: {
          password: formData.password,
          username: formData.username,
        },
      })
      .then((res) => {
        setIsLoggedIn(true);
        setToken(res.data);
      })
      .catch((err) => {
        //Handle error
      });
  };

  return (
    <div className="container-fluid">
      <Navbar />
      <div className="container">
        <div className="row">
          <form
            onSubmit={handleSubmit}
            className="full-form col-md-5 col-10 mt-4 mx-auto px-md-5 py-5 px-3"
          >
            <h1 className="text-center">Login</h1>
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
            <button className="btn btn-primary col-12 py-3 mt-1">Login</button>
            <p className="col-12 mt-3 mb-1 text-center">
              Not yet a member? <Link to="/signup">SignUp</Link>
            </p>
          </form>
          <img
            src="https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
            height="480px"
            className="col-md-6 img-responsive mt-4"
          />
        </div>
        {isLoggedIn && <Popup text="Logged in successfully" />}

        {/* {error !== '' && (
        <div className="text-center h4 mt-3 text-light">
          Couldn't Sign you in
        </div>
      )} */}
      </div>
    </div>
  );
};

export default Login;
