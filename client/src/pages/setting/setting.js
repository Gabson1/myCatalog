import React from 'react';
import { Divider, Grid, Image } from 'semantic-ui-react';

import SideBar from '../../component/sidebar/sidebar';
import { SettingOptions } from './settingComponents/settingOptions';
import { SettingProfile } from './settingComponents/options/settingProfile';

import avatar from '../../assets/svg/avatar.svg';
import './setting.css';

const Setting = () => {
  const itemWidth = 6;

  return (
    <main className="page">
      <SideBar />
      <section id="pageContent">
        <div id="headerContent">
          <h2>Setting: Adjust your profile</h2>
        </div>
        <Grid id="apiContent">
          <Grid.Column className="gridItemWrapper" width={itemWidth / 3}>
            <h4>Setting options</h4>
            <Divider />
            <SettingOptions />
          </Grid.Column>
          <Grid.Column className="gridItemWrapper" width={itemWidth}>
            <h4>settingOption</h4>
            <Divider />
            <Image src={avatar} size="tiny" ui />
            <SettingProfile />
          </Grid.Column>
        </Grid>
      </section>
    </main>
  );
};

export default Setting;
