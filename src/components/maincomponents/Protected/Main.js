import React from 'react';
import Sidebar from './Sidebar';
import { Route, Switch } from 'react-router-dom';
import Booking from './Booking';
import Document from './Document';
import Medical from './Medical';
import Patient from './Patient';
import Resources from './Resources';
import Visit from './Visit';

const Main = () => {
  return (
    <div className="container-fluid bg-white vh-100">
      <div className="row">
        <Sidebar />
        <div className="col-md-10" style={{ backgroundColor: '#d0d5da' }}>
          <Route path="/main/booking">
            <Booking />
          </Route>
          <Route path="/main/documents">
            <Document />
          </Route>
          <Route path="/main/medical">
            <Medical />
          </Route>
          <Route path="/main/patient">
            <Patient />
          </Route>
          <Route path="/main/resources">
            <Resources />
          </Route>
          <Route path="/main/visit">
            <Visit />
          </Route>
        </div>
      </div>
    </div>
  );
};

export default Main;
