import React from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";

import PrivateRoute from '../PrivateRoute';

import RegSwitch  from '../../components/registration/registrationTypeSwitcher/regSwitch';
import Apis from '../../pages/api/api';
import Dashboard from '../../pages/dashboard/dashboard';
import Profile from '../../pages/profile/profile';
import Settings from '../../pages/setting/setting';
import Tables from '../../pages/tables/table';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={RegSwitch} />
        <PrivateRoute exact path="/api" component={Apis}/>
        <PrivateRoute exact path="/dashboard" component={Dashboard}/>
        <PrivateRoute exact path="/profile" component={Profile}/>
        <PrivateRoute exact path="/setting" component={Settings}/>
        <PrivateRoute exact path="/tables" component={Tables}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
