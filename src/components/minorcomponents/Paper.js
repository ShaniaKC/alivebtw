import React from 'react';

const Paper = (props) => {
  return (
    <div className="bg-white min-vh-100 mt-3 mx-md-3 border border-5 border-gray px-5 py-5">
      {props.children}
    </div>
  );
};

export default Paper;
