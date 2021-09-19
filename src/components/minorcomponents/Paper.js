import React from 'react';

const Paper = (props) => {
  return (
    <div className="bg-white min-vh-100 mt-3 mx-md-3 border border-5 border-gray px-3 py-3">
      {props.children}
    </div>
  );
};

export default Paper;
