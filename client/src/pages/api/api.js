import React from 'react';
import { Divider, Grid } from 'semantic-ui-react';

import SideBar from '../../component/sidebar/sidebar';
import { ApiItems } from './apiComponents/apiItems';
import { ApiFilter } from './apiComponents/apiFilter';

import './api.css';

const Api = () => {
  const itemWidth = 6;

  return (
    <main className="page">
      <SideBar />
      <section id="pageContent">
        <div id="headerContent">
          <h2>APIs: An overview of the external services you could use</h2>
        </div>
        <Grid id="apiContent">
          <Grid.Column className="gridItemWrapper" width={itemWidth / 3}>
            <h4>Filter options</h4>
            <Divider />
            <ApiFilter />
          </Grid.Column>
          <Grid.Column className="gridItemWrapper" width={itemWidth}>
            <h4>Results</h4>
            <Divider />
            <ApiItems />
          </Grid.Column>
        </Grid>
      </section>
    </main>
  );
};

export default Api;
