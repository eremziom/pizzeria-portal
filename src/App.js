import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Login from './components/views/Login/Login';
import Homepage from './components/views/Homepage/Homepage';
import Tables from './components/views/Tables/Tables';
import Kitchen from './components/views/Kitchen/Kitchen';
import Waiter from './components/views/Waiter/WaiterContainer';
import Booking from './components/views/Booking/Booking';
import Event from './components/views/Event/Event';
import NewBooking from './components/views/Booking/NewBooking';
import NewEvent from './components/views/Event/NewEvent';
import Order from './components/views/Order/Order';
import NewOrder from './components/views/Order/NewOrder';

import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2B4C6F' },
    //secondary: { main: '#11cb5f' },
  },
});

const App = () => {
  return (
    <BrowserRouter basename={'/panel'}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <MainLayout>
            <Switch>
              <Route exact path={process.env.PUBLIC_URL + '/'} component={Homepage} />
              <Route exact path={process.env.PUBLIC_URL + '/Login'} component={Login} />
              <Route exact path={process.env.PUBLIC_URL + '/Tables'} component={Tables} />
              <Route exact path={process.env.PUBLIC_URL + '/Kitchen'} component={Kitchen} />
              <Route exact path={process.env.PUBLIC_URL + '/Waiter'} component={Waiter} />
              <Route exact path={process.env.PUBLIC_URL + '/Tables/Booking'} component={NewBooking} />
              <Route exact path={process.env.PUBLIC_URL + '/Tables/Booking/:id'} component={Booking} />
              <Route exact path={process.env.PUBLIC_URL + '/Tables/Event'} component={NewEvent} />
              <Route exact path={process.env.PUBLIC_URL + '/Tables/Event/:id'} component={Event} />
              <Route exact path={process.env.PUBLIC_URL + '/Waiter/Order'} component={NewOrder} />
              <Route exact path={process.env.PUBLIC_URL + '/Waiter/Order/:id'} component={Order} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
