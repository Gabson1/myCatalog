import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';

import { loginAction } from '../../../actions';
import { setToast } from '../../../actions/toast';

import useInput from '../../../hooks/useInput';

const LoginForm = ({ signup, loginAction, isAuthenticated }) => {
	const email = useInput('');
	const password = useInput('');

	const handleLogin = (e) => {
		e.preventDefault();

		if (!email.value.trim() || !password.value.trim()) {
			setToast('Please fill in all fields', 'danger');
		}

		const formData = {
			email: email.value,
			password: password.value,
		};

		loginAction(formData);
	};

	if (isAuthenticated) {
		return <Redirect to="/dashboard" />;
	}

	return (
		<Grid textAlign='center' style={{height: '100vh'}} verticalAlign='middle'>
			<Grid.Column style={{maxWidth: 450}}>
				<Header as='h2' color='teal' textAlign='center'>
          Log-in to your account
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
          New to us? <button onClick={() => signup()}>Sign Up</button>
				</Message>
			</Grid.Column>
		</Grid>
	);
};

const mapStateToProps = state => ({
	isAuthenticated: state.isAuthenticated
});

export default connect(mapStateToProps, { setToast, loginAction })(LoginForm);
