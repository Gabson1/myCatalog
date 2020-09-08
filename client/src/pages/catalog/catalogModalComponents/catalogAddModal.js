import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Grid, Input, Label } from 'semantic-ui-react';

import useInput from '../../../hooks/useInput';

import { selectCatalogId } from '../../../selectors/catalogSelectors';

import { editCatalogAssetsActions } from '../../../actions';

const CatalogAddModal = () => {
  const dispatch = useDispatch();
  const catalogId = useSelector(selectCatalogId);
  const assetName = useInput('');
  const assetQuantity = useInput('');
  const singleQuantityPrice = useInput('');
  const totalQuantityPrice = useInput('');

  const handleAddCatalog = () => {
    const newAssetData = {
      assetName: assetName.value,
      assetQuantity: assetQuantity.value,
      singleQuantityPrice: singleQuantityPrice.value,
      totalQuantityPrice: totalQuantityPrice.value,
    };

    dispatch(editCatalogAssetsActions(catalogId, newAssetData));
  };

  return (
    <Grid columns={4}>
      <Grid.Row>
        <Grid.Column>
          <Label>Asset Name</Label>
          <Input value={assetName.value} onChange={assetName.onChange} />
        </Grid.Column>
        <Grid.Column>
          <Label>Asset Quantity</Label>
          <Input value={assetQuantity.value} onChange={assetQuantity.onChange} />
        </Grid.Column>
        <Grid.Column>
          <Label>Single Quantity Price</Label>
          <Input value={singleQuantityPrice.value} onChange={singleQuantityPrice.onChange} />
        </Grid.Column>
        <Grid.Column>
          <Label>Total Quantity Price</Label>
          <Input value={totalQuantityPrice.value} onChange={totalQuantityPrice.onChange} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Button
            color="teal"
            fluid
            onClick={() => handleAddCatalog()}
          >
            Save Data
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default CatalogAddModal;
