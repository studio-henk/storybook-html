import { withDesign } from "storybook-addon-designs";
import { createBaseButton } from './BaseButton';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Atoms/BaseButton',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    element: {
      control: { type: 'select' },
      options: ['button', 'a', 'span'],
    },
    label: { control: 'text' },
    variant: {
        control: { type: 'select' },
        options: ['base', 'primary', 'secondary', 'tertiary', 'tertiary-inverted', 'quaternary']
    },
    size: {
      control: { type: 'select' },
      options: ['base', 'small'],
    },
  },
  decorators: [withDesign],
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createBaseButton({ label, ...args });
};

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Base.args = {
  label: 'Base Button',
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Primary.args = {
  label: 'Primary Button',
  variant: 'primary',
};

Primary.parameters = {
    controls: { exclude: ['variant'] },
    design: {
        type: "figma",
        url: "https://www.figma.com/file/qWDiZBpGWRBLwJh9qNVB7K/UI-Library?node-id=1320%3A74",
    },
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  variant: 'secondary',
};
Secondary.parameters = { controls: { exclude: ['variant'] } };

// tertiary button
export const Tertiary = Template.bind({});
Tertiary.args = {
  label: 'Tertiary Button',
  variant: 'tertiary',
};

Tertiary.parameters = {
  backgrounds: { default: 'example-light' },
  controls: { exclude: ['variant'] }
};

// tertiary button inverted
export const TertiaryInverted = Template.bind({});
TertiaryInverted.args = {
  label: 'Tertiary Inverted Button',
  variant: 'tertiary-inverted',
};

TertiaryInverted.parameters = {
  backgrounds: { default: 'example-dark' },
  controls: { exclude: ['variant'] }
};

// quarternary button
export const Quaternary = Template.bind({});
Quaternary.args = {
  label: 'Quaternary Button',
  variant: 'quaternary',
};

Quaternary.parameters = {
  // backgrounds: { default: 'example-light' },
  controls: { exclude: ['variant'] }
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Disabled Button',
  variant: 'disabled',
};

Disabled.parameters = { controls: { exclude: ['variant', 'size'] } };

export const Small = Template.bind({});
Small.args = {
  label: 'Small Button',
  variant: '',
  size: 'small',
};

// export const ArrayExclude = Template.bind({})
Small.parameters = { controls: { exclude: ['variant', 'size'] } };

// link as button
export const LinkButton = Template.bind({});
LinkButton.args = {
    element: 'a',
    label: 'Link Button',
    variant: '',
};