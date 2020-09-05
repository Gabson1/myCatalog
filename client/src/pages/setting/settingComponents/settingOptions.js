import React from 'react';
import _ from 'lodash';

import '../setting.css';

const settingOptions = [
  'setting1',
  'setting2',
  'setting3',
  'setting4',
];

export const SettingOptions = () => (
  <div className="componentWrapper">
    {settingOptions.map(items => (
      <div color={items} key={items} className="items">
        {_.capitalize(items)}
        <p>some dummy texts</p>
      </div>
    ))}
  </div>
);
