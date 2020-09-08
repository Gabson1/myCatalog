import React from 'react';

import { Table } from 'semantic-ui-react';

import '../catalog.css';

const CatalogEditHeader = () => (
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>Asset ID</Table.HeaderCell>
      <Table.HeaderCell>Asset Name</Table.HeaderCell>
      <Table.HeaderCell>Asset Quantity</Table.HeaderCell>
      <Table.HeaderCell>Single Asset Price</Table.HeaderCell>
      <Table.HeaderCell>Total Asset Price</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
);

export default CatalogEditHeader;
