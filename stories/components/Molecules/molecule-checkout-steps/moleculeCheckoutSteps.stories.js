import { createMoleculeCheckoutSteps } from './moleculeCheckoutSteps';
import {BADGE} from "@geometricpanda/storybook-addon-badges";

export default {
  title: 'Components/Molecules/Checkout Steps',
  parameters: {
        badges: [BADGE.BETA, BADGE.EXPERIMENTAL],
        controls: {sort: 'requiredFirst'}
    },
  argTypes: {
    data: { control: 'object' },
  },
};

const Template = ({ title, ...args }) => {
  return createMoleculeCheckoutSteps({ ...args });
};

export const Base = Template.bind({});
Base.args = {
    element: 'ol',
    dataStyle: 'no-bullets',
    data: [
        {
            id: 1,
            text: 'step 1',
            href: '/?path=/story/templates-pages-pages-homepage--base',
            isActive: true,
        },
        {
            id: 2,
            text: 'step 2',
            href: '/?path=/story/templates-pages-pages-homepage--base'
        },
        {
            id: 3,
            text: 'step 3',
            href: '/?path=/story/templates-pages-pages-homepage--base'
        }
    ]
};
Base.parameters = {
    badges: [BADGE.BETA],
    controls: {include: ['data']},
}