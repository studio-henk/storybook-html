// import { withDesign } from "storybook-addon-designs";
// import './atom-h1.css';
import { createBaseList } from './BaseList';

export default {
  title: 'Components/Atoms/List',
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
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<p>${label}</p>`;
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