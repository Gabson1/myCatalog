import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from 'semantic-ui-react';

import {
  selectCreatorId,
  selectCatalogList,
  // selectCatalogEditing,
  // selectCatalogListError,
  // selectCatalogListIsFetching
} from '../../selectors/catalogSelectors';

import { getAllCatalogsAction } from '../../actions';

import SideBar from '../../component/sidebar/sidebar';
import AssetNewTable from './catalogComponents/newCatalog';
import { NoCatalogs } from './catalogComponents/noCatalogs';
import { SingleCatalog } from './catalogComponents/singleCatalog/singleCatalog';

import './catalog.css';

const Catalog = () => {
  const dispatch = useDispatch();
  const userId = useSelector(selectCreatorId);
  const catalogs = useSelector(selectCatalogList);
  // const editing = useSelector(selectCatalogEditing);
  // const fetching = useSelector(selectCatalogListIsFetching);
  // const error = useSelector(selectCatalogListError);

  const columnCount = 2;

  useEffect(() => {
    dispatch(getAllCatalogsAction(userId));
  }, [dispatch, userId]);

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
            <SingleCatalog />
          </Grid>
        </Grid>
      </section>
    </main>
  );
};

export default Catalog;
