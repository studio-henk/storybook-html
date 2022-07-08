import { themes } from '@storybook/theming';
import '../styles/toolkit.css'

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export const parameters = {
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, appBg: 'black' },
    // Override the default light theme
    light: { ...themes.normal, appBg: 'white' },
    classTarget: 'html',
    stylePreview: true
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [
        'Intro',
        'Getting-Started',
        'Design Tokens', ['Intro', 'Color', 'FontSize'],
        'Components', ['Intro', 'Atoms'],
        'Templates Pages', ['Intro'],
        'Example'
      ],
    },
  },
  designToken: {
    defaultTab: 'Colors',
    disable: true
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  backgrounds: {
    default: 'transparent',
    values: [
      {
        name: 'white',
        value: '#ffffff',
      },
      {
        name: 'black',
        value: '#000000',
      },
      {
        name: 'example-light',
        value: '#cccccc',
      },
      {
        name: 'example-dark',
        value: '#444444',
      },
    ],
    grid: {
        cellSize: 4,
        opacity: 0.5,
        cellAmount: 7,
        offsetX: 0, // default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
        offsetY: 7, // default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
    },
  },
}