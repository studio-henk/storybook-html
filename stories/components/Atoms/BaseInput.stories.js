import { createBaseInput } from './BaseInput';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Atoms/_hidden_BaseInput',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    placeholder: { control: 'text' },
  },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ placeholder, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createBaseInput({ placeholder, ...args });
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Default.args = {
  placeholder: '',
};
Default.storyName = 'Default';

// with placeholder
export const Placeholder = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Placeholder.args = {
  placeholder: 'Enter text',
};
Placeholder.storyName = 'With placeholder text';
