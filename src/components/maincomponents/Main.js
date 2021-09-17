import React from 'react';
import PatientInfoHeader from './maincomponents/PatientInfoHeader';
import StationInfoHeader from './maincomponents/StationInfoHeader';
import Sidebar from './maincomponents/Sidebar';
import PatientScreenTile from './maincomponents/PatientScreenTile';
import StationScreenTile from './maincomponents/StationScreenTile';

const Main = () => {
  return (
    <div className="container-fluid bg-white vh-100">
      <PatientInfoHeader />
      <div className="row">
        <StationInfoHeader />
        <Sidebar />
        <PatientScreenTile />
        <StationScreenTile />
      </div>
    </div>
  );
};

export default Main;
