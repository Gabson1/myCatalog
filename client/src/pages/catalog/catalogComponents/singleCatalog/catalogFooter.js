import React from 'react';
import { Table, Button, Icon } from 'semantic-ui-react';

import { useModal } from '../../../../hooks/useModal';

import '../../catalog.css';
import CatalogEditModal from '../catalogEditModal';

export const CatalogFooter = () => {
  const { show, RenderModal } = useModal();

  return (
    <Table.Footer fullWidth>
      <Table.Row>
        <Table.HeaderCell />
        <Table.HeaderCell colSpan="4">
          <Button
            floated="right"
            icon
            labelPosition="left"
            primary
            size="small"
            onClick={show}
          >
            <Icon name="edit" />
            {' '}
            Edit Catalog
          </Button>
          <RenderModal>
            <CatalogEditModal />
          </RenderModal>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  );
};
