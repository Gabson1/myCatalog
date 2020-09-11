import React from 'react';
import { Divider, Grid } from 'semantic-ui-react';

import SideBar from '../../component/sidebar/sidebar';
// import { ChangesItems } from './dashboardComponents/lastChanges';
import { NewsItems } from './dashboardComponents/latestNews';

import './dashboard.css';

const Dashboard = () => {
  const itemWidth = 10;

  return (
    <main className="page">
      <SideBar />
      <section id="pageContent">
        <div id="headerContent">
          <h2>Dashboard: An overview of your portfolio</h2>
          <p>Click here if you want to adjust the way the data is displayed</p>
        </div>
        <Grid id="dashboardContent" centered>
          {/*
          <Grid.Column className="gridItemWrapper" width={itemWidth}>
            <h4>Win/Loss</h4>
            <Divider />
            <div><p>this is some placeholder text for win/loss</p></div>
          </Grid.Column>
          */}
          {/*
          <Grid.Column className="gridItemWrapper" width={itemWidth}>
            <h4>Last Changes</h4>
            <Divider />
            <ChangesItems />
          </Grid.Column>
          */}
          <Grid.Column className="gridItemWrapper" width={itemWidth}>
            <h4>Latest News</h4>
            <Divider />
            <NewsItems />
          </Grid.Column>
        </Grid>
      </section>
    </main>
  );
};

export default Dashboard;
