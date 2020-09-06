import React, { useState, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  Button, Divider, Form, Grid, Input, Label,
} from 'semantic-ui-react';

import { selectCatalogList } from '../../../../selectors/catalogSelectors';

const CatalogEditModal = () => {
  const [assetType, setAssetType] = useState();
  const catalogs = useSelector(selectCatalogList);
  // TODO: Receive catalogID from 'Edit Catalog' action and display corresponding data

  const catalogData = catalogs[0];

  const assetInformation = [
    { id: 1, label: 'Gold', value: 'gold' },
    { id: 2, label: 'Silver', value: 'silver' },
    { id: 3, label: 'Wine', value: 'wine' },
  ];

  const handleEditCatalog = useCallback(() => {
    // handle saving new asset data here
  }, []);

  return (
    <Grid columns={6}>
      <Grid.Row>
        <Grid.Column style={{ display: 'inline-block' }}>
          <Label>Catalog Asset Type</Label>
          {
            assetInformation.map(assetList => (
              <Form.Field key={`form-field-${assetList.id}`}>
                <Form.Radio
                  label={assetList.label}
                  value={assetList.value}
                  checked={assetType === assetList.value}
                  onClick={() => setAssetType(assetList.value)}
                />
              </Form.Field>

            ))
          }
        </Grid.Column>
        <Grid.Column>
          <Label>Catalog Description</Label>
          <Input placeholder={catalogData.description} />
        </Grid.Column>
      </Grid.Row>
      <Divider />
      <Grid.Row>
        { catalogs[0].assets.map(assetData => (
          <>
            <Grid.Column>
              <Label>Asset Name</Label>
              <Input placeholder={assetData.assetName} />
            </Grid.Column>
            <Grid.Column>
              <Label>Asset Quantity</Label>
              <Input placeholder={assetData.assetQuantity} />
            </Grid.Column>
            <Grid.Column>
              <Label>Single Asset Price</Label>
              <Input placeholder={assetData.singleQuantityPrice} />
            </Grid.Column>
            <Grid.Column>
              <Label>Total Asset Price</Label>
              <Input placeholder={assetData.totalQuantityPrice} />
            </Grid.Column>
          </>
        ))}
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Button
            color="teal"
            fluid
            onClick={() => console.log('save me', catalogData._id)}
          >
            Save Data
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default CatalogEditModal;
