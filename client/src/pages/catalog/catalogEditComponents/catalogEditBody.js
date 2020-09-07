import React from 'react';
import { Table } from 'semantic-ui-react';

import './catalogEdit.css';

const CatalogOverviewBody = ({
  assetId,
  assetName,
  assetsQuantity,
  singleQuantityPrice,
  totalQuantityPrice,
}) => (
  <Table.Body>
    <Table.Row>
      <Table.Cell>{assetId}</Table.Cell>
      <Table.Cell>{assetName}</Table.Cell>
      <Table.Cell>{assetsQuantity}</Table.Cell>
      <Table.Cell>{singleQuantityPrice}</Table.Cell>
      <Table.Cell>{totalQuantityPrice}</Table.Cell>
      <Table.Cell>CHECKBOX</Table.Cell>
    </Table.Row>
  </Table.Body>
);

export default CatalogOverviewBody;
