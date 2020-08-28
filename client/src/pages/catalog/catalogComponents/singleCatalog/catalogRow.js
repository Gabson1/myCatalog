import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react';

import '../../catalog.css';

export const CatalogRow = ({ assetId, assetName, assetQuantity, singleQuantityPrice, totalQuantityPrice }) => {

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
