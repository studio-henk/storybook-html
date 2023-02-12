import { addons } from '@storybook/addons';
// import { themes } from '@storybook/theming';
import henkTheme from './henkTheme';

addons.setConfig({
  theme: henkTheme,
  /*theme: themes.light,*/
});