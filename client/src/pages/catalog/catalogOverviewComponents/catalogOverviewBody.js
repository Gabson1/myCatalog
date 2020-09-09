import React from 'react';
import { Table } from 'semantic-ui-react';

import './catalogOverview.css';

const CatalogOverviewBody = ({
  catalogId,
  assetType,
  description,
  assetsQuantity,
  createdAt,
  rowClick,
}) => (
  <Table.Body>
    <Table.Row
      className="clickableTableRow"
      onClick={rowClick}
    >
      <Table.Cell>{catalogId}</Table.Cell>
      <Table.Cell>{assetType}</Table.Cell>
      <Table.Cell>{description}</Table.Cell>
      <Table.Cell>{assetsQuantity}</Table.Cell>
      <Table.Cell>{createdAt}</Table.Cell>
    </Table.Row>
  </Table.Body>
);

export default CatalogOverviewBody;
