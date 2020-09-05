import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Grid, Input, Label } from 'semantic-ui-react';

const CatalogEditModal = ({
  catalogs, assetId, assetName, assetQuantity, singleQuantityPrice, totalQuantityPrice,
}) => {
  const [editing, setEditing] = useState(false);
  // TODO: Receive catalogID from 'Edit Catalog' action and display corresponding data
  const catalogData = catalogs[0];
  return (
    <Grid columns={3}>
      <Grid.Column>
        <Label>Catalog Asset Type</Label>
        <Input placeholder={catalogData.assetType} />
      </Grid.Column>
      <Grid.Column>
        <Label>Catalog Description</Label>
        <Input placeholder={catalogData.description} />
      </Grid.Column>
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
      <Grid.Column>
        <Button
          style={{ width: '50%' }}
          color="teal"
          fluid
          onClick={() => setEditing(true)}
        >
          Save new data
        </Button>
      </Grid.Column>
    </Grid>
  );
};

const mapStateToProps = state => ({ catalogs: state.catalog.catalogs[0] });

export default connect(mapStateToProps)(CatalogEditModal);
