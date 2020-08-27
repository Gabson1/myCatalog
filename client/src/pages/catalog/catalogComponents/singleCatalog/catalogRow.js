import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Table } from 'semantic-ui-react';

import '../../catalog.css';

export const CatalogRow = ({ assetId, assetName, assetQuantity, singleQuantityPrice, totalQuantityPrice }) => {
  const [rowClick, setRowClick] = useState(false)

  const gridColumns = 5;
  const columnWidth = 4

  if (rowClick) return <Redirect to={`/catalog/edit/${assetId}`}/>

  return (
    <Table.Body>
      <Table.Row>
        <Table.Cell>{assetId ? assetId : 'PLACEHOLDER'}</Table.Cell>
        <Table.Cell>{assetName ? assetName : 'PLACEHOLDER'}</Table.Cell>
        <Table.Cell>{assetQuantity ? assetQuantity : 'PLACEHOLDER'}</Table.Cell>
        <Table.Cell>{singleQuantityPrice ? singleQuantityPrice : 'PLACEHOLDER'}</Table.Cell>
        <Table.Cell>{totalQuantityPrice ? totalQuantityPrice : 'PLACEHOLDER'}</Table.Cell>
      </Table.Row>
    </Table.Body>
  );
};
