import React, { useState } from "react";
import { connect, useDispatch } from 'react-redux';
import { Button, Header, Image, Modal, Form } from "semantic-ui-react";

import { addNewTableAction } from '../../../actions';

import plusIcon from "../../../assets/plus.svg";

import '../catalog.css'

const AssetNewTable = () => {
  const [open, setOpen] = useState(false);
  const [assetType, setAssetType] = useState();
  const dispatch = useDispatch();

  const formInformation = [
    {
      id: 1,
      label: 'Gold',
      value: 'gold'
    },
    {
      id: 2,
      label: 'Silver',
      value: 'silver'
    },
    {
      id: 3,
      label: 'Stocks',
      value: 'stocks'
    },
    {
      id: 4,
      label: 'Real Estate',
      value: 'real estate'
    },
    {
      id: 5,
      label: 'Watches',
      value: 'watches'
    },
    {
      id: 6,
      label: 'Wine',
      value: 'wine'
    },
  ];

  const handleCloseModal = () => {
    // Todo: save current selection to store
    setOpen(false)
}

const handleSaveModal = () => {
    dispatch(addNewTableAction(assetType));
    // Todo: send request to api && save selection to store and update ui
    setOpen(false)
}

  return (
     <Modal
       onClose={() => setOpen(false)}
       onOpen={() => setOpen(true)}
       open={open}
       trigger={
         <Button className="newCatalogButton" onClick={() => console.log('hi')}>
           <Image src={plusIcon} size="tiny" />
         </Button>
       }
     >
       <Modal.Header>Create a new asset table</Modal.Header>
       <Modal.Content>
         <Modal.Description>
           <Header>Choose the asset type</Header>
           <Form>
             <Form.Group inline>
               {
                 formInformation.map((formData) => (
                   <Form.Field key={`form-field-${formData.id}`}>
                     <Form.Radio
                       style={{ paddingLeft: '15px' }}
                       label={formData.label}
                       value={formData.value}
                       checked={assetType === formData.value}
                       onClick={() => setAssetType(formData.value)}
                     />
                   </Form.Field>
                 ))
               }
             </Form.Group>
           </Form>
         </Modal.Description>
       </Modal.Content>

       <Modal.Actions>
         <Button color='black' onClick={() => handleCloseModal()}>
           Cancel
         </Button>
         <Button
           content="Save"
           labelPosition='right'
           icon='checkmark'
           onClick={() => handleSaveModal()}
           positive
         />
       </Modal.Actions>
     </Modal>
   );
};

export default connect(null)(AssetNewTable);