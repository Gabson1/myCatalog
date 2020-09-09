import _ from 'lodash';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Table } from 'semantic-ui-react';

import { useModal } from '../../../hooks/useModal';

import { selectCatalogList, selectCatalogId } from '../../../selectors/catalogSelectors';

import { deleteDocumentAction, editAssetModeAction } from '../../../actions';

import SideBar from '../../../component/sidebar/sidebar';
import BackArrow from '../../../component/arrow/arrow';

import CatalogAddModal from '../catalogModalComponents/catalogAddModal';
import CatalogEditModal from '../catalogModalComponents/catalogEditModal';

import CatalogEditHeader from './catalogEditHeader';
import CatalogEditBody from './catalogEditBody';
import CatalogEditFooter from './catalogEditFooter';

import './catalogEdit.css';

const CatalogEditComponent = () => {
  const dispatch = useDispatch();
  const { show: showAddModal, RenderModal: RenderAddModal } = useModal();
  const { show: showEditModal, RenderModal: RenderEditModal } = useModal();

  const catalogs = useSelector(selectCatalogList);
  const catalogId = useSelector(selectCatalogId);

  const filteredCatalog = _.filter(catalogs, { _id: catalogId });

  const handleSetAssetEditMode = (assetId) => {
    dispatch(editAssetModeAction(true, assetId));
    showEditModal();
  };

  const handleDeleteCatalog = (docId) => {
    dispatch(deleteDocumentAction(docId));
  };

  return (
    <main className="page">
      <div id="modalRoot" />
      <SideBar />
      <section id="pageContent">
        <div id="headerContent">
          <h2>From here you can edit your catalog</h2>
        </div>
        <BackArrow />
        <Button
          className="newCatalogButton"
          icon="plus"
          style={{ width: '100%' }}
          onClick={showAddModal}
        />
        <Table>
          <CatalogEditHeader />
          { filteredCatalog.map((catalogData, index) => (
            catalogData.assets.map(assetData => (
              <CatalogEditBody
                key={`catalog-row-${index}`}
                assetId={assetData._id}
                assetName={assetData.assetName}
                assetsQuantity={assetData.assetQuantity}
                singleQuantityPrice={assetData.singleQuantityPrice}
                totalQuantityPrice={assetData.totalQuantityPrice}
                clickRow={() => handleSetAssetEditMode(assetData._id)}
              />
            ))
          ))}
        </Table>
        <CatalogEditFooter clickDelete={() => handleDeleteCatalog(catalogId)} />
      </section>
      <RenderAddModal>
        <CatalogAddModal />
      </RenderAddModal>
      <RenderEditModal>
        <CatalogEditModal />
      </RenderEditModal>
    </main>
  );
};

export default CatalogEditComponent;
