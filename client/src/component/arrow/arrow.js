import React from 'react';
import { Icon } from 'semantic-ui-react';

import history from '../../middlewares/history';

import './arrow.css';

const BackArrow = () => <Icon className="backArrow" name="arrow left" size="big" onClick={() => history.go(-1)} />;

export default BackArrow;
