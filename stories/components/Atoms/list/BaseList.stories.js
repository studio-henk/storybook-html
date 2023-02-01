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
// Base.args = {
//
// };
//
// Base.parameters = {
//     controls: { exclude: ['width', 'height'] },
// }

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
        url: "https://www.figma.com/file/DHpJJWTOUv4MpfeCEx3pe6/UI?node-id=25%3A64&t=rsNgWdfYtt2CC04f-1",
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