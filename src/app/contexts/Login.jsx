import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import Button from '@material-ui/core/Button';

import CloseIcon from 'sharedComponents/icons/Close';
import Login from '../components/views/login';

export const LoginContext = React.createContext();

export const contextShape = PropTypes.shape({
  config: PropTypes.shape({}).isRequired,
});

export const fakeContext = {
  show: false,
  showLoginOverlay: () => {},
  hideLoginOverlay: () => {},
};

export class LoginProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };

    this.showLoginOverlay = this.showLoginOverlay.bind(this);
    this.hideLoginOverlay = this.hideLoginOverlay.bind(this);
  }

  showLoginOverlay() {
    const { show } = this.state;
    if (show) {
      return;
    }

    this.setState({
      show: true,
    });
  }

  hideLoginOverlay() {
    const { show } = this.state;
    if (!show) {
      return;
    }

    this.setState({
      show: false,
    });
  }

  render() {
    const { children } = this.props;
    const { show } = this.state;
    return (
      <>
        <Dialog
          className="login-modal"
          open={show}
          onClose={this.hideLoginOverlay}
          maxWidth="md"
        >
          <DialogContent>
            <>
              <Button
                variant="text"
                color="primary"
                style={{ position: 'absolute', top: '0.75rem', right: '0.75rem' }}
                onClick={this.hideLoginOverlay}
              >
                <CloseIcon size={1.3} />
              </Button>
              <Login />
            </>
          </DialogContent>
        </Dialog>
        <LoginContext.Provider value={{
          ...this.state,
          showLoginOverlay: this.showLoginOverlay,
          hideLoginOverlay: this.hideLoginOverlay,
        }}
        >
          {children}
        </LoginContext.Provider>
      </>
    );
  }
}

LoginProvider.propTypes = {
  children: PropTypes.shape().isRequired,
};

export const WithLoginContext = (WrappedComponent) => ({ ...restProps }) => (
  <LoginContext.Consumer>
    {(loginContext) => (
      <WrappedComponent loginContext={loginContext} {...restProps} />
    )}
  </LoginContext.Consumer>
);

export const LoginConsumer = LoginContext.Consumer;
