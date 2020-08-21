import React, { Fragment, useEffect } from 'react';
import { connect, useDispatch } from "react-redux";

import { authenticateAction } from '../actions';

import AppRouter from './appRouter';
import RegSwitch from '../component/registration/regSwitch';

const App = ({ isAuthenticated }) => {
	const dispatch = useDispatch();

	useEffect( () => {
		dispatch(authenticateAction());
	}, [isAuthenticated]);

	return (
		<Fragment>
			{ isAuthenticated ? <AppRouter/> : <RegSwitch/> }
		</Fragment>
	)
};

const mapStateToProps = state => ({
	isAuthenticated: state.user.isAuthenticated
});


export default connect(mapStateToProps)(App);

// Todo: Fix this. on page load make a call to the store to set the state to loaded --> if isAuthenticated = true ... if a token exists --> show all routes
