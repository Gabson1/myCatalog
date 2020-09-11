import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { authenticateUserAction } from '../actions';

import AppRouter from './appRouter';
import RegSwitch from '../component/registration/regSwitch';
import { selectAuthentication } from '../selectors/authSelector';

const App = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectAuthentication);

  useEffect(() => {
    dispatch(authenticateUserAction());
  }, [dispatch, isAuthenticated]);

  return (
    <Fragment>
      { isAuthenticated ? <AppRouter /> : <RegSwitch /> }
    </Fragment>
  );
};

export default App;
