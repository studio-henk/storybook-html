import { withDesign } from "storybook-addon-designs";
import {BADGE} from '@geometricpanda/storybook-addon-badges';
import { createCDPage } from './page-customerdata';

export default {
  title: 'Templates Pages/Pages/Customer data page',
  parameters: {
        badges: [BADGE.BETA],
        docs: {
            description: {
                component: 'The template for customer data page.',
            },
        },
    },
  argTypes: {
    title: {control: 'text'},
    cartButtonHref: {control: 'text'},
  },
  decorators: [withDesign],
};

const Template = ({ ...args }) => {
  return createCDPage({ ...args });
};

export const Base = Template.bind({});
Base.args = {
    title: 'Customer data page',
    data: [
        {
            id: 1,
            text: 'gegevens',
            href: '/?path=/story/templates-pages-pages-homepage--base',
            isActive: true,
        },
        {
            id: 2,
            text: 'levering',
            href: '/?path=/story/templates-pages-pages-homepage--base'
        },
        {
            id: 3,
            text: 'betaling',
            href: '/?path=/story/templates-pages-pages-homepage--base'
        }
    ],
    cartButtonHref: '/?path=/story/templates-pages-pages-cart-page--base'
};
