import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import store from '../../store/store';
import { loadUserAction } from '../../actions';
import setAuthToken from '../../utils/setAuthToken';

import PrivateRoute from '../PrivateRoute';

import Toast from '../../component/toast/Toast';
import RegSwitch from '../../component/registration/regSwitch';
import Dashboard from '../../pages/dashboard/dashboard';
import Catalog from '../../pages/catalog/catalog';
import Api from '../../pages/api/api';
import Setting from '../../pages/setting/setting';
import NotFound from '../../component/notfound/notFound';

import './App.css';

const App = () => {
	useEffect(() => {
		setAuthToken(localStorage.token);
		store.dispatch(loadUserAction());
	}, []);

	return (
		<BrowserRouter>
			<Toast />
			<Switch>
				<Route exact path="/" component={RegSwitch} />
				<Route exact path="/dashboard" component={Dashboard} />
				<Route exact path="/catalog" component={Catalog} />
				<Route exact path="/api" component={Api} />
				<Route exact path="/setting" component={Setting} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;

/*
				<PrivateRoute exact path="/api" component={Apis}/>
				<PrivateRoute exact path="/dashboard" component={Dashboard}/>
				<PrivateRoute exact path="/profile" component={Profile}/>
				<PrivateRoute exact path="/setting" component={Settings}/>
				<PrivateRoute exact path="/catalog" component={Tables}/>
 */