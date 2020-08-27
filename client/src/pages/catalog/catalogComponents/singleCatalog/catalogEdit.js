import React, {useCallback, useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { Table, Button, Icon } from 'semantic-ui-react';

import { setCatalogEditingAction } from '../../../../actions';

import '../../catalog.css';

export const CatalogEdit = () => {
  let [editing, setEditing] = useState(false);
  const dispatch = useDispatch();

  useEffect( () => {
    if (editing) dispatch(setCatalogEditingAction(editing))
  }, [editing]);

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
            onClick={() => setEditing(true)}
          >
            <Icon name='edit' /> Edit Catalog
          </Button>
          <Button disabled={!editing} size='small' primary>
            Save
          </Button>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  );
};

