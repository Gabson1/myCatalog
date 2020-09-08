import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

import { useModal } from '../../../hooks/useModal';

import CatalogExportModal from '../catalogModalComponents/catalogExportModal';

import './catalogEdit.css';

const CatalogEditFooter = ({ clickDelete }) => {
  const { show: showExport, RenderModal: RenderExport } = useModal();

  return (
    <React.Fragment>
      <Button
        floated="right"
        icon
        labelPosition="left"
        color="red"
        size="small"
        onClick={clickDelete}
      >
        <Icon name="angle double down" />
        Delete this catalog
      </Button>
      <Button
        floated="right"
        icon
        labelPosition="left"
        secondary
        size="small"
        onClick={showExport}
      >
        <Icon name="angle double down" />
        Export your catalog
      </Button>
      <RenderExport>
        <CatalogExportModal />
      </RenderExport>
    </React.Fragment>
  );
};

export default CatalogEditFooter;
