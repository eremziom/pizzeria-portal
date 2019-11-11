import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Login from './components/views/Login/Login';
import Homepage from './components/views/Homepage/Homepage';
import Tables from './components/views/Tables/Tables';
import Kitchen from './components/views/Kitchen/Kitchen';
import Waiter from './components/views/Waiter/Waiter';
import Booking from './components/views/Booking/Booking';
import Event from './components/views/Event/Event';
import NewBooking from './components/views/Booking/NewBooking';
import NewEvent from './components/views/Event/NewEvent';
import Order from './components/views/Order/Order';
import NewOrder from './components/views/Order/NewOrder';


function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <MainLayout>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={Homepage} />
          <Route exact path={process.env.PUBLIC_URL + '/Login'} component={Login} />
          <Route exact path={process.env.PUBLIC_URL + '/Tables'} component={Tables} />
          <Route exact path={process.env.PUBLIC_URL + '/Kitchen'} component={Kitchen} />
          <Route exact path={process.env.PUBLIC_URL + '/Waiter'} component={Waiter} />
          <Route exact path={process.env.PUBLIC_URL + '/Booking'} component={NewBooking} />
          <Route exact path={process.env.PUBLIC_URL + '/Booking/:id'} component={Booking} />
          <Route exact path={process.env.PUBLIC_URL + '/Event'} component={NewEvent} />
          <Route exact path={process.env.PUBLIC_URL + '/Event/:id'} component={Event} />
          <Route exact path={process.env.PUBLIC_URL + '/Order'} component={NewOrder} />
          <Route exact path={process.env.PUBLIC_URL + '/Order/:id'} component={Order} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
