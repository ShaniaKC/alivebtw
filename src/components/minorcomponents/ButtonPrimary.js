import React from 'react';

const ButtonPrimary = (props) => {
  return (
    <button
      className={`btn btn-primary ${props.className}`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default ButtonPrimary;
