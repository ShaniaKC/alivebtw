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
        <div className="col-md-10">
          <Switch>
            <Route path="/main/booking"  exact>
              <Booking />
            </Route>
            <Route path="/main/document" exact>
              <Document />
            </Route>
            <Route path="/main/medical" exact>
              <Medical />
            </Route>
            <Route path="/main/patient" exact>
              <Patient />
            </Route>
            <Route path="/main/resources" exact>
              <Resources />
            </Route>
            <Route path="/main/visit" exact>
              <Visit />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Main;
