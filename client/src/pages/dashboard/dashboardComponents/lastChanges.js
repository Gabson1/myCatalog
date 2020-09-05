import React from 'react';
import _ from 'lodash';

import '../dashboard.css';

const changesItems = [
  'change1',
  'change2',
  'change3',
  'change4',
  'change5',
  'change6',
  'change7',
  'change8',
  'change9',
  'change10',
];

export const ChangesItems = () => (
  <div className="componentWrapper">
    {changesItems.map(items => (
      <div color={items} key={items} className="items">
        {_.capitalize(items)}
        <p>some dummy texts</p>
      </div>
    ))}
  </div>
);
