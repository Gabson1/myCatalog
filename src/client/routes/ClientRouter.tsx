import React, { useState, useEffect, useMemo } from 'react';
import {render} from "react-dom";
import { Router, Switch, Redirect } from 'react-router-dom';

import Settings from './Settings';
import Login from './Login';
import Integrations from './Settings';
import Profile from './Profile';
import Tables from './Tables';

type Props = {
  id?: string;
  key?: string;
  path?: string;
  showSideBar?: boolean;
  showHeader?: boolean;
  isProtected?: boolean;
}

function ClientRouter(props: Props) {
  const {
    id,
    key,
    path,
    showSideBar,
    showHeader,
    isProtected,
  } = props;
  return <div>...</div>
}

export default ClientRouter;
