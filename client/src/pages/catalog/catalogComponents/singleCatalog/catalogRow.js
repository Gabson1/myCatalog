import React from 'react';
import { Table } from 'semantic-ui-react';

import '../../catalog.css';

export const CatalogRow = ({
  assetId, assetName, assetQuantity, singleQuantityPrice, totalQuantityPrice,
}) => (
  <Table.Body>
    <Table.Row>
      <Table.Cell>{assetId || 'PLACEHOLDER'}</Table.Cell>
      <Table.Cell>{assetName || 'PLACEHOLDER'}</Table.Cell>
      <Table.Cell>{assetQuantity || 'PLACEHOLDER'}</Table.Cell>
      <Table.Cell>{singleQuantityPrice || 'PLACEHOLDER'}</Table.Cell>
      <Table.Cell>{totalQuantityPrice || 'PLACEHOLDER'}</Table.Cell>
    </Table.Row>
  </Table.Body>
);
