import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form } from 'semantic-ui-react';
import { importCatalogAction, exportCatalogAction } from '../../../actions';
import { selectCreatorId, selectCatalogList } from '../../../selectors/catalogSelectors';
import SideBar from '../../../component/sidebar/sidebar';

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

  const handleExportSubmit = () => {
    dispatch(exportCatalogAction(userId));
  };

  return (
    <main className="page">
      <SideBar />
      <section id="pageContent">
        <div id="headerContent">
          <h2>Import your existing catalogs</h2>
          <p>Once you have created catalogs, you can even export them</p>
          <p>Simply follow the instructions below</p>
        </div>
        <div style={{
          display: 'flex', marginTop: '20px', textAlign: 'center', height: '500px',
        }}
        >
          <div style={{ width: '50%' }}>
            <h3>Import</h3>
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
          <div style={{ border: '1px dotted black', height: '100%' }} />
          <div style={{ width: '50%' }}>
            <h3>Export</h3>
            <p>{ `You currently have ${catalogs ? catalogs.length : '0'} catalogs stored in the db`}</p>
            <Button
              content="Export all catalogs"
              onClick={() => handleExportSubmit()}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default CatalogImport;
