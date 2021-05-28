import React from 'react';

import PropTypes from 'prop-types';

import { IntlProvider } from 'react-intl';

import deMessages from './i18nMessages/de.json';

const customFormats = {
  number: {
    eur: { style: 'currency', currency: 'EUR' },
    performance: { style: 'percent', maximumFractionDigits: 2 },
    percentWith2Decimals: { style: 'percent', maximumFractionDigits: 2 },
  },
  date: {
    monthYear: {
      month: 'short',
      year: 'numeric',
    },
  },
};
const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const Provider = ({ children }) => (
  <IntlProvider
    locale="de"
    messages={deMessages}
    defaultLocale="de"
    formats={customFormats}
    textComponent={React.Fragment}
  >
    {children}
  </IntlProvider>
);

Provider.propTypes = propTypes;
Provider.defaultProps = defaultProps;

export default Provider;
