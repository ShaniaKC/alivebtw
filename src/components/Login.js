import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(formData => ({ ...formData, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    axios
      .post('http://localhost:8080/users/signin', {
        username: formData.username,
        password: formData.password
      })
      .then(res => {
        setIsLoggedIn(true);
      })
      .catch(err => {
        //Handle error
      });
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <form
            onSubmit={handleSubmit}
            className="full-form col-md-6 col-10 offset-md-3 offset-1 mt-5 px-md-5 py-5"
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
        </div>
        {isLoggedIn && (
          <div className="text-center h4 mt-3 text-light">
            Logged in successfully
          </div>
        )}
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
