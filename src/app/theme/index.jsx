import React from 'react';

import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import { palette, colors } from './palette';
import { typography } from './typography';
import { props } from './props';
import { customComponents } from './customComponents';
import { getOverrides } from './overrides';

const themeName = 'Brickbuy GmbH';

const variables = {
  ...colors,
};

export const theme = createMuiTheme({
  themeName,
  palette,
  typography,
  overrides: {},
  props,
  customComponents,
  variables,
});

theme.overrides = getOverrides(theme);

export const ThemeProviderComponent = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    {children}
  </MuiThemeProvider>
);

export default ThemeProviderComponent;
