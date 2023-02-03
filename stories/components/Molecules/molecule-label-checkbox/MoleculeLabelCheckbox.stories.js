import { createMoleculeLabelCheckbox } from './MoleculeLabelCheckbox';
import {BADGE} from '@geometricpanda/storybook-addon-badges';
// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Molecules/Input Controls/Label + Checkbox',
  parameters: {
    badges: [BADGE.BETA],
  },
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    checked: { control: 'boolean' },
    labelText: { control: 'text' },
    forAttr: { control: 'text' },
    id: { control: 'text' },
    alignment: {
        control: {type: 'select'},
        options: ['left', 'right', 'between']
    },
    order: {
      /*control: { type: 'radio' },
      options: ['base', 'reverse'],*/
      control: 'check', options: ['reverse'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'base' },
      },
    },
  },
};

const Template = ({ ...args }) => {
  return createMoleculeLabelCheckbox({ ...args });
};

export const Default = Template.bind({});
Default.args = {
  checked: false,
  labelText: 'Ik heb de algemene voorwaarden, aflevervoorwaarden en het retourbeleid gelezen en ga hiermee akkoord.',
  forAttr: 'hocker',
  id: 'hocker'
};

export const DefaultRequired = Template.bind({});
DefaultRequired.args = {
  checked: false,
  required: true,
  labelText: 'Ik heb de algemene voorwaarden, aflevervoorwaarden en het retourbeleid gelezen en ga hiermee akkoord.',
  forAttr: 'hocker',
  id: 'hocker'
};

export const Disabled = Template.bind({});
Disabled.args = {
  checked: false,
  disabled: true,
  labelText: 'Ik heb de algemene voorwaarden, aflevervoorwaarden en het retourbeleid gelezen en ga hiermee akkoord.',
  forAttr: 'hocker',
  id: 'hocker'
};

export const WithLink = Template.bind({});
WithLink.args = {
  checked: false,
  labelText: 'Ik heb de <a href="#">algemene voorwaarden</a>, aflevervoorwaarden en het retourbeleid gelezen en ga hiermee akkoord.',
  forAttr: 'hocker',
  id: 'hocker'
};

export const ReversedOrder = Template.bind({});
ReversedOrder.args = {
  checked: false,
  labelText: 'Ik heb de algemene voorwaarden, aflevervoorwaarden en het retourbeleid gelezen en ga hiermee akkoord.',
  forAttr: 'cb_order_reverse',
  id: 'cb_order_reverse',
  order: 'reverse'
};

export const ReversedOrderRequired = Template.bind({});
ReversedOrderRequired.args = {
  checked: false,
  required: true,
  labelText: 'Ik heb de algemene voorwaarden, aflevervoorwaarden en het retourbeleid gelezen en ga hiermee akkoord.',
  forAttr: 'hocker2',
  id: 'hocker2',
  order: 'reverse'
};

export const Alignment = Template.bind({});
Alignment.args = {
  checked: false,
  labelText: 'Ik heb de algemene voorwaarden, aflevervoorwaarden en het retourbeleid gelezen en ga hiermee akkoord.',
  forAttr: 'hocker',
  id: 'hocker',
  alignment: 'left',
};

/*export const EmptyLabel = Template.bind({});
EmptyLabel.args = {
  checked: false,
  label: '',
  forAttr: 'hocker3',
  id: 'hocker3',
};*/

export const CustomCheckbox = Template.bind({});
CustomCheckbox.args = {
  checked: false,
  labelText: 'Ik heb de algemene voorwaarden, aflevervoorwaarden en het retourbeleid gelezen en ga hiermee akkoord.',
  forAttr: 'hocker4',
  id: 'hocker4',
  customCheckbox: true
};

export const CustomCheckboxRequired = Template.bind({});
CustomCheckboxRequired.args = {
  checked: false,
  required: true,
  labelText: 'Ik heb de algemene voorwaarden, aflevervoorwaarden en het retourbeleid gelezen en ga hiermee akkoord.',
  forAttr: 'hocker4',
  id: 'hocker4',
  customCheckbox: true
};

export const CustomCheckboxCircle = Template.bind({});

CustomCheckboxCircle.args = {
  checked: false,
  labelText: 'Ik heb de algemene voorwaarden, aflevervoorwaarden en het retourbeleid gelezen en ga hiermee akkoord.',
  forAttr: 'hocker6',
  id: 'hocker6',
  customCheckbox: true,
  variant: 'circle'
};

export const CustomCheckboxCircleRequired = Template.bind({});

CustomCheckboxCircleRequired.args = {
  checked: false,
  required: true,
  labelText: 'Ik heb de algemene voorwaarden, aflevervoorwaarden en het retourbeleid gelezen en ga hiermee akkoord.',
  forAttr: 'hocker6',
  id: 'hocker6',
  customCheckbox: true,
  variant: 'circle',
  order: 'reverse'
};