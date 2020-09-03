import React from 'react';
import { Table } from 'semantic-ui-react';

import { CatalogHeader } from './catalogHeader';
import { CatalogFooter } from './catalogFooter';
import { CatalogRow } from './catalogRow';

export const SingleCatalog = (props) => (
  <Table celled>
    <CatalogHeader {...props} />
    <CatalogRow {...props} />
    <CatalogFooter {...props} />
  </Table>
);
