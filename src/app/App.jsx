import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';

import { ApolloProvider } from '@apollo/client';

import Route from 'sharedComponents/Route';
import PrivateRoute from 'sharedComponents/PrivateRoute';
import ScrollToTop from 'sharedComponents/ScrollToTop';

import ThemeProvider from './theme';

import Layout from './components/layouts/Layout';

import { getClient } from './ApolloClient';

import IntlProvider from './Intl';
import { UserProfileProvider } from './contexts/UserProfile';
import { ConfigProvider } from './contexts/Config';
import { LoginProvider } from './contexts/Login';

const Home = React.lazy(() => import(/* webpackChunkName: "home" */ './components/views/home'));

const App = () => (
  <div className="portal-ui animated fadeIn">
    <ConfigProvider>
      <ApolloProvider client={getClient()}>
        <IntlProvider>
          <ThemeProvider>
            <UserProfileProvider>
              <Router>
                <ScrollToTop>
                  <LoginProvider>
                    <Layout>
                      <Switch>
                        <Route exact path="/" component={Home} />
                        <Redirect to="/not-found" />
                      </Switch>
                    </Layout>
                  </LoginProvider>
                </ScrollToTop>
              </Router>
            </UserProfileProvider>
          </ThemeProvider>
        </IntlProvider>
      </ApolloProvider>
    </ConfigProvider>
  </div>
);

export default App;
