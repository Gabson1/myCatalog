import _ from 'lodash';

import React from 'react';
import { useSelector } from 'react-redux';

import { Table } from 'semantic-ui-react';

import { selectCatalogList, selectCatalogId } from '../../../selectors/catalogSelectors';

import SideBar from '../../../component/sidebar/sidebar';
import BackArrow from '../../../component/arrow/arrow';

import CatalogEditHeader from './catalogEditHeader';
import CatalogEditBody from './catalogEditBody';

import './catalogEdit.css';

const CatalogEditComponent = () => {
  const catalogs = useSelector(selectCatalogList);
  const catalogId = useSelector(selectCatalogId);

  const filteredCatalog = _.filter(catalogs, { _id: catalogId });

  return (
    <main className="page">
      <SideBar />
      <section id="pageContent">
        <div id="headerContent">
          <h2>Catalog: An overview of your assets</h2>
        </div>
        <BackArrow />
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
      </section>
    </main>
  );
};

export default CatalogEditComponent;
