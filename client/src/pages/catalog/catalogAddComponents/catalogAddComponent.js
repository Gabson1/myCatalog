import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Divider } from 'semantic-ui-react';

import { selectCreatorId } from '../../../selectors/catalogSelectors';

import { addNewCatalogAction } from '../../../actions';

import useInput from '../../../hooks/useInput';

import SideBar from '../../../component/sidebar/sidebar';
import CatalogImport from './catalogImport';
import CatalogOverviewExport from '../catalogOverviewComponents/catalogOverviewExport';

import '../catalog.css';

const NewCatalog = () => {
  const dispatch = useDispatch();
  const userId = useSelector(selectCreatorId);
  const [assetType, setAssetType] = useState();
  const description = useInput('');

  const assetInformation = [
    { id: 1, label: 'Gold', value: 'gold' },
    { id: 2, label: 'Silver', value: 'silver' },
    { id: 3, label: 'Wine', value: 'wine' },
  ];

  const handleSaveModal = () => {
    const newCatalogData = {
      assetType,
      description: description.value,
      userId,
    };
    dispatch(addNewCatalogAction(newCatalogData));
  };

  return (
    <main className="page">
      <SideBar />
      <section id="pageContent">
        <div id="headerContent">
          <h2>Add a new catalog</h2>
        </div>
        <div style={{ display: 'flex' }}>
          <Form style={{ marginTop: '20px', width: '50%' }} onSubmit={handleSaveModal}>
            <Form.Group inline>
              <strong>Choose the asset type:</strong>
              {
                assetInformation.map(assetList => (
                  <Form.Radio
                    key={`asset-type-${assetList.id}`}
                    style={{ paddingLeft: '15px' }}
                    label={assetList.label}
                    value={assetList.value}
                    checked={assetType === assetList.value}
                    onClick={() => setAssetType(assetList.value)}
                  />

                ))
              }
            </Form.Group>
            <strong>Choose a description for your catalog:</strong>
            <Form.TextArea
              style={{ width: '80%' }}
              icon="table"
              iconPosition="left"
              value={description.value}
              onChange={description.onChange}
            />
            <Button
              content="Save"
              labelPosition="right"
              icon="checkmark"
              positive
            />
          </Form>
          <CatalogImport />
        </div>
      </section>
    </main>
  );
};

export default NewCatalog;
