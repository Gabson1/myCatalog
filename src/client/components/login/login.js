import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';

import { useAction } from '../../hooks/action.hks';
import { loginAction } from '../../actions';

import './login.css';
import logo from '../../assets/logo.svg';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginAct = useAction(loginAction);

  const onSubmit = () => loginAct(email, password);
  return (
    <div className="Login-background">
        <div className="Login-wrapper">
          <Form
            className="Login-form"
            onSubmit={onSubmit}
          >
            <div className="Login-form-fields-wrapper">
              <div className="Login-form-field">
                <input
                  className="Login-form-email-field"
                  id="email"
                  placeholder="email"
                  onChange={({target: {value}}) => setEmail(value)}
                />
              </div>
              <div className="Login-form-field">
                <input
                  className="Login-form-password-field"
                  id="password"
                  type="password"
                  placeholder="password"
                  onChange={({target: {value}}) => setPassword(value)}
                />
              </div>
              <div className="Login-password-recovery-wrapper">
                <button
                  className="Login-password-recovery"
                  type="button"
                  onClick={() => console.log('passResetPopup()')}
                >
                  Passwort vergessen?
                </button>
              </div>
              <div id="login-form-stay-logged-in" className="Login-form-field">
                <label style={{ color:'white' }} for="stay-logged-in"> Angemeldet bleiben</label>
                <input id="stay-logged-in" type="checkbox" />
              </div>

              <div className="Login-form-field">
                <button
                  id="btn-login"
                  className="Login-button"
                  type="submit"
                >
                  Einloggen
                </button>
              </div>
            </div>
          </Form>
        </div>
    </div>
  );
}
export default Login;
