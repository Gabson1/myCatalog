import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button, Header, Image, Modal, Form, Divider,
} from 'semantic-ui-react';

import { addNewCatalogAction } from '../../../actions';
import useInput from '../../../hooks/useInput';

import { selectCreatorId } from '../../../selectors/catalogSelectors';

import plusIcon from '../../../assets/svg/plus.svg';

import '../catalog.css';

const NewCatalog = () => {
  const [open, setOpen] = useState(false);
  const [showCatalogImport, setShowCatalogImport] = useState(false);
  const [assetType, setAssetType] = useState();
  const description = useInput('');
  const dispatch = useDispatch();
  const userId = useSelector(selectCreatorId);

  const assetInformation = [
    { id: 1, label: 'Gold', value: 'gold' },
    { id: 2, label: 'Silver', value: 'silver' },
    { id: 3, label: 'Wine', value: 'wine' },
  ];

  const handleCloseModal = () => {
    // Todo: save current selection to store
    setOpen(false);
  };

  const handleSaveModal = () => {
    const newCatalogData = {
      assetType,
      description: description.value,
      userId,
    };
    dispatch(addNewCatalogAction(newCatalogData));
    setOpen(false);
  };

  if (showCatalogImport) return <Redirect to="/catalog/import" exact strict />;

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={(
        <Button className="newCatalogButton" onClick={() => dispatch({ type: 'PREPARATION_ADD_NEW_CATALOG' })}>
          <Image src={plusIcon} size="tiny" />
        </Button>
       )}
    >
      <Modal.Header>Create a new asset table</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Header>Choose the asset type</Header>
          <Form>
            <Form.Group inline>
              {
                 assetInformation.map(assetList => (
                   <Form.Field key={`form-field-${assetList.id}`}>
                     <Form.Radio
                       style={{ paddingLeft: '15px' }}
                       label={assetList.label}
                       value={assetList.value}
                       checked={assetType === assetList.value}
                       onClick={() => setAssetType(assetList.value)}
                     />
                   </Form.Field>

                 ))
               }
            </Form.Group>
            <Divider />
            <Form.Input
              fluid
              icon="table"
              iconPosition="left"
              placeholder="Choose the description of your catalog"
              type="text"
              value={description.value}
              onChange={description.onChange}
            />
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          color="purple"
          floated="left"
          content="Import existing catalogs"
          onClick={() => setShowCatalogImport(true)}
        />
        <Button
          color="black"
          content="Cancel"
          labelPosition="right"
          icon="cancel"
          onClick={() => handleCloseModal()}
          negative
        />
        <Button
          content="Save"
          labelPosition="right"
          icon="checkmark"
          onClick={() => handleSaveModal()}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default NewCatalog;
