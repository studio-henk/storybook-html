import { createTable } from './molecule-table';
export default {
  title: 'Components/Molecules/Table',
  argTypes: {
    label: { control: 'text' },
    buttonText: { control: 'text' },
    placeholder: { control: 'text' },
  },
};

const Template = ({ label, buttonText, placeholder, ...args }) => {
  return createTable({ ...args });
};

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Base.args = {
    label: 'Search the site',
    placeholder: 'test placeholder text',
    buttonText: 'sign up'
};
