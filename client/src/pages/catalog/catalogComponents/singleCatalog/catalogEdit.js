import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Table, Button, Icon } from 'semantic-ui-react';

import '../../catalog.css';

export const CatalogEdit = () => {
  return (
    <Table.Footer fullWidth>
      <Table.Row>
        <Table.HeaderCell />
        <Table.HeaderCell colSpan='4'>
          <Button
            floated='right'
            icon
            labelPosition='left'
            primary
            size='small'
          >
            <Icon name='user' /> Add User
          </Button>
          <Button size='small'>Approve</Button>
          <Button disabled size='small'>
            Approve All
          </Button>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  );
};

