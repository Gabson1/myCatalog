import _ from 'lodash';

import React from 'react';
import { useSelector } from 'react-redux';

import { Button, Table } from 'semantic-ui-react';

import history from '../../../middlewares/history';

import { useModal } from '../../../hooks/useModal';

import { selectCatalogList, selectCatalogId } from '../../../selectors/catalogSelectors';

import SideBar from '../../../component/sidebar/sidebar';
import BackArrow from '../../../component/arrow/arrow';

import CatalogAddModal from '../catalogModalComponents/catalogAddModal';

import CatalogEditHeader from './catalogEditHeader';
import CatalogEditBody from './catalogEditBody';
import CatalogEditFooter from './catalogEditFooter';

import './catalogEdit.css';

const CatalogEditComponent = () => {
  const { show, RenderModal } = useModal();
  const catalogs = useSelector(selectCatalogList);
  const catalogId = useSelector(selectCatalogId);

  const filteredCatalog = _.filter(catalogs, { _id: catalogId });

  if (!catalogs || filteredCatalog.length < 1) history.go(-1);

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
          onClick={show}
        />
        <RenderModal>
          <CatalogAddModal />
        </RenderModal>
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
              />
            ))
          ))}
        </Table>
        <CatalogEditFooter />
      </section>
    </main>
  );
};

export default CatalogEditComponent;
