import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import '../../catalog.css';

export const CatalogInformation = ({ assetType, description }) => (
  <Fragment>
    <h4>{assetType}</h4>
    <p>{description}</p>
  </Fragment>
);

CatalogInformation.propTypes = {
  assetType: PropTypes.string,
  description: PropTypes.string,
};

CatalogInformation.defaultProps = {
  assetType: '',
  description: '',
};
