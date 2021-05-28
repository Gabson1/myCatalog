import {
  primaryColor,
  primaryTextColor,
  secondaryColor,
  disabledColor,
  black,
  white,
  primaryAccentColor,
  secondaryAccentColor,
  inputBackgroundColor,
  gold,
} from './palette';

const buttonDefaultStyles = {
  fontSize: '18px',
  fontWeight: 500,
  padding: '12px 40px',
  borderRadius: 0,
  border: `1px solid ${primaryColor}`,
  textTransform: 'none',
};

const buttonContained = {
  border: `1px solid ${primaryColor}`,
  borderRadius: '8px',
};

const buttonContainedPrimary = {
  ...buttonContained,
  backgroundColor: primaryAccentColor,
  border: '0',
};

const buttonContainedSecondary = {
  ...buttonContained,
  backgroundColor: black,
  border: '0',
  color: white,
};

const buttonContainedHover = {
  backgroundColor: secondaryColor,
  color: white,
};

const buttonContainedPrimaryHover = {
  ...buttonContainedHover,
  backgroundColor: primaryAccentColor,
};

const buttonContainedSecondaryHover = {
  ...buttonContainedHover,
  backgroundColor: secondaryAccentColor,
};

const buttonOutlined = {
  border: `1px solid ${primaryColor}`,
  borderRadius: '8px',
};

const buttonOutlinedPrimary = {
  ...buttonOutlined,
  border: `1px solid ${primaryAccentColor}`,
};

const buttonOutlinedHover = {
  backgroundColor: primaryAccentColor,
  border: '1px solid transparent',
};

const buttonDisabledDefault = {
  color: disabledColor,
  border: '0',
};

export const getOverrides = (theme) => ({
  MuiSnackbarContent: {
    message: {
      color: primaryTextColor,
      display: 'inline-block',
      maxWidth: 'calc(100% - 3rem)',
    },
    action: {
      marginRight: '0px',
      marginLeft: '0px',
      paddingLeft: '0px',
    },
  },
  MuiDialog: {
    paperWidthSm: {
      padding: '0px',
      margin: '0px',
    },
  },
  MuiDialogContent: {
    root: {
      '&:first-child': {
        paddingTop: '8px',
      },
    },
  },
  MuiPaper: {
    root: {
      border: `1px solid ${primaryColor}`,
    },
  },
  MuiTextField: {
    root: {
      '& fieldset': {
        border: 'none',
      },
      '& input': {
        backgroundColor: inputBackgroundColor,
      },
      '& .MuiOutlinedInput-multiline': {
        backgroundColor: inputBackgroundColor,
      },
      '& .MuiSelect-outlined': {
        backgroundColor: inputBackgroundColor,
      },
      '& .MuiFilledInput-root': {
        backgroundColor: inputBackgroundColor,
      },
    },
  },
  MuiButton: {
    root: {
      fontWeight: 500,
      padding: 0,
      borderRadius: 0,
      border: 0,
    },
    textPrimary: {
      height: '35px',
      fontSize: '1.15rem',
      fontWeight: 500,
      padding: 0,
      borderRadius: 0,
      border: 0,
      color: gold,
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    contained: {
      ...buttonDefaultStyles,
      ...buttonContained,
      '&:hover': {
        ...buttonContainedHover,
      },
      '&:disabled': {
        ...buttonDisabledDefault,
      },
    },
    containedPrimary: {
      ...buttonDefaultStyles,
      ...buttonContainedPrimary,
      '&:hover': {
        ...buttonContainedPrimaryHover,
      },
      '&:disabled': {
        ...buttonDisabledDefault,
      },
    },
    containedSecondary: {
      ...buttonDefaultStyles,
      ...buttonContainedSecondary,
      '&:hover': {
        ...buttonContainedSecondaryHover,
      },
      '&:disabled': {
        ...buttonDisabledDefault,
      },
    },
    outlined: {
      ...buttonDefaultStyles,
      ...buttonOutlined,
      '&:hover': {
        ...buttonOutlinedHover,
      },
      '&:disabled': {
        ...buttonDisabledDefault,
      },
    },
    outlinedPrimary: {
      ...buttonDefaultStyles,
      ...buttonOutlinedPrimary,
      '&:hover': {
        ...buttonOutlinedHover,
      },
      '&:disabled': {
        ...buttonDisabledDefault,
      },
    },
  },
  MuiTypography: {
    body2: {
      fontSize: '0.875rem',
      lineHeight: '150%',
      fontWeight: 400,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: '150%',
      fontWeight: 400,
    },
    caption: {
      fontSize: '1.125rem',
      lineHeight: '140%',
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: '0.8rem',
      lineHeight: '1.3rem',
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: '0.8rem',
      lineHeight: '1.3rem',
      fontWeight: 400,
    },
    h1: {
      fontSize: '1.875rem',
      lineHeight: '133%',
      fontWeight: 500,
    },
    h2: {
      fontSize: '1.75rem',
      lineHeight: '133%',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.6rem',
      lineHeight: '140%',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.5rem',
      lineHeight: '140%',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.25rem',
      lineHeight: '140%',
      fontWeight: 500,
    },
    h6: {
      fontSize: '1rem',
      lineHeight: '140%',
      fontWeight: 500,
    },
  },
  MuiCheckbox: {
    root: {
      color: primaryColor,
      '& .MuiIconButton-label': {
        backgroundColor: inputBackgroundColor,
        minWidth: '2rem',
        minHeight: '2rem',
        '& div': {
          border: 'none !important',
        },
      },
    },
  },
  MuiTableCell: {
    paddingCheckbox: {
      padding: '0.5rem',
    },
  },
  MuiRadio: {
    root: {
      color: primaryColor,
    },
  },
  MuiLink: {
    root: {
      color: gold,
    },
  },
  MuiToggleButton: {
    root: {
      color: theme.palette.text.primary,
      textTransform: 'none',
      margin: `0px 0px ${theme.spacing(1)}px !important`,
      fontSize: '1rem',
      display: 'flex',
      flexGrow: 1,
      flexBasis: '0px',
      borderRadius: '0px !important',
      border: `1px solid ${theme.palette.primary.main}`,
      '&:not(:last-child)': {
        borderRight: '0px',
      },
      '&$selected': {
        color: `${theme.palette.text.secondary} !important`,
        background: `${theme.palette.primary.main} !important`,
      },
    },
  },
  MuiToggleButtonGroup: {
    root: {
      border: 'none !important',
      borderRadius: '0px !important',
      backgroundColor: 'transparent',
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'stretch',
      padding: `${theme.spacing(1)}px 0px`,
    },
  },
  MuiCssBaseline: {
    '@global': {
      body: {
        backgroundColor: white,
      },
      hr: {
        color: black,
      },
    },
  },
});

export default getOverrides;
