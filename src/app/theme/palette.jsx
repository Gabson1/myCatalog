export const mainBackgroundColor = 'rgba(255, 255, 255, 1)'; // #FFFFFF
export const transparentBackgroundColor = 'rgba(255, 255, 255, 0.87)'; // #FFFFFF, alpha
export const lightGrayBackgroundColor = 'rgba(126, 125, 132, 1)'; // #7E7D84
export const black = 'rgba(0, 0, 0, 1)'; // #000000
export const white = 'rgba(255, 255, 255, 1)'; // #FFFFFF
export const primaryColor = 'rgba(22, 17, 36, 1)'; // #161124
export const primaryTextColor = 'rgba(22, 17, 36, 1)'; // #161124
export const secondaryColor = 'rgba(0, 0, 0, 1)';
export const secondaryTextColor = 'rgba(22, 17, 36, 1)'; // #161124
export const disabledColor = 'rgba(0, 0, 0, 0.4)';
export const lightGrayTextColor = 'rgba(126, 125, 132, 0.5)'; // #7E7D84
export const disabledBackgroundColor = 'rgba(0, 0, 0, 0.1)';
export const primaryAccentColor = 'rgba(255, 148, 40, 1)'; // #FF9428
export const secondaryAccentColor = '#475e6c';
export const inputBackgroundColor = 'rgba(232, 237, 240, 1)';
export const primaryBorderColor = 'rgba(126, 125, 132, 0.5)'; // #7E7D84
export const greyBackgroundColor = '#d9d8d8';
export const alternatingBackgroundColor = 'rgba(255, 255, 255, 0.15)';
export const gold = '#CCB22F';
export const keyValueKeyColor = '#7E7D84';

export const colors = {
  greyBackgroundColor,
  mainBackgroundColor,
  transparentBackgroundColor,
  lightGrayBackgroundColor,
  black,
  white,
  primaryColor,
  primaryTextColor,
  secondaryColor,
  secondaryTextColor,
  disabledColor,
  lightGrayTextColor,
  disabledBackgroundColor,
  alternatingBackgroundColor,
  primaryAccentColor,
  secondaryAccentColor,
  inputBackgroundColor,
  primaryBorderColor,
  gold,
  keyValueKeyColor,
};

export const palette = {
  type: 'light',
  text: {
    primary: colors.primaryTextColor,
    secondary: colors.secondaryTextColor,
    disabled: colors.disabledColor,
    hint: colors.black,
    contrastText: colors.secondaryTextColor,
  },
  primary: {
    main: colors.primaryColor,
    contrastText: colors.primaryTextColor,
  },
  secondary: {
    main: colors.secondaryColor,
    contrastText: colors.secondaryTextColor,
  },
  background: {
    paper: colors.mainBackgroundColor,
  },
};

export default palette;
