import React from 'react';
import { Link } from 'react-router-dom';

const IconLink = (props) => {
  return (
    <Link
      className="row flex-d text-primary py-2 px-1 text-start"
      to={props.to}
    >
      <span className="col-2">{props.icon}</span>{' '}
      <span className="col-10">{props.text}</span>
    </Link>
  );
};

export default IconLink;
