import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Grid, Input, Label } from 'semantic-ui-react';

import useInput from '../../../hooks/useInput';

import { selectAssetId } from '../../../selectors/catalogSelectors';

import { editAssetAction, deleteDocumentAction } from '../../../actions';

const CatalogEditModal = () => {
  const dispatch = useDispatch();
  const assetId = useSelector(selectAssetId);
  const assetName = useInput('');
  const assetQuantity = useInput('');
  const singleQuantityPrice = useInput('');
  const totalQuantityPrice = useInput('');

  const handleEditAsset = () => {
    const editAssetData = {
      assetName: assetName.value,
      assetQuantity: assetQuantity.value,
      singleQuantityPrice: singleQuantityPrice.value,
      totalQuantityPrice: totalQuantityPrice.value,
    };

    dispatch(editAssetAction(assetId, editAssetData));
  };

  const handleDeleteAsset = (docId) => {
    dispatch(deleteDocumentAction(docId));
  };

  return (
    <Grid columns={4}>
      <p>
        Currently updating:
        <strong>{assetId}</strong>
      </p>
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
            onClick={() => handleEditAsset()}
          >
            Save Data
          </Button>
        </Grid.Column>
        <Grid.Column>
          <Button
            color="red"
            fluid
            onClick={() => handleDeleteAsset(assetId)}
          >
            Delete Asset
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default CatalogEditModal;
