import React, { useState, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Button, Grid, Input, Label } from 'semantic-ui-react';

const CatalogEditModal = () => {
  const catalogFields = [
    { id: 1, key: 'assetName' },
    { id: 2, key: 'assetQuantity' },
    { id: 3, key: 'singleQuantityPrice' },
    { id: 4, key: 'totalQuantityPrice' },
  ];

  const handleAddCatalog = useCallback(() => {
    // handle saving new asset data here
  }, []);

  return (
    <Grid columns={4}>
      <Grid.Row>
        { catalogFields.map(catalogField => (
          <Grid.Column id={`catalog-field-${catalogField.id}`} key={catalogField.id}>
            <Label>{catalogField.key}</Label>
            <Input />
          </Grid.Column>
        ))}
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Button
            color="teal"
            fluid
            onClick={() => console.log('save me')}
          >
            Save Data
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default CatalogEditModal;
