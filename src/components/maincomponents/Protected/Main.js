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
          <Route>
            <Booking />
          </Route>
          <Route>
            <Document />
          </Route>
          <Route>
            <Medical />
          </Route>
          <Route>
            <Patient />
          </Route>
          <Route>
            <Resources />
          </Route>
          <Route>
            <Visit />
          </Route>
        </Switch>
       </div>
      </div>
    </div>
  );
};

export default Main;
