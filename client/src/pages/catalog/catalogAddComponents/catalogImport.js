import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form } from 'semantic-ui-react';
import { importCatalogAction } from '../../../actions';
import { selectCreatorId, selectCatalogList } from '../../../selectors/catalogSelectors';

import '../catalog.css';

const CatalogImport = () => {
  const dispatch = useDispatch();
  const catalogs = useSelector(selectCatalogList);
  const userId = useSelector(selectCreatorId);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSetter = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleImportSubmit = () => {
    dispatch(importCatalogAction(selectedFile));
  };

  return (
    <div style={{ width: '50%' }}>
      <h3>You can also import your existing catalogs</h3>
      <Form onSubmit={handleImportSubmit}>
        <div>
          <p>First choose the file type you want to upload</p>
          <Form.Radio
            label="CSV"
            value="csv"
          />
          <Form.Radio
            label="TSV"
            value="tsv"
          />
        </div>
        <div>
          <p>Now choose the file you want to upload</p>
          <input type="file" onChange={handleFileSetter} />
        </div>
        <Button
          content="Upload imported catalogs"
          color="teal"
        />
      </Form>
    </div>
  );
};

export default CatalogImport;
