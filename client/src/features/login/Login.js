import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form , Input, Button} from 'semantic-ui-react';

import { loginAction } from '../../actions';

class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  };

  updateEmail = (event) => {
    this.setState({ email: event.target.value })
  };

  updatePassword = (event) => {
    this.setState({ password: event.target.value })
  };

  render() {
    return (
      <Form>
        <Input type="text" placeholder="email" value={this.state.email} onChange={this.updateEmail} />
        <Input type="password" placeholder="password" value={this.state.password} onChange={this.updatePassword} />
        <Button onClick={() => this.props.loginAction(this.state.email, this.state.password)}>Click me</Button>
      </Form>
    )
  }
}

const mapStateToProps = state => {  const { isLoggedIn } = state.loginReducer;   return { isLoggedIn }  };

const mapDispatchToProps = dispatch => ({   loginAction: (email, password) => dispatch(loginAction(email, password))  });


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);