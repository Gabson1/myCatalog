import React from 'react';

import { Table } from 'semantic-ui-react';

import '../catalog.css';

const CatalogOverviewHeader = () => (
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>Catalog ID</Table.HeaderCell>
      <Table.HeaderCell>Asset Type</Table.HeaderCell>
      <Table.HeaderCell>Catalog Description</Table.HeaderCell>
      <Table.HeaderCell>Number of assets in catalog</Table.HeaderCell>
      <Table.HeaderCell>Catalog Created At</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
);

export default CatalogOverviewHeader;
