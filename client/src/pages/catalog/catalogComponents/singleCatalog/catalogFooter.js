import React from 'react';
import { Table, Button, Icon } from 'semantic-ui-react';

import CatalogEditModal from '../catalogModal/catalogEditModal';
import CatalogAddModal from '../catalogModal/catalogAddModal';

import { useModal } from '../../../../hooks/useModal';

import '../../catalog.css';

export const CatalogFooter = () => {
  const { show: showAdd, RenderModal: RenderAdd } = useModal();
  const { show: showEdit, RenderModal: RenderEdit } = useModal();

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
            onClick={showAdd}
          >
            <Icon name="plus" />
            Add new assets
          </Button>
          <Button
            floated="right"
            icon
            labelPosition="left"
            primary
            size="small"
            onClick={showEdit}
          >
            <Icon name="edit" />
            Edit Catalog
          </Button>
          <RenderAdd>
            <CatalogAddModal />
          </RenderAdd>
          <RenderEdit>
            <CatalogEditModal />
          </RenderEdit>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  );
};
