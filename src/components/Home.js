import React from 'react';

import Navbar from './Navbar';

const Home = () => {
  return (
    <div className="container-fluid">
      <Navbar />
      <div className="container mt-5">
        <h1 className="display-5 text-white">Alive Botswana</h1>
      </div>
    </div>
  );
};

export default Home;
