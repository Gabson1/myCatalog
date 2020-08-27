import React from 'react';
import { Grid, Table } from 'semantic-ui-react';

import { CatalogHeader } from "./catalogHeader";
import { CatalogEdit } from './catalogEdit';
import { CatalogRow } from './catalogRow';




export const SingleCatalog = (props) => {

  return (
    <Table celled>
      <CatalogHeader {...props} />
      <CatalogRow {...props} />
      <CatalogEdit {...props} />
    </Table>
  );
}
