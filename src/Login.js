import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

    //http://localhost:8080/users/signin
    axios
      .post('https://jsonplaceholder.typicode.com/use', {
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
    <div className="container">
      <div className="row">
        <form
          onSubmit={handleSubmit}
          className="full-form col-sm-6 col-10 offset-sm-3 offset-1  px-md-5 py-5"
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
            <button className="btn btn-primary col-4 offset-1">Login</button>
            <p className="col-7 mt-1">
              Not yet a member? <Link to="/">Sign Up</Link>
            </p>
          </div>
        </form>
      </div>
      {isLoggedIn && (
        <div className="text-center h4 mt-3 text-light">
          Logged in successfully
        </div>
      )}
      {error !== '' && (
        <div className="text-center h4 mt-3 text-light">
          Couldn't Sign you in
        </div>
      )}
    </div>
  );
};

export default Login;
