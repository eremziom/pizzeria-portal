import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Login from './components/views/Login/Login';
import Homepage from './components/views/Homepage/Homepage';
import Tables from './components/views/Tables/Tables';
import Kitchen from './components/views/Kitchen/Kitchen';
import Waiter from './components/views/Waiter/Waiter';


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
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
