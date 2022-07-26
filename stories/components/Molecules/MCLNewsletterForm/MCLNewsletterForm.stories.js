import { createMCLNewsletterForm } from './MCLNewsletterForm';

export default {
  title: 'Components/Molecules/MCLNewsletterForm',
  argTypes: {
    label: { control: 'text' },
    buttonText: { control: 'text' },
    placeholder: { control: 'text' },
  },
};

const Template = ({ label, buttonText, placeholder, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createMCLNewsletterForm({ label, buttonText, placeholder, ...args });
};

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Base.args = {
    label: 'Sign up',
    placeholder: 'your e-mail',
    buttonText: 'sign up'
};
