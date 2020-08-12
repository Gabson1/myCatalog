import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import setAuthToken from '../../utils/setAuthToken';
import store from '../../store/store';
import { loadUserAction } from '../../actions';

import PrivateRoute from '../PrivateRoute';

import RegSwitch  from '../../component/registration/regSwitch';
import Apis from '../../pages/api/api';
import Dashboard from '../../pages/dashboard/dashboard';
import Profile from '../../pages/profile/profile';
import Settings from '../../pages/setting/setting';
import Tables from '../../pages/tables/table';
import NotFound from '../../component/notfound/notFound';

import './App.css';

const App = () => {
	useEffect(() => {
		setAuthToken(localStorage.token);
		store.dispatch(loadUserAction());
	}, []);


	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={RegSwitch} />
				<PrivateRoute exact path="/api" component={Apis}/>
				<PrivateRoute exact path="/dashboard" component={Dashboard}/>
				<PrivateRoute exact path="/profile" component={Profile}/>
				<PrivateRoute exact path="/setting" component={Settings}/>
				<PrivateRoute exact path="/tables" component={Tables}/>
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
