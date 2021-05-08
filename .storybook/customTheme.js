import { create } from '@storybook/theming';

export default create({
  base: 'dark',

  colorPrimary: '#fff',
  colorSecondary: '#50ADE0',

  // UI
  appBg: '#111',
  appContentBg: '#060707',
  appBorderColor: '#ccc',
  appBorderRadius: 5,
  appTextColor: '#fff',

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#fff',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#fff',
  barSelectedColor: 'rgba(255,255,255,0.9)',
  barBg: '#111',

  // Form colors
  inputBg: '#111',
  inputBorder: '#ccc',
  inputTextColor: 'rgba(255,255,255,0.9)',
  inputBorderRadius: 5,

  brandTitle: 'BOOKAID UI',
  brandUrl: 'https://example.com'
});
