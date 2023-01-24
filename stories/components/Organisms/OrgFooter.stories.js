import { createOrgFooter } from './OrgFooter';

export default {
  title: 'Components/Organisms/OrgFooter_hidden',
  argTypes: {
    // backgroundColor: { control: 'color' },
    // label: { control: 'text' },
    // onClick: { action: 'onClick' },
    // primary: { control: 'boolean' },
    // variant: {
    //     control: { type: 'select' },
    //     options: ['base', 'primary', 'secondary', 'tertiary', 'tertiary-inverted', 'quaternary']
    // },
    // size: {
    //   control: { type: 'select' },
    //   options: ['base', 'small'],
    // },
  },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createOrgFooter({ label, ...args });
};

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Base.args = {
  buttonText: 'subscribe',
};
