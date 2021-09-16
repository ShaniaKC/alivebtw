import React from 'react';

import Navbar from './Navbar';

const Home = () => {
  return (
    <div className="container-fluid">
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 text-left mt-5">
            <h1 className="h1 mt-5">Alive Botswana</h1>
            <p className="lead">Changing the future of health care</p>
          </div>
          <img
            src="https://images.pexels.com/photos/5452221/pexels-photo-5452221.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
            className="img-responsive col-md-6 mt-5"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
