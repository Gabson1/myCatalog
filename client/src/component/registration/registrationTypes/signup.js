import React from 'react';
import { connect } from 'react-redux';
import {
  Button, Form, Grid, Header, Message, Segment,
} from 'semantic-ui-react';

import { setToast } from '../../../actions/toastAction';
import { signupAction } from '../../../actions';

import useInput from '../../../hooks/useInput';

const SignupForm = ({ login, signupAction }) => {
  const username = useInput('');
  const email = useInput('');
  const password = useInput('');
  const passwordRep = useInput('');

  const handleSignup = (e) => {
    e.preventDefault();

    const formData = {
      username: username.value,
      email: email.value,
      password: password.value,
    };

    signupAction(formData);
  };

  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Create a new account
        </Header>
        <Form size="large" onSubmit={handleSignup}>
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Username"
              type="text"
              value={username.value}
              onChange={username.onChange}
            />
            <Form.Input
              fluid
              icon="mail"
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
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Re-enter Password"
              type="password"
              value={passwordRep.value}
              onChange={passwordRep.onChange}
            />

            <Button
              color="teal"
              fluid
              size="large"
              onClick={() => handleSignup}
            >
              Signup
            </Button>
          </Segment>
        </Form>
        <Message>
          Already have an account?
          {' '}
          <button className="noButtonStyles" onClick={() => login()}>Login</button>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default connect(null, { setToast, signupAction })(SignupForm);
