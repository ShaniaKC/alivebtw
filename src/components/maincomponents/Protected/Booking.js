import React from 'react';
import Paper from '../../minorcomponents/Paper';
import Search from '../../minorcomponents/Search';
import ButtonPrimary from '../../minorcomponents/ButtonPrimary';
import Title from '../../minorcomponents/Title';

const B = () => {
  return (
    <Paper>
      <Title />
      <Search
        placeholder="Enter id to search"
        className="col-md-6 offset-md-3"
      />
      <ButtonPrimary text="New Appointment" className="mt-4" />
    </Paper>
  );
};

export default B;
