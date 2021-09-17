import React from 'react';
import PatientInfoHeader from './PatientInfoHeader';
import StationInfoHeader from './StationInfoHeader';
import Sidebar from './Sidebar';
import PatientScreenTile from './PatientScreenTile';
import StationScreenTile from './StationScreenTile';

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
