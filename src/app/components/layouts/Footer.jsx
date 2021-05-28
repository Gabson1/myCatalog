import React from 'react';
import { injectIntl } from 'react-intl';
import compose from 'lodash.flowright';

import { makeStyles, useTheme } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

import FormattedMessage from 'sharedComponents/FormattedMessage';

import MangopayLogoImage from 'assets/static/mangopay-Logo.png';
import BrickbuyLogo from 'sharedComponents/icons/Logo';
import { primaryColor, white, lightGrayBackgroundColor } from '../../theme/palette';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  link: {
    '& a': {
      color: white,
      fontSize: '18px',
      lineHeight: '140%',
    },
  },
  brickbuyLogo: {
    backgroundColor: primaryColor,
    padding: `2rem ${theme.spacing(3)}px`,
    '& svg': {
      width: 'auto',
      height: '25px',
    },
  },
  topFooter: {
    backgroundColor: primaryColor,
    padding: `2rem ${theme.spacing(3)}px 2rem ${theme.spacing(3)}px`,
    height: '100%',
  },
  middleFooter: {
    backgroundColor: lightGrayBackgroundColor,
    padding: `2rem ${theme.spacing(3)}px`,
  },
  lowerFooter: {
    padding: `3rem ${theme.spacing(3)}px`,
    '& p': {
      fontSize: '14px',
      lineHeight: '150%',
    },
  },
  mangopayLogo: {
    width: '100%',
    height: 'auto',
    maxWidth: '40rem',
    maxHeight: '4rem',
    marginLeft: '-7px',
  },
}));

const Footer = ({ intl }) => {
  const theme = useTheme();
  const classes = useStyles();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid container direction="column" className={classes.root}>
      <Grid item xs={12} className={classes.brickbuyLogo}>
        <BrickbuyLogo />
      </Grid>
      <Grid item xs={12} className={`${classes.topFooter} ${classes.link}`}>
        <Grid container spacing={2} direction="row">
          <Grid item xs={12} md={2}>
            <Link
              href="/how-it-works"
              data-qa="how-it-works-link"
              target="_blank"
              rel="noreferrer"
            >
              {intl.formatMessage({ id: 'footer.link.how.it.works' })}
            </Link>
          </Grid>
          <Grid item xs={12} md={2}>
            <Link
              href="/trade/list"
              data-qa="invest-link"
              target="_blank"
              rel="noreferrer"
            >
              {intl.formatMessage({ id: 'footer.link.invest' })}
            </Link>
          </Grid>
          <Grid item xs={12} md={2}>
            <Link
              href="/estates"
              color="primary"
              data-qa="offer-real-estate-link"
              target="_blank"
              rel="noreferrer"
            >
              {intl.formatMessage({ id: 'footer.link.offer.real.estate' })}
            </Link>
          </Grid>
          <Grid item xs={12} md={2}>
            <Link
              href="/executive-team"
              color="primary"
              data-qa="executive-team-link"
              target="_blank"
              rel="noreferrer"
            >
              {intl.formatMessage({ id: 'footer.link.executive.team' })}
            </Link>
          </Grid>
          <Grid item xs={12} md={2}>
            <Link
              href="/partners"
              color="primary"
              data-qa="partners-link"
              target="_blank"
              rel="noreferrer"
            >
              {intl.formatMessage({ id: 'footer.link.partners' })}
            </Link>
          </Grid>
          <Grid item xs={12} md={2}>
            <Link
              href="/contact"
              color="primary"
              data-qa="contact-link"
              target="_blank"
              rel="noreferrer"
            >
              {intl.formatMessage({ id: 'footer.link.contact' })}
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className={`${classes.middleFooter} ${classes.link}`}>
        <Grid container spacing={2} direction="row">
          <Grid item xs={12} md={2}>
            <FormattedMessage
              id="footer.link.terms"
              type="plain"
              values={{
                'terms-link': (msg) => (
                  <Link
                    href={intl.formatMessage({ id: 'generic.terms.url' })}
                    color="primary"
                    data-qa="terms-link"
                    target="_blank"
                  >
                    {msg}
                  </Link>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <FormattedMessage
              id="footer.link.privacy.policy"
              type="plain"
              values={{
                'privacy-link': (msg) => (
                  <Link
                    href={intl.formatMessage({ id: 'generic.privacyPolicy.url' })}
                    color="primary"
                    data-qa="terms-link"
                    target="_blank"
                  >
                    {msg}
                  </Link>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <FormattedMessage
              id="footer.link.imprint"
              type="plain"
              values={{
                'imprint-link': (msg) => (
                  <Link
                    href="/imprint"
                    color="primary"
                    data-qa="terms-link"
                    target="_blank"
                  >
                    {msg}
                  </Link>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <Link
              style={{ cursor: 'pointer' }}
              color="primary"
              data-qa="cookie-settings-link"
              onClick={() => window.cookiehub.openSettings()}
              target="_blank"
              rel="noreferrer"
            >
              {intl.formatMessage({ id: 'footer.link.cookie.settings' })}
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.lowerFooter}>
        <Grid container spacing={isSmallScreen ? 3 : 1} direction="row">
          <Grid item xs={12}>
            <FormattedMessage
              id="footer.legal.text.1"
              values={{
                'terms-link': (msg) => (
                  <Link
                    href={intl.formatMessage({ id: 'generic.terms.url' })}
                    color="primary"
                    data-qa="terms-link"
                    target="_blank"
                  >
                    {msg}
                  </Link>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormattedMessage
              id="footer.legal.text.2"
              values={{
                'google-privacy-link': (msg) => (
                  <Link
                    href={intl.formatMessage({ id: 'footer.link.google.privacy.policy' })}
                    color="primary"
                    data-qa="google-privacy-policy-link"
                    target="_blank"
                  >
                    {msg}
                  </Link>
                ),
                'google-use-link': (msg) => (
                  <Link
                    href={intl.formatMessage({ id: 'footer.link.google.terms' })}
                    color="primary"
                    data-qa="google-terms-link"
                    target="_blank"
                  >
                    {msg}
                  </Link>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormattedMessage
              id="footer.legal.text.3"
              values={{
                'mango-pay-terms': (msg) => (
                  <Link
                    href={intl.formatMessage({ id: 'footer.link.mangopay.terms' })}
                    color="primary"
                    data-qa="mangopay-terms-link"
                    target="_blank"
                  >
                    {msg}
                  </Link>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormattedMessage id="footer.text.brickbuy.signed" />
          </Grid>
          <Grid item xs={12}>
            <img src={MangopayLogoImage} className={classes.mangopayLogo} alt="Mangopay logo" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default compose(injectIntl)(Footer);
