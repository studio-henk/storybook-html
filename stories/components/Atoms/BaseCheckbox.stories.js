import { createBaseCheckbox } from './BaseCheckbox';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Atoms/BaseCheckbox',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    checked: { control: 'boolean' },
  },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ checked, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createBaseCheckbox({ checked, ...args });
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Default.args = {
  checked: false,
};

