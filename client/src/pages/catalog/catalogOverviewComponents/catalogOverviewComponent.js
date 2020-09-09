import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Table } from 'semantic-ui-react';

import history from '../../../middlewares/history';

import { getAllCatalogsAction, editCatalogModeAction } from '../../../actions';
import { selectCatalogList, selectCreatorId } from '../../../selectors/catalogSelectors';

import CatalogOverviewHeader from './catalogOverviewHeader';
import CatalogOverviewBody from './catalogOverviewBody';

import '../catalog.css';

const CatalogOverviewComponent = () => {
  const dispatch = useDispatch();
  const catalogs = useSelector(selectCatalogList);
  const userId = useSelector(selectCreatorId);

  useEffect(() => {
    dispatch(getAllCatalogsAction(userId));
  }, [dispatch, userId]); // Decide whether I want the ui to update as soon as a new catalog is added

  const rowEditMode = (catalogId) => {
    dispatch(editCatalogModeAction(true, catalogId));
    history.push(`catalog/${catalogId}`);
  };

  return (
    <React.Fragment>
      <Button
        className="newCatalogButton"
        icon="plus"
        style={{ width: '100%' }}
        onClick={() => history.push('catalog/add')}
      />
      <Table>
        <CatalogOverviewHeader />

        { catalogs && catalogs.length && catalogs.map(catalogData => (
          <CatalogOverviewBody
            rowClick={() => rowEditMode(catalogData._id)}
            catalogId={catalogData._id}
            assetType={catalogData.assetType}
            description={catalogData.description}
            assetsQuantity="QUANTITY"
            createdAt="CREATED AT"
          />
        ))}
      </Table>
    </React.Fragment>
  );
};

export default CatalogOverviewComponent;
