import React, { useEffect, useState, createContext } from 'react';

export const UserContext = createContext();

export const UserProvider = () => {
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
    //ttp://aliveserver-env.eba-g2b3jpif.eu-west-1.elasticbeanstalk.com:5000/users/signin
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

  return <div />;
};
