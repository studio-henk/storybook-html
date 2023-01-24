import { createMCLSearch } from './MCLSearch';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Molecules/MCLSearch_hidden_',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    label: { control: 'text' },
    buttonText: { control: 'text' },
    placeholder: { control: 'text' },
  },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, buttonText, placeholder, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createMCLSearch({ label, buttonText, placeholder, ...args });
};

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Base.args = {
    label: 'Search the site',
    placeholder: 'test placeholder text',
    buttonText: 'sign up'
};
