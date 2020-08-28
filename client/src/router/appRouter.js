import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Toast from '../component/toast/Toast';
import Dashboard from '../pages/dashboard/dashboard';
import Catalog from '../pages/catalog/catalog';
import Api from '../pages/api/api';
import Setting from '../pages/setting/setting';
import NotFound from '../component/notfound/notFound';


const AppRouter = () => {

  return (
    <BrowserRouter>
      <Toast />
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/catalog" component={Catalog} />
        <Route exact path="/api" component={Api} />
        <Route exact path="/setting" component={Setting} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
