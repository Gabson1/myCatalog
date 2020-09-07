import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from 'semantic-ui-react';

import { selectCatalogEditing } from '../../selectors/catalogSelectors';

import SideBar from '../../component/sidebar/sidebar';

import CatalogEditComponent from './catalogEditComponents/catalogEditComponent';
import CatalogOverviewComponent from './catalogOverviewComponents/catalogOverviewComponent';

import './catalog.css';

const Catalog = () => {
  const isEditMode = useSelector(selectCatalogEditing);
  const columnCount = 2;

  return (
    <main className="page">
      <SideBar />
      <section id="pageContent">
        <div id="headerContent">
          <h2>Catalog: An overview of your assets</h2>
        </div>
        { isEditMode
          ? (
            <Grid id="catalogContent" columns={columnCount}>
              <div id="modal-root" />
              <Grid columns={columnCount} className="catalogsWrapper">
                <CatalogEditComponent />
              </Grid>
            </Grid>
          ) : <CatalogOverviewComponent /> }
      </section>
    </main>
  );
};

export default Catalog;
