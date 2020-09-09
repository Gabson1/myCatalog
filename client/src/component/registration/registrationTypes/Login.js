import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Button, Form, Grid, Header, Message, Segment,
} from 'semantic-ui-react';

import { loginAction } from '../../../actions';

import useInput from '../../../hooks/useInput';

const LoginForm = ({ signup }) => {
  const dispatch = useDispatch();
  const email = useInput('');
  const password = useInput('');

  const handleLogin = () => {
    const formData = {
      email: email.value,
      password: password.value,
    };

    dispatch(loginAction(formData));
  };

  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Log-in to your account
        </Header>
        <Form size="large" onSubmit={handleLogin}>
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              type="text"
              value={email.value}
              onChange={email.onChange}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              value={password.value}
              onChange={password.onChange}
            />

            <Button
              color="teal"
              fluid
              size="large"
              onClick={() => handleLogin}
            >
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us?
          {' '}
          <button type="button" className="noButtonStyles" onClick={() => signup()}>Sign Up</button>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default LoginForm;
