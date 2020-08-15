import React from 'react';
import { Grid, Button, Icon, Popup } from 'semantic-ui-react';

import '../catalog.css';

export const SingleCatalog = (props) => {
  const {
    tableHeader,

  } = props;

  const rowHeader = [
    'column1',
    'column2',
    'column3',
    'column4',
    'column5'
  ];

  const rowContent = [
    'content1',
    'content2',
    'content3',
    'content4',
    'content5',
    'content6',
    'content7',
    'content8',
    'content9',
    'content10',
  ];

  return (
    <Grid>
      <Grid.Row columns="five">
        {
          rowHeader.map(columns => (
            <Grid.Column key={columns}>
              {columns}
            </Grid.Column>
          ))
        }
      </Grid.Row>
      <Grid.Row columns="five">
        {
          rowContent.map(contents => (
            <Grid.Column key={contents}>
              {contents}
            </Grid.Column>
          ))
        }
      </Grid.Row>
    </Grid>
  );
};
