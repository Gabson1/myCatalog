import React from 'react';
import { Table } from 'semantic-ui-react';

import '../../catalog.css';

const CatalogRow = ({
  assetId,
  assetName,
  assetQuantity,
  singleQuantityPrice,
  totalQuantityPrice,
}) => (
  <Table.Body>
    <Table.Row>
      <Table.Cell>{assetId}</Table.Cell>
      <Table.Cell>{assetName}</Table.Cell>
      <Table.Cell>{assetQuantity}</Table.Cell>
      <Table.Cell>{singleQuantityPrice}</Table.Cell>
      <Table.Cell>{totalQuantityPrice}</Table.Cell>
    </Table.Row>
  </Table.Body>
);

export default CatalogRow;
