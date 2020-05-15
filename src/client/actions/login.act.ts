import { LoginAction } from '../../../shared/models/actions.mod'

// TODO: Work on login handling
// LOGIN takes one parameter: isLoggingIn
// if isLoggingIn is true => returns action: 'LOGIN' and payload: email, password
// if isLoggedIn is false => returns action: 'SIGN_UP' and payload: firstname, lastname, email, password

export const LOGIN = (isLoggingIn) => (isLoggingIn ? 'LOGIN' : 'SIGN_UP');

export const login = (firstname, lastname, email, password): LoginAction => {
    return {
        type: typeof LOGIN,
        payload: {
            firstname,
            lastname,
            email,
            password
        }
    };
};

