import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getConfig } from '../../configProvider';

export const ConfigContext = React.createContext();

export const contextShape = PropTypes.shape({
  config: PropTypes.shape({}).isRequired,
});

export const fakeContext = {
  google: {
    apiKey: 'abcd',
    captchaPublicKey: 'use from secrets',
  },
};

export class ConfigProvider extends Component {
  constructor(props) {
    super(props);

    this.state = getConfig();
  }

  render() {
    const { children } = this.props;
    return (
      <ConfigContext.Provider value={{
        ...this.state,
      }}
      >
        {children}
      </ConfigContext.Provider>
    );
  }
}

ConfigProvider.propTypes = {
  children: PropTypes.shape().isRequired,
};

export const WithConfigContext = (WrappedComponent) => ({ ...restProps }) => (
  <ConfigContext.Consumer>
    {(configContext) => (
      <WrappedComponent configContext={configContext} {...restProps} />
    )}
  </ConfigContext.Consumer>
);

export const ConfigConsumer = ConfigContext.Consumer;
