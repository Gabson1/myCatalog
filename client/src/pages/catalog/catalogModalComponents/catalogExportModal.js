import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { exportCatalogAction } from '../../../actions';
import { selectCreatorId, selectCatalogList } from '../../../selectors/catalogSelectors';

import '../catalog.css';

const CatalogExportModal = () => {
  const dispatch = useDispatch();
  const catalogs = useSelector(selectCatalogList);
  const userId = useSelector(selectCreatorId);

  const handleExportSubmit = () => {
    dispatch(exportCatalogAction(userId));
  };

  return (
    <div style={{ width: '50%' }}>
      <h3>Export</h3>
      <p>{ `You currently have ${catalogs ? catalogs.length : '0'} catalogs stored in the db`}</p>
      <Button
        content="Export all catalogs"
        onClick={() => handleExportSubmit()}
      />
    </div>
  );
};

export default CatalogExportModal;
