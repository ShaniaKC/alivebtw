import React, { useState } from 'react';

const Popup = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  const closePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className="card col-3 position-absolute text-end top-50 start-50 translate-middle"
      style={isOpen ? { display: 'block' } : { display: 'none' }}
    >
      <button
        type="button"
        class="btn-close"
        onClick={closePopup}
        aria-label="Close"
      ></button>
      <div className="card-body text-center ">
        <p className="card-text">{props.text}</p>
        <button className="btn btn-primary">{props.btn_text}</button>
      </div>
    </div>
  );
};

export default Popup;
