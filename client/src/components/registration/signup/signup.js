import React from 'react'
import { connect } from 'react-redux';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

import { signupAction } from '../../../actions';
import useInput from "../../../hooks/useInput";

import image from '../../../assets/logo192.png'

const SignupForm = ({ login, signupAction }) => {
  const username = useInput('');
  const email = useInput('');
  const password = useInput('');

  const handleSignup = (e) => {
    e.preventDefault();

    if (!username.value.trim() ||!email.value.trim() || !password.value.trim()) {
      return alert("Please fill in all the fields"); // TODO: Browser error
    }

    if (username.value.length <= 3) {
      return alert("Username should be atleast four characters long"); // TODO: Browser error
    }

    const payload = {
      userame: username.value,
      email: email.value,
      password: password.value,
    };

    signupAction(payload)
  };

  return (
    <Grid textAlign='center' style={{height: '100vh'}} verticalAlign='middle'>
      <Grid.Column style={{maxWidth: 450}}>
        <Header as='h2' color='teal' textAlign='center'>
          <Image src={image}/> Create a new account
        </Header>
        <Form size='large' onSubmit={handleSignup}>
          <Segment stacked>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='Username'
              type='text'
              value={username.value}
              onChange={username.onChange}
            />
            <Form.Input
              fluid
              icon='mail'
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
              onClick={() => handleSignup}
            >
              Signup
            </Button>
          </Segment>
        </Form>
        <Message>
          Already have an account? <a href='#' onClick={() => login()}>Login</a>
        </Message>
      </Grid.Column>
    </Grid>
  )
}

export default connect(null, { signupAction })(SignupForm);
