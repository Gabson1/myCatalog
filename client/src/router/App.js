import React, { Fragment, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';

import { authenticateUserAction } from '../actions';

import AppRouter from './appRouter';
import RegSwitch from '../component/registration/regSwitch';

const App = ({ isAuthenticated }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authenticateUserAction());
  }, [dispatch, isAuthenticated]);

  return (
    <>
      { isAuthenticated ? <AppRouter /> : <RegSwitch /> }
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps)(App);

// Todo: useSelector instead of connect()
