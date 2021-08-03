import { create } from '@storybook/theming';

export const LATheme =  create({
  base: 'light',

  colorPrimary: '#0E1E58',
  colorSecondary: '#B1D7FB',

  // UI
  appBg: 'white',
  appContentBg: '#fff',
  appBorderColor: '#F1F3F9',
  appBorderRadius: 0,

  // Typography
  fontCode: 'monospace',

  // Text colors
  textColor: '#0B1847',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#0B1847',
  barSelectedColor: '#0B1847',
  barBg: '#f5f9fc',

  // Form colors
  inputBg: 'white',
  inputBorder: '#F3F3F4',
  inputTextColor: '#0B1847',
  inputBorderRadius: 4,

  brandTitle: 'My custom storybook',
  brandImage: './components/assets/images/logo.svg',
});
