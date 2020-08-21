import React from 'react';
import { Grid, Button } from 'semantic-ui-react';

import '../../catalog.css';

export const SingleTableItemHeader = (props) => {
  const {
    asset_id: assetId,
    asset_name: assetName,
    asset_quantity: assetQuantity,
    asset_price: assetPrice,
    asset_api_price: assetApiPrice
  } = props;

  const gridColumns = 5;
  const columnWidth = 3


  return (
    <Button disabled primary>
      <Grid columns={gridColumns}>
        <Grid.Column width={columnWidth}>
          <p className='assetItemHeaders assetItemId'>
            Asset ID
          </p>
        </Grid.Column>
        <Grid.Column width={columnWidth}>
          <p className='assetItemHeaders'>
            Asset Name
          </p>
        </Grid.Column>
        <Grid.Column width={columnWidth}>
          <p className='assetItemHeaders'>
            Asset Quantity
          </p>
        </Grid.Column>
        <Grid.Column width={columnWidth}>
          <p className='assetItemHeaders'>
            Asset Price
          </p>
        </Grid.Column>
        <Grid.Column width={columnWidth}>
          <p className='assetItemHeaders'>
            Asset Api Price
          </p>
        </Grid.Column>
      </Grid>
    </Button>
  );
};
