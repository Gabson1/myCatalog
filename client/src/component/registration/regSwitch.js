import React, { useState } from 'react';

import SignupForm from './registrationTypes/signup';
import LoginForm from './registrationTypes/Login';

import './regSwitch.css';

const RegSwitch = () => {
  const [reg, setReg] = useState('SIGNUP');

  const login = () => setReg('LOGIN');
  const signup = () => setReg('SIGNUP');

  if (reg === 'LOGIN') {
    return <LoginForm signup={signup} />;
  }
  return <SignupForm login={login} />;
};

export default RegSwitch;
