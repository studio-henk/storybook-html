import { withDesign } from "storybook-addon-designs";
import {BADGE} from '@geometricpanda/storybook-addon-badges';
import { createBaseList } from './BaseList';

export default {
  title: 'Components/Atoms/Base/List',
  parameters: {
    badges: [BADGE.BETA],
    controls: {sort: 'requiredFirst'}
  },
  argTypes: {
    element: {
      control: { type: 'select' },
      options: ['ul', 'ol']
    },
    // variant: {
    //     control: { type: 'select' },
    //     options: ['ul', 'ol']
    // },
  },
  //decorators: [withDesign],
};

const Template = ({ element, variant, data, ...args }) => {
  return createBaseList({ element, variant, data, ...args });
};

// default ul
export const BaseUnorderedList = Template.bind({});

export const UnOrderedListEmDash = Template.bind({});
UnOrderedListEmDash.args = {
    element: 'ul',
    dataStyle: 'list-style-em-dash',
    data: [
        {
            id: 1,
            text: 'first item in unordered em dash list'
        },
        {
            id: 2,
            text: 'second item in unordered<br> em dash list'
        },
        {
            id: 3,
            text: 'third item in unordered em dash list'
        }
    ]
};
UnOrderedListEmDash.parameters = {
    badges: [BADGE.BETA],
    design: {
        type: "figma",
        url: "https://www.figma.com/file/DHpJJWTOUv4MpfeCEx3pe6/UI?node-id=301%3A141&t=WtPlV87oWjwLzZQx-1",
    },
}
UnOrderedListEmDash.storyName = 'Em dash list'
// ol
export const BaseOrderedList = Template.bind({});
BaseOrderedList.args = {
    element: 'ol',
    data: [
        {
            id: 1,
            text: 'first item in ordered list'
        },
        {
            id: 2,
            text: 'second item in ordered list'
        }
    ]
};
BaseOrderedList.parameters = {
    badges: [BADGE.BETA],
    design: {
        type: "figma",
        url: "https://www.figma.com/file/DHpJJWTOUv4MpfeCEx3pe6/UI?node-id=301%3A147&t=WtPlV87oWjwLzZQx-1",
    },
}

export const OrderedListLinks = Template.bind({});
OrderedListLinks.args = {
    element: 'ol',
    data: [
        {
            id: 1,
            text: '<a href="#">first item</a> in ordered list'
        },
        {
            id: 2,
            text: 'second item in ordered list',
            href: '#somewhere'
        }
    ]
};

export const NoBullets = Template.bind({});
NoBullets.args = {
    element: 'ol',
    dataStyle: 'no-bullets',
    data: [
        {
            id: 1,
            text: 'step 1',
            href: '#somewhere1',
            isActive: true,
        },
        {
            id: 2,
            text: 'step 2',
            href: '#somewhere2'
        },
        {
            id: 3,
            text: 'step 3',
            href: '#somewhere3'
        }
    ]
};