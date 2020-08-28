import React from 'react';
import { Grid, Input, Label } from 'semantic-ui-react';
import {connect} from "react-redux";


const CatalogEditModal = ({ catalogs }) => {

  console.log(catalogs[9].assets[0]);
  { catalogs[9].assets.map((assetData) => (
    console.log(assetData)
  ))};

  return (
    <Grid columns={3}>
      { catalogs[9].assets.map((assetData) => (
        <Grid.Column>
          <Input placeholder={assetData.assetName} />
        </Grid.Column>
      ))}
    </Grid>
  );
};

const mapStateToProps = state => ({
  catalogs: state.catalog.catalogs[0],
});

export default connect(mapStateToProps)(CatalogEditModal);