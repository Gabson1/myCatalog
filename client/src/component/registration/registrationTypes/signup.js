import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';

import { setToast } from '../../../actions/toast';
import { signupAction } from '../../../actions';

import useInput from '../../../hooks/useInput';

const SignupForm = ({ login, signupAction, isAuthenticated }) => {
	const username = useInput('');
	const email = useInput('');
	const password = useInput('');

	const handleSignup = (e) => {
		e.preventDefault();

		if (!username.value.trim() ||!email.value.trim() || !password.value.trim()) {
			setToast('Please fill in all fields', 'danger');
		}

		if (username.value.length <= 3) {
			setToast('Username should be at least four characters long', 'danger');
		}

		const formData = {
			userame: username.value,
			email: email.value,
			password: password.value,
		};

		signupAction(formData);
	};

	if (isAuthenticated) {
		return <Redirect to="/dashboard" />;
	}

	return (
		<Grid textAlign='center' style={{height: '100vh'}} verticalAlign='middle'>
			<Grid.Column style={{maxWidth: 450}}>
				<Header as='h2' color='teal' textAlign='center'>
          Create a new account
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
          Already have an account? <button onClick={() => login()}>Login</button>
				</Message>
			</Grid.Column>
		</Grid>
	);
};

const mapStateToProps = state => ({
	isAuthenticated: state.isAuthenticated
});

export default connect(mapStateToProps, { setToast, signupAction })(SignupForm);
