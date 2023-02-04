import { createMoleculeCheckoutSteps } from './moleculeCheckoutSteps';
import {NoBullets} from "../../Atoms/list/BaseList.stories";

export default {
  title: 'Components/Molecules/Checkout Steps',
  argTypes: {
    h1text: { control: 'text' },
    h2text: { control: 'text' },
    order: {
      control: { type: 'radio' },
      options: ['base', 'reverse'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'base' },
      },
    },
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