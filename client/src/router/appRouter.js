import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import history from '../middlewares/history';

import Toast from '../component/toast/Toast';
import Dashboard from '../pages/dashboard/dashboard';
import Catalog from '../pages/catalog/catalog';
import Api from '../pages/api/api';
import Setting from '../pages/setting/setting';
import NotFound from '../component/notfound/notFound';

import CatalogEditComponent from '../pages/catalog/catalogEditComponents/catalogEditComponent';
import CatalogAddComponent from '../pages/catalog/catalogAddComponents/catalogAddComponent';

const AppRouter = () => (
  <Router history={history}>
    <Toast />
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/catalog" component={Catalog} />
      <Route exact path="/catalog/add" component={CatalogAddComponent} />
      <Route exact path="/catalog/:catalogId" component={CatalogEditComponent} />
      <Route exact path="/api" component={Api} />
      <Route exact path="/setting" component={Setting} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default AppRouter;
