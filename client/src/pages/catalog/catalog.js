import React from 'react';

import { Grid } from 'semantic-ui-react';

import SideBar from '../../component/sidebar/sidebar';
import AssetNewTable from './catalogComponents/newCatalog';
import CatalogOverview from './catalogComponents/singleCatalog/catalogOverview';

import './catalog.css';

const Catalog = () => {
  const columnCount = 2;

  return (
    <main className="page">
      <SideBar />
      <section id="pageContent">
        <div id="headerContent">
          <h2>Catalog: An overview of your assets</h2>
        </div>
        <Grid id="catalogContent" columns={columnCount}>
          <Grid.Column width={2}>
            <AssetNewTable />
          </Grid.Column>
          <div id="modal-root" />
          <Grid columns={columnCount} className="catalogsWrapper">
            <CatalogOverview />
          </Grid>
        </Grid>
      </section>
    </main>
  );
};

export default Catalog;
