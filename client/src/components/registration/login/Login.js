import React from 'react'
import { connect } from 'react-redux';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

import { loginAction } from '../../../actions';
import useInput from "../../../hooks/useInput";

import image from '../../../assets/logo192.png'

const LoginForm = ({ signup, loginAction }) => {
  const email = useInput('');
  const password = useInput('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email.value.trim() || !password.value.trim()) {
      return alert("Please fill in all the fields"); //TODO: Browser error
    }

    const payload = {
      email: email.value,
      password: password.value,
    };

    loginAction(payload)
  };

  return (
    <Grid textAlign='center' style={{height: '100vh'}} verticalAlign='middle'>
      <Grid.Column style={{maxWidth: 450}}>
        <Header as='h2' color='teal' textAlign='center'>
          <Image src={image}/> Log-in to your account
        </Header>
        <Form size='large' onSubmit={handleLogin}>
          <Segment stacked>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='E-mail address'
              type='text'
              value={email.value}
              onChange={email.onChange}
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              value={password.value}
              onChange={password.onChange}
            />

            <Button
              color='teal'
              fluid
              size='large'
              onClick={() => handleLogin}
            >
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href='#' onClick={() => signup()}>Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  )
}

export default connect(null, { loginAction })(LoginForm);
