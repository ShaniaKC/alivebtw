import React from 'react';
import Paper from '../../minorcomponents/Paper';
import Search from '../../minorcomponents/Search';
import ButtonPrimary from '../../minorcomponents/ButtonPrimary';

const B = () => {
  return (
    <Paper>
      <div className="row">
        <ButtonPrimary text="Add new Patient" className="col-3" />
        <Search btnText="Search for Patient" className="col-6 offset-3" />
      </div>
    </Paper>
  );
};

export default B;
