import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import {
  Button, Header, Image, Modal, Form, Divider,
} from 'semantic-ui-react';

import { addNewCatalogAction } from '../../../actions';
import useInput from '../../../hooks/useInput';

import plusIcon from '../../../assets/svg/plus.svg';

import '../catalog.css';

const NewCatalog = () => {
  const [open, setOpen] = useState(false);
  const [assetType, setAssetType] = useState();
  const description = useInput('');
  const dispatch = useDispatch();

  const assetInformation = [
    { id: 1, label: 'Gold', value: 'gold' },
    { id: 2, label: 'Silver', value: 'silver' },
    { id: 3, label: 'Wine', value: 'wine' },
    // { id: 4, label: 'Stocks', value: 'stocks' },
    // { id: 5, label: 'Real Estate', value: 'real estate' },
    // { id: 6, label: 'Watches', value: 'watches' },
  ];

  const handleCloseModal = () => {
    // Todo: save current selection to store
    setOpen(false);
  };

  const handleSaveModal = () => {
    const newCatalogData = {
      assetType,
      description: description.value,
    };
    dispatch(addNewCatalogAction(newCatalogData));
    setOpen(false);
  };

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
                 assetInformation.map((assetList) => (
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
              placeholder="Description of your catalog"
              type="text"
              value={description.value}
              onChange={description.onChange}
            />
          </Form>
        </Modal.Description>
      </Modal.Content>

      <Modal.Actions>
        <Button color="black" onClick={() => handleCloseModal()}>
          Cancel
        </Button>
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

export default connect(null)(NewCatalog);
