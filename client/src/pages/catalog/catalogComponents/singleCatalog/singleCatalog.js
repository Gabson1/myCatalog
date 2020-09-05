/* eslint-disable no-underscore-dangle */
import React, { Fragment, useEffect } from 'react';
import { Divider, Grid, Table } from 'semantic-ui-react';

import { useDispatch, useSelector } from 'react-redux';
import { getAllCatalogsAction } from '../../../../actions';
import { selectCatalogList, selectCreatorId } from '../../../../selectors/catalogSelectors';

import { CatalogInformation } from './catalogInformation';
import { CatalogHeader } from './catalogHeader';
import { CatalogFooter } from './catalogFooter';
import { CatalogRow } from './catalogRow';
import { NoCatalogs } from '../noCatalogs';

export const SingleCatalog = (props) => {
  const dispatch = useDispatch();
  const userId = useSelector(selectCreatorId);
  const catalogs = useSelector(selectCatalogList);

  useEffect(() => {
    dispatch(getAllCatalogsAction(userId));
  }, [dispatch, userId]);

  return (
    <Fragment>
      { catalogs && catalogs.length ? catalogs.map(catalogData => (
        <div style={{ border: '1px solid black' }}>
          <CatalogInformation {...catalogData} />
          <Divider />
          <Table celled>
            <CatalogHeader />
            { catalogData && catalogData.length && catalogData.assets.map(assetsData => (
              <CatalogRow
                assetId={assetsData._id}
                assetName={assetsData.assetName}
                assetQuantity={assetsData.assetQuantity}
                singleQuantityPrice={assetsData.singleQuantityPrice}
                totalQuantityPrice={assetsData.totalQuantityPrice}
              />
            ))}
            <CatalogFooter {...props} />
          </Table>
        </div>
      ))
        : <NoCatalogs /> }
    </Fragment>
  );
};
