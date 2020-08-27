import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react';

import '../../catalog.css';

const CatalogRow = ({ assetId, assetName, assetQuantity, singleQuantityPrice, totalQuantityPrice, editing }) => {
  const [rowClick, setRowClick] = useState(false)

  const gridColumns = 5;
  const columnWidth = 4

  if (rowClick) return <Redirect to={`/catalog/edit/${assetId}`}/>

  return (
    <Table.Body>
      <Table.Row>
        <Table.Cell contentEditable={editing}>{assetId ? assetId : 'PLACEHOLDER'}</Table.Cell>
        <Table.Cell contentEditable={editing}>{assetName ? assetName : 'PLACEHOLDER'}</Table.Cell>
        <Table.Cell contentEditable={editing}>{assetQuantity ? assetQuantity : 'PLACEHOLDER'}</Table.Cell>
        <Table.Cell contentEditable={editing}>{singleQuantityPrice ? singleQuantityPrice : 'PLACEHOLDER'}</Table.Cell>
        <Table.Cell contentEditable={editing}>{totalQuantityPrice ? totalQuantityPrice : 'PLACEHOLDER'}</Table.Cell>
      </Table.Row>
    </Table.Body>
  );
};

const mapStateToProps = state => ({
  editing: state.catalog.editing
});

export default connect(mapStateToProps)(CatalogRow)

