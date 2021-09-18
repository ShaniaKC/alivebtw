import React from 'react';
import { Link } from 'react-router-dom';

const IconLink = (props) => {
  return (
    <Link className="row flex-d text-dark py-3 px-1" to={props.to}>
      <span className="col-2">{props.icon}</span>{' '}
      <span className="col-8 offset-1">{props.text}</span>
    </Link>
  );
};

export default IconLink;
