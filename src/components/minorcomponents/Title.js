import React from 'react';

const Title = (props) => {
  let titleText = window.location.pathname.split('/');

  return (
    <h1 className="text-center text-uppercase">
      {titleText[titleText.length - 1]}
    </h1>
  );
};

export default Title;
