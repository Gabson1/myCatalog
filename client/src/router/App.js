import React, { useEffect } from 'react';
import { connect} from "react-redux";
import { authenticateAction } from '../actions/userAction';

import AppRouter from './appRouter';
import RegSwitch from '../component/registration/regSwitch';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './globalStyle';
import { darkTheme } from './theme';

const App = ({ isAuthenticated }) => {
	useEffect(() => {
		authenticateAction()
	}, [isAuthenticated]);

	return (
		<ThemeProvider theme={darkTheme}>
			<GlobalStyle>
				{ isAuthenticated ? <AppRouter/> : <RegSwitch/> }
			</GlobalStyle>
		</ThemeProvider>
	)
};

const mapStateToProps = state => ({
	isAuthenticated: state.user.isAuthenticated
});

export default connect(mapStateToProps, { authenticateAction })(App);

// Todo: Fix this. on page load make a call to the store to set the state to loaded --> if isAuthenticated = true  --> if a token exists