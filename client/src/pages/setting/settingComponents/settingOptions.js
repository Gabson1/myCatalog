/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */

import React from 'react';

import '../setting.css';

export const SettingOptions = ({ clickText }) => (
  <div className="componentWrapper">
    <div className="items">
      <p className="clickableText" onClick={clickText} role="button" aria-hidden="false">User Profile</p>
    </div>
    <div className="items">
      <p className="clickableText" onClick={clickText} role="button" aria-hidden="false">Privacy Settings</p>
    </div>
    <div className="items">
      <p className="clickableText" onClick={clickText} role="button" aria-hidden="false">Privacy Policy</p>
    </div>
  </div>
);
