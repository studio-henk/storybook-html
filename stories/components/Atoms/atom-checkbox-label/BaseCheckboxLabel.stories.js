import { createBaseCheckboxLabel } from './BaseCheckboxLabel';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Atoms/BaseCheckboxLabel',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    checked: { control: 'boolean' },
    label: { control: 'text' },
    forAttr: { control: 'text' },
    id: { control: 'text' },
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

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ checked,id,label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createBaseCheckboxLabel({ checked,id,label, ...args });
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Default.args = {
  checked: false,
  label: 'hello',
  forAttr: 'hocker',
  id: 'hocker'
};

export const ReversedOrder = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
ReversedOrder.args = {
  checked: false,
  label: 'hello',
  forAttr: 'hocker2',
  id: 'hocker2',
  order: 'reverse'
};

export const EmptyLabel = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
EmptyLabel.args = {
  checked: false,
  label: '',
  forAttr: 'hocker3',
  id: 'hocker3',
};

export const CustomCheckbox = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
CustomCheckbox.args = {
  checked: false,
  label: 'custom checkbox',
  forAttr: 'hocker4',
  id: 'hocker4',
  customCheckbox: true
};

export const CustomCheckboxSolo = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
CustomCheckboxSolo.args = {
  checked: false,
  label: '',
  forAttr: 'hocker5',
  id: 'hocker5',
  customCheckbox: true
};

export const CustomCheckboxCircle = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
CustomCheckboxCircle.args = {
  checked: false,
  label: 'custom checkbox',
  forAttr: 'hocker6',
  id: 'hocker6',
  customCheckbox: true,
  variant: 'circle'
};

export const CustomCheckboxCircleSolo = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
CustomCheckboxCircleSolo.args = {
  checked: false,
  label: '',
  forAttr: 'hocker7',
  id: 'hocker7',
  customCheckbox: true,
  variant: 'circle'
};

