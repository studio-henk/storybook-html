import { withDesign } from "storybook-addon-designs";
import {BADGE} from '@geometricpanda/storybook-addon-badges';
import { createCartPage } from './page-cart';

export default {
  title: 'Templates Pages/Pages/Cart page',
  parameters: {
        badges: [BADGE.BETA],
        docs: {
            description: {
                component: 'The template for cart page.',
            },
        },
    },
  argTypes: {
    title: {control: 'text'},
    badgeNumber: {control: 'number'}
  },
  decorators: [withDesign],
};

const Template = ({ ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<p>${label}</p>`;
  return createCartPage({ ...args });
};

export const Base = Template.bind({});
Base.args = {
    title: 'Shopping Cart',
    badgeNumber: '4',
};

/*
export const About = Template.bind({});
About.args = {
    title: 'About us',
    text: 'This is an About page.',
};*/
