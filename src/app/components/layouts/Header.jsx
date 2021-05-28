import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import compose from 'lodash.flowright';
import { useHistory, useLocation } from 'react-router';

import { makeStyles, useTheme } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Hidden from '@material-ui/core/Hidden';
import Toolbar from '@material-ui/core/Toolbar';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import DrawerMenu from 'sharedComponents/DrawerMenu';

import HelpSharpIcon from '@material-ui/icons/LiveHelpSharp';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';

import BrickbuyLogo from 'sharedComponents/icons/Logo';
import LoginIcon from 'sharedComponents/icons/LoginIcon';
import IconSettings from 'sharedComponents/icons/IconSettings';
import IconTransaction from 'sharedComponents/icons/IconTransaction';
import IconLogout from 'sharedComponents/icons/IconLogout';
import IconContact from 'sharedComponents/icons/IconContact';
import IconCashIn from 'sharedComponents/icons/IconCashIn';
import IconCashOut from 'sharedComponents/icons/IconCashOut';
import ContextMenu from 'sharedComponents/ContextMenu';
import NavLink from 'sharedComponents/NavLink';

import { WithUserProfileContext } from '../contexts/UserProfile';
import { WithLoginContext } from '../contexts/Login';
import useAuthClient from '../../Auth/useAuthClient';
import DepotValues from '../views/depotValues';

import { getConfig } from '../../configProvider';

const useClasses = makeStyles({
  root: {
    backgroundColor: '#ffffff',
    height: '50px',
    width: '100%',
    position: 'fixed',
    top: '0px',
    zIndex: '1299',
  },
  loginRegisterButton: {
    border: '0',
  },
  logo: {
    width: 'auto',
    height: '25px',
    margin: '10px 20px 10px 0px',
  },
});

export const HeaderComponent = (
  {
    userProfileContext,
    loginContext,
  },
) => {
  const theme = useTheme();
  const history = useHistory();

  const authClient = useAuthClient();

  const collapseMenu = useMediaQuery(theme.breakpoints.down('md'));

  const { pathname } = useLocation();
  const [isOnHomePage, setIsOnHomePage] = useState(false);
  const [isOnMaintenancePage, setIsOnMaintenancePage] = useState(false);

  useEffect(() => {
    setIsOnHomePage(pathname === '/');
    setIsOnMaintenancePage(pathname === '/maintenance');
  }, [pathname]);

  const classes = useClasses();

  const { maintenanceMode } = getConfig();

  return (
    <Toolbar className={classes.root}>
      <Grid container spacing={1} justify="flex-start" alignItems="center" wrap="nowrap">
        <Grid item align="left">
          <ButtonBase
            onClick={() => {
              if (isOnMaintenancePage) {
                window.location.pathname = '/';
              } else {
                history.push('/');
              }
            }}
          >
            <BrickbuyLogo className={classes.logo} black />
          </ButtonBase>
        </Grid>
        <Hidden xsDown>
          {!isOnHomePage && !isOnMaintenancePage && userProfileContext.isLoggedIn() && (
            <Grid item xs={3}>
              {userProfileContext.isVerified() && (
                <DepotValues history={history} />
              )}
            </Grid>
          )}
        </Hidden>
        {!isOnMaintenancePage && !collapseMenu && !userProfileContext.isLoggedIn() && (
          <Grid item xs>
            <Grid container justify="flex-end" alignItems="center" spacing={4} wrap="nowrap">
              <Grid item>
                <NavLink
                  labelKeyId="navigation.button.howItWorks"
                  target="/how-it-works"
                  active
                  data-qa="how-it-works-menu-button"
                />
              </Grid>
              <Grid item>
                <NavLink
                  labelKeyId="navigation.button.trade"
                  target="/trade/list"
                  data-qa="trade-list-menu-button"
                  active
                />
              </Grid>
              <Grid item>
                <NavLink
                  labelKeyId="navigation.button.contact"
                  target="/contact"
                  active
                  data-qa="contact-menu-button"
                />
              </Grid>
              <Grid item>
                <NavLink
                  labelKeyId="navigation.button.faq"
                  target="/faq"
                  active
                  data-qa="faq-menu-button"
                />
              </Grid>
              <Grid item>
                <NavLink
                  labelKeyId="navigation.button.login"
                  onClick={() => {
                    if (maintenanceMode) {
                      history.push('/maintenance');
                      return;
                    }

                    loginContext.showLoginOverlay();
                  }}
                  active
                  icon={<LoginIcon />}
                  data-qa="login-button"
                />
              </Grid>
              <Grid item>
                <NavLink
                  labelKeyId="navigation.button.register"
                  target="/register"
                  active
                  icon={(<AccessibilityNewIcon style={{ fontSize: '2rem' }} />)}
                  data-qa="register-button"
                />
              </Grid>
            </Grid>
          </Grid>
        )}
        {!isOnMaintenancePage && !collapseMenu && userProfileContext.isLoggedIn() && (
          <Grid item xs>
            <Grid container justify="flex-end" alignItems="center" spacing={4} wrap="nowrap">
              <Grid item>
                <NavLink
                  labelKeyId="navigation.button.dashboard"
                  target="/dashboard"
                  active
                  data-qa="dashboard-menu-button"
                />
              </Grid>
              <Grid item>
                <NavLink
                  labelKeyId="navigation.button.trade"
                  target="/trade/list"
                  data-qa="trade-list-menu-button"
                  active
                />
              </Grid>
              <Grid item>
                <NavLink
                  labelKeyId="navigation.button.ipo"
                  target="/estates"
                  data-qa="estates-menu-button"
                  active
                />
              </Grid>
              <Grid item>
                <ContextMenu
                  menuName="personal-menu"
                  icon={<MenuSharpIcon color="primary" />}
                  entries={[
                    {
                      qa: 'settings',
                      labelKeyId: 'navigation.button.settings',
                      action: () => history.push('/settings'),
                      icon: (<IconSettings />),
                    },
                    {
                      qa: 'transactions',
                      labelKeyId: 'navigation.button.transactions',
                      action: () => history.push('/transactions'),
                      icon: (<IconTransaction />),
                    },
                    {
                      qa: 'deposit',
                      labelKeyId: 'navigation.button.deposit',
                      action: () => history.push('/deposit'),
                      icon: (<IconCashIn />),
                    },
                    {
                      qa: 'withdraw',
                      labelKeyId: 'navigation.button.withdraw',
                      action: () => history.push('/withdraw'),
                      icon: (<IconCashOut />),
                    },
                    {
                      qa: 'contact',
                      labelKeyId: 'navigation.button.contact',
                      action: () => history.push('/contact-form'),
                      icon: (<IconContact />),
                    },
                    {
                      qa: 'howItWorks',
                      labelKeyId: 'navigation.button.howItWorks',
                      action: () => history.push('/how-it-works'),
                      icon: (<HelpSharpIcon
                        style={{
                          fontSize: '2rem',
                          marginLeft: '-2px',
                        }}
                        color="primary"
                      />),
                    },
                    {
                      qa: 'inviteFriends',
                      labelKeyId: 'navigation.button.inviteFriends',
                      action: () => history.push('/invite'),
                      icon: (<PersonAddIcon
                        style={{
                          fontSize: '2rem',
                          marginLeft: '-5px',
                        }}
                        color="primary"
                      />),
                    },
                    {
                      qa: 'fqq',
                      labelKeyId: 'navigation.button.faq',
                      action: () => history.push('/faq'),
                      icon: (<QuestionAnswerIcon
                        style={{
                          fontSize: '2rem',
                          marginLeft: '-2px',
                        }}
                        color="primary"
                      />),
                    },
                    {
                      qa: 'logout',
                      labelKeyId: 'navigation.button.logout',
                      action: () => authClient.logout(),
                      icon: (<IconLogout />),
                    },
                  ]}
                />
              </Grid>
            </Grid>
          </Grid>
        )}

        {!isOnMaintenancePage && collapseMenu && userProfileContext.isLoggedIn() && (
          <Grid item xs>
            <Grid container justify="flex-end" alignItems="center" spacing={4} wrap="nowrap">
              <Grid item>
                <DrawerMenu
                  menuName="main-menu"
                  anchor="right"
                  entries={[
                    {
                      qa: 'dashboard',
                      labelKeyId: 'navigation.button.dashboard',
                      action: () => history.push('/dashboard'),
                    },
                    {
                      qa: 'trade',
                      labelKeyId: 'navigation.button.trade',
                      action: () => history.push('/trade/list'),
                    },
                    {
                      qa: 'ipo',
                      labelKeyId: 'navigation.button.ipo',
                      action: () => history.push('/estates'),
                    },
                    {
                      qa: 'settings',
                      labelKeyId: 'navigation.button.settings',
                      action: () => history.push('/settings'),
                    },
                    {
                      qa: 'transactions',
                      labelKeyId: 'navigation.button.transactions',
                      action: () => history.push('/transactions'),
                    },
                    {
                      qa: 'deposit',
                      labelKeyId: 'navigation.button.deposit',
                      action: () => history.push('/deposit'),
                    },
                    {
                      qa: 'withdraw',
                      labelKeyId: 'navigation.button.withdraw',
                      action: () => history.push('/withdraw'),
                    },
                    {
                      qa: 'contact',
                      labelKeyId: 'navigation.button.contact',
                      action: () => history.push('/contact-form'),
                    },
                    {
                      qa: 'executiveTeam',
                      labelKeyId: 'navigation.button.executiveTeam',
                      action: () => history.push('/executive-team'),
                    },
                    {
                      qa: 'howItWorks',
                      labelKeyId: 'navigation.button.howItWorks',
                      action: () => history.push('/how-it-works'),
                    },
                    {
                      qa: 'inviteFriends',
                      labelKeyId: 'navigation.button.inviteFriends',
                      action: () => history.push('/invite'),
                    },
                    {
                      qa: 'faq',
                      labelKeyId: 'navigation.button.faq',
                      action: () => history.push('/faq'),
                    },
                    {
                      qa: 'logout',
                      labelKeyId: 'navigation.button.logout',
                      action: () => authClient.logout(),
                      showAsButton: true,
                    },
                  ]}
                />
              </Grid>
            </Grid>
          </Grid>
        )}

        {!isOnMaintenancePage && collapseMenu && !userProfileContext.isLoggedIn() && (
          <Grid item xs>
            <Grid container justify="flex-end" alignItems="center" spacing={1} wrap="nowrap">
              <Grid item>
                <DrawerMenu
                  menuName="main-menu"
                  anchor="right"
                  entries={[
                    {
                      qa: 'howItWorks',
                      labelKeyId: 'navigation.button.howItWorks',
                      action: () => history.push('/how-it-works'),
                    },
                    {
                      qa: 'invest',
                      labelKeyId: 'navigation.button.trade',
                      action: () => history.push('/trade/list'),
                    },
                    {
                      qa: 'ipo',
                      labelKeyId: 'navigation.button.ipo',
                      action: () => history.push('/estates'),
                    },
                    {
                      qa: 'contact',
                      labelKeyId: 'navigation.button.contact',
                      action: () => history.push('/contact'),
                    },
                    {
                      qa: 'faq',
                      labelKeyId: 'navigation.button.faq',
                      action: () => history.push('/faq'),
                    },
                    {
                      qa: 'registration',
                      labelKeyId: 'navigation.button.register',
                      action: () => history.push('/register'),
                      showAsButton: true,
                    },
                    {
                      qa: 'login',
                      labelKeyId: 'navigation.button.login',
                      action: () => history.push('/login'),
                      showAsButton: true,
                    },
                  ]}
                />
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Toolbar>
  );
};

HeaderComponent.propTypes = {
  userProfileContext: PropTypes.shape({
    isLoggedIn: PropTypes.func.isRequired,
  }).isRequired,
  loginContext: PropTypes.shape({
    showLoginOverlay: PropTypes.func.isRequired,
  }).isRequired,
};

HeaderComponent.defaultProps = {
};

export default compose(
  WithUserProfileContext,
  WithLoginContext,
)(HeaderComponent);
