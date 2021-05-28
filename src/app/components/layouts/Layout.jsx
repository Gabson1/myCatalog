import React from 'react';

import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import Header from './Header';
import Footer from './Footer';

const useClasses = makeStyles({
  wrapper: {
    position: 'relative',
    overflowX: 'hidden',
  },
  content: {
    border: '0px solid #ffffff',
    borderTopWidth: '64px',
    backgroundColor: '#ffffff',
  },
});

const Layout = ({ children }) => {
  const classes = useClasses();
  return (
    <section className="app">
      <CssBaseline />
      <Grid
        container
        spacing={0}
        className={classes.wrapper}
        direction="column"
        justify="flex-start"
        alignItems="stretch"
      >
        <Grid item className="header" xs={12}>
          <Header />
        </Grid>
        <Grid
          item
          className={classes.content}
          xs={12}
        >
          {children}
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </section>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
