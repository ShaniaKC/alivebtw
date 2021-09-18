import React from 'react';

const Paper = (props) => {
  return (
    <div className="bg-white min-vh-100 mt-5 mx-md-3 border border-5 border-gray">
      {props.children}
    </div>
  );
};

export default Paper;
