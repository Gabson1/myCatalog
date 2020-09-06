import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Toast from '../component/toast/Toast';
import Dashboard from '../pages/dashboard/dashboard';
import Catalog from '../pages/catalog/catalog';
import Api from '../pages/api/api';
import Setting from '../pages/setting/setting';
import NotFound from '../component/notfound/notFound';
import CatalogImportModal from '../pages/catalog/catalogComponents/catalogImportModal';

const AppRouter = () => (
  <BrowserRouter>
    <Toast />
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/catalog" component={Catalog} />
      <Route exact path="/api" component={Api} />
      <Route exact path="/setting" component={Setting} />
      <Route exact path="/catalog/import" component={CatalogImportModal} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
