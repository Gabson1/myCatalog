import React, { useState, useEffect, useMemo } from 'react';
import { Router, Switch, Redirect } from 'react-router-dom';

import Settings from './Settings';
import Login from './Login';
import Integrations from './Settings';
import Profile from './Profile';
import Tables from './Tables';

type Props = {
  id: string;
  key: string;
  path: string;
  showSideBar: boolean;
  showHeader: boolean;
  protected: boolean;
}

function ClientRouter() {

}

export default ClientRouter;