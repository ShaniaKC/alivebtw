import React from 'react';
import Paper from '../../minorcomponents/Paper';
import Search from '../../minorcomponents/Search';
import ButtonPrimary from '../../minorcomponents/ButtonPrimary';
import Title from '../../minorcomponents/Title';

const B = () => {
  return (
    <Paper>
      <Title />
      <div className="row gy-4 ">
        <ButtonPrimary
          text="Add new Patient"
          className="col-md-3 col-6 offset-6"
        />
        <Search
          btnText="Search for Patient"
          className="col-md-6 offset-md-3 col-sm-12"
        />
      </div>
    </Paper>
  );
};

export default B;
