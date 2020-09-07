import React, { Fragment } from 'react';

import '../../catalog.css';

const CatalogInformation = ({ assetType, description }) => (
  <Fragment>
    <h4>{assetType}</h4>
    <p>{description}</p>
  </Fragment>
);

export default CatalogInformation;
