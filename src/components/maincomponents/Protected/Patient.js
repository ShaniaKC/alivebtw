import React from 'react';
import Paper from '../../minorcomponents/Paper';
import Search from '../../minorcomponents/Search';
import ButtonPrimary from '../../minorcomponents/ButtonPrimary';

const B = () => {
  return (
    <Paper>
      <ButtonPrimary text="Add new Patient" />
      <Search btnText="Search for Patient" />
    </Paper>
  );
};

export default B;
