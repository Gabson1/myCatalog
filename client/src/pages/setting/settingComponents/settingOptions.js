import React from 'react';

import '../setting.css';

export const SettingOptions = ({ clickText }) => (
  <div className="componentWrapper">
    <div className="items">
      <p className="clickableText" onClick={clickText}>User Profile</p>
    </div>
    <div className="items">
      <p className="clickableText" onClick={clickText}>Privacy Settings</p>
    </div>
    <div className="items">
      <p className="clickableText" onClick={clickText}>Privacy Policy</p>
    </div>
  </div>
);
