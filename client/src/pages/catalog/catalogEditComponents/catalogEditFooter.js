import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

import { useModal } from '../../../hooks/useModal';

import CatalogEditModal from '../catalogModalComponents/catalogEditModal';

import './catalogEdit.css';

const CatalogEditFooter = () => {
  const { show: showEdit, RenderModal: RenderEdit } = useModal();
  const { show: showExport, RenderModal: RenderExport } = useModal();

  return (
    <React.Fragment>
      <Button
        floated="right"
        icon
        labelPosition="left"
        primary
        size="small"
        onClick={showEdit}
      >
        <Icon name="plus" />
        Edit your catalog
      </Button>
      <RenderEdit>
        <CatalogEditModal />
      </RenderEdit>
      <RenderExport>
        <CatalogExportModal />
      </RenderExport>
    </React.Fragment>
  );
};

export default CatalogEditFooter;
