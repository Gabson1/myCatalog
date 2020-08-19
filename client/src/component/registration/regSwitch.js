import React, { useState } from 'react';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import SignupForm from './registrationTypes/signup';
import LoginForm from './registrationTypes/Login';

import './regSwitch.css';

const RegSwitch = ({ isAuthenticated }) => {
	const [reg, setReg] = useState('SIGNUP');

	if (isAuthenticated) return <Redirect to='/dashboard' />;

	const login = () => setReg('LOGIN');
	const signup = () => setReg('SIGNUP');

	if (reg === 'LOGIN') {
		return <LoginForm signup={signup} />;
	} else {
		return <SignupForm login={login} />;
	}
};

const mapStateToProps = state => ({
	isAuthenticated: state.user.isAuthenticated
});


export default connect(mapStateToProps)(RegSwitch);
