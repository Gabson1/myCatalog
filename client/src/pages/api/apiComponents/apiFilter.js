import React from 'react';
import _ from 'lodash';

import '../api.css';

const apiItems = [
  'api1',
  'api2',
  'api3',
  'api4',
  'api5',
  'api6',
  'api7',
  'api8',
  'api9',
  'api10',
];

export const ApiFilter = () => (
  <div className="componentWrapper">
    {apiItems.map((items) => (
      <div color={items} key={items} className="items">
        {_.capitalize(items)}
        <p>some dummy texts</p>
      </div>
    ))}
  </div>
);
