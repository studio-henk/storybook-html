import { createMoleculeHeadingBadge } from './moleculeHeadingBadge';

export default {
  title: 'Components/Molecules/Heading+Badge',
  argTypes: {
    titleText: { control: 'text' },
    badgeNumber: { control: 'number' },
    /*h1text: { control: 'text' },
    h2text: { control: 'text' },
    order: {
      control: { type: 'radio' },
      options: ['base', 'reverse'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'base' },
      },
    },*/
  },
};

const Template = ({ ...args }) => {
  return createMoleculeHeadingBadge({ ...args });
};

export const Base = Template.bind({});
Base.args = {
  titleText: 'Shopping Cart',
  badgeNumber: 2,
    /*element: 'ol',
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
    ]*/
};