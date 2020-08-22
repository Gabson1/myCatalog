import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Grid, Button, Icon, Popup } from 'semantic-ui-react';

import '../../catalog.css';

export const CatalogRow = (props) => {
  const {
    asset_id: assetId,
    asset_name: assetName,
    asset_quantity: assetQuantity,
    asset_price: assetPrice,
    asset_api_price: assetApiPrice
  } = props;

  const [rowClick, setRowClick] = useState(false)

  const gridColumns = 5;
  const columnWidth = 3

  if (rowClick) return <Redirect to={`/catalog/edit/${assetId}`}/>

  return (
    <Button onClick={() => setRowClick(true)}>
      <Grid columns={gridColumns}>
        <Grid.Column width={columnWidth}>
          <p className='assetItems assetItemId'>
            {'assetId'}
          </p>
        </Grid.Column>
        <Grid.Column width={columnWidth}>
          <p className='assetItems'>
            {'assetName'}
          </p>
        </Grid.Column>
        <Grid.Column width={columnWidth}>
          <p className='assetItems'>
            {'assetQuantity'}
          </p>
        </Grid.Column>
        <Grid.Column width={columnWidth}>
          <p className='assetItems'>
            {'assetPrice'}
          </p>
        </Grid.Column>
        <Grid.Column width={columnWidth}>
          <p className='assetItems'>
            {'assetApiPrice'}
          </p>
        </Grid.Column>
      </Grid>
    </Button>
  );
};
