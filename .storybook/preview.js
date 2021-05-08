import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import '../styles/globals.scss';

const customViewports = {
  sm_376: {
    name: 'small (376px)',
    styles: {
      width: '376px',
      height: '1000px',
      boxSizing: 'content-box',
      border: 'solid 2px white',
      borderRadius: '10px',
      resize: 'both'
    },
    type: 'mobile'
  },
  md_768: {
    name: 'medium (768px)',
    styles: {
      width: '768px',
      height: '1000px',
      boxSizing: 'content-box',
      border: 'solid 2px white',
      borderRadius: '10px',
      resize: 'both'
    },
    type: 'tablet'
  },
  lg_1024: {
    name: 'large (1024px)',
    styles: {
      width: '1024px',
      height: '1000px',
      boxSizing: 'content-box',
      border: 'solid 2px white',
      borderRadius: '10px',
      resize: 'both'
    },
    type: 'desktop'
  },
  xl_1440: {
    name: 'x-large (1440px)',
    styles: {
      width: '1440px',
      height: '1000px',
      boxSizing: 'content-box',
      border: 'solid 2px white',
      borderRadius: '10px',
      resize: 'both'
    },
    type: 'desktop'
  }
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: { ...customViewports, ...INITIAL_VIEWPORTS },
    defaultViewport: 'lg_1024'
  }
};
