import React, { useState } from "react";

import SignupForm from "../signup/signup";
import LoginForm from "../login/Login";

export const RegistrationSwitcher = () => {
  const [reg, setReg] = useState('SIGNUP');

  const login = () => setReg('LOGIN');
  const signup = () => setReg('SIGNUP');

  if (reg === 'LOGIN') {
    return <LoginForm signup={signup} />;
  } else {
    return <SignupForm login={login} />;
  }
};
