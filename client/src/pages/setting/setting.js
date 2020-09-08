import React, { useState } from 'react';
import { Divider, Grid } from 'semantic-ui-react';

import SideBar from '../../component/sidebar/sidebar';
import { SettingOptions } from './settingComponents/settingOptions';
import { SettingProfile } from './settingComponents/options/settingProfile';
import { SettingPrivacy } from './settingComponents/options/settingPrivacy';

import './setting.css';

const Setting = () => {
  const [filterType, setFilterType] = useState('User Profile');
  const itemWidth = 6;

  const handleFilterTypeSetter = (eve) => {
    const filter = eve.target.innerText;
    setFilterType(filter);
  };

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
            <SettingOptions clickText={eve => handleFilterTypeSetter(eve)} />
          </Grid.Column>
          <Grid.Column className="gridItemWrapper" width={itemWidth}>
            { filterType === 'User Profile' ? <SettingProfile /> : <SettingPrivacy /> }
          </Grid.Column>
        </Grid>
      </section>
    </main>
  );
};

export default Setting;
