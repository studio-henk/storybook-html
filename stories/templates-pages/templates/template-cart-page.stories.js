import { withDesign } from "storybook-addon-designs";
import {BADGE} from '@geometricpanda/storybook-addon-badges';
import { createTemplateCartPage } from './template-cart-page';

export default {
  title: 'Templates Pages/Templates/Template Cart page_hidden',
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
  },
  decorators: [withDesign],
};

const Template = ({ title, text, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<p>${label}</p>`;
  return createTemplateCartPage({ title, text, ...args });
};

export const Base = Template.bind({});
Base.args = {
    title: 'Shopping Cart',
    className: 'h2 skeleton',
    text: 'This is the cart page.',
};

/*
export const About = Template.bind({});
About.args = {
    title: 'About us',
    text: 'This is an About page.',
};*/
