import React from 'react';
import _ from 'lodash';

import '../dashboard.css';

const newsItems = [
  'news1',
  'news2',
  'news3',
  'news4',
  'news5',
  'news6',
  'news7',
  'news8',
  'news9',
  'news10',
];

export const NewsItems = () => (
  <div className="componentWrapper">
    {newsItems.map((items) => (
      <div color={items} key={items} className="items">
        {_.capitalize(items)}
        <p>some dummy texts</p>
      </div>
    ))}
  </div>
);
