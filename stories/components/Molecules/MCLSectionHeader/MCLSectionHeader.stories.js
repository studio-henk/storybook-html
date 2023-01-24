import { createMCLSectionHeader } from './MCLSectionHeader';

export default {
  title: 'Components/Molecules/MCLSectionHeader_hidden_',
  argTypes: {
    h1text: { control: 'text' },
    h2text: { control: 'text' },
    order: {
      control: { type: 'radio' },
      options: ['base', 'reverse'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'base' },
      },
    },
  },
};

const Template = ({ title, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createMCLSectionHeader({ title, ...args });
};

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Base.args = {
    h1text: 'Section Title',
    h2text: 'Section Subtitle',
};

export const OrderReverse = Template.bind({});
OrderReverse.args = {
    h1text: 'Section Title',
    h2text: 'Section Subtitle',
    order: 'reverse'
};

export const TitleOnly = Template.bind({});
TitleOnly.args = {
    h1text: 'Section Title',
};

export const HenkV1 = Template.bind({});
HenkV1.args = {
    h1text: 'Section Title',
    h2text: 'Section Subtitle',
    h1class: 'h2',
    h2class: 'fs-capitalised'
};

export const MultipleLines = Template.bind({});
MultipleLines.args = {
    h1text: 'Section Title \n over two lines',
    h2text: 'Section Subtitle',
    h1class: 'h2',
    h2class: 'fs-capitalised',
    order: 'reverse'
};
