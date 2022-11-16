import { withDesign } from "storybook-addon-designs";
import { createAtomButton } from './atom-button';
// badges
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Components/Atoms/Button',
  argTypes: {
    buttonElement: {
      control: { type: 'select' },
      options: ['button', 'a', 'span'],
    },
    buttonText: {
        name: 'buttonText',
        type: {
            name: 'string',
            required: true
        },
        description: 'a text label for button',
        table: {
          type: { summary: 'string' },
          defaultValue: { summary: 'button text' },
        },
        control: 'text'
    },
    style: {
        control: { type: 'select' },
        options: ['plain', 'filled']
    },
    /*variant: {
        control: { type: 'select' },
        options: ['base', 'primary', 'secondary', 'tertiary', 'tertiary-inverted', 'quaternary']
    },*/
    role: {
      control: { type: 'radio' },
      options: ['Normal', 'primary', 'cancel', 'destructive'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'base' },
      },
    },
    state: {
      control: { type: 'radio' },
      options: ['None', 'disabled'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'None' },
      },
    },
    size: {
      control: { type: 'radio' },
      options: ['base', 'small', 'xsmall'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'base' },
      },
    },
    onClick: { action: 'onClick' },
  },
  decorators: [withDesign],
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ buttonText, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createAtomButton({ buttonText, ...args });
};

export const Base = Template.bind({});
Base.args = {
    buttonElement: 'button',
    buttonText: 'Base Button',
};
// badge
Base.parameters = {
  badges: [BADGE.STABLE],
};

export const Primary = Template.bind({});
Primary.args = {
  buttonText: 'Primary Button',
  role: 'primary',
};

Primary.parameters = {
    badges: [BADGE.NEEDS_REVISION],
    controls: { exclude: ['role'] },
    design: {
        type: "figma",
        url: "https://www.figma.com/file/qWDiZBpGWRBLwJh9qNVB7K/UI-Library?node-id=1320%3A74",
    },
};

/*export const Secondary = Template.bind({});
Secondary.args = {
  buttonText: 'Secondary Button',
  variant: 'secondary',
};
Secondary.parameters = {
    badges: [BADGE.OBSOLETE],
    controls: {
        exclude: ['variant']
    }
};*/

// tertiary button
/*export const Tertiary = Template.bind({});
Tertiary.args = {
  buttonText: 'Tertiary Button',
  variant: 'tertiary',
};

Tertiary.parameters = {
  backgrounds: { default: 'example-light' },
  controls: { exclude: ['variant'] }
};*/

// tertiary button inverted
/*export const TertiaryInverted = Template.bind({});
TertiaryInverted.args = {
  buttonText: 'Tertiary Inverted Button',
  variant: 'tertiary-inverted',
};

TertiaryInverted.parameters = {
  backgrounds: { default: 'example-dark' },
  controls: { exclude: ['variant'] }
};*/

// quarternary button
/*export const Quaternary = Template.bind({});
Quaternary.args = {
  buttonText: 'Quaternary Button',
  variant: 'quaternary',
};

Quaternary.parameters = {
  // backgrounds: { default: 'example-light' },
  controls: { exclude: ['variant'] }
};*/

/*export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  buttonText: 'Disabled Button',
  variant: 'disabled',
};*/

/*Disabled.parameters = { controls: { exclude: ['variant', 'size'] } };*/

/*export const Small = Template.bind({});
Small.args = {
  buttonText: 'Small Button',
  variant: '',
  size: 'small',
};
Small.parameters = { controls: { exclude: ['variant', 'size'] } };*/

// link as button
/*
export const LinkButton = Template.bind({});
LinkButton.args = {
    buttonElement: 'a',
    buttonText: 'Link Button',
    variant: '',
};*/

export const Plain = Template.bind({});
Plain.args = {
  buttonText: 'Plain Button',
  style: 'plain',
  // size: 'small',
};
Plain.parameters = { controls: { exclude: ['style', 'size'] } };

export const Filled = Template.bind({});
Filled.args = {
  buttonText: 'Filled Button',
  style: 'filled'
};
Filled.parameters = { controls: { exclude: ['style', 'size'] } };

export const PlainIcon = Template.bind({});
PlainIcon.args = {
  buttonText: 'Plain Button',
  style: 'plain',
  icon: 'arrow-right'
  // size: 'small',
};
PlainIcon.parameters = { controls: { exclude: ['style', 'size'] } };

export const IconFilled = Template.bind({});
IconFilled.args = {
  buttonText: 'Icon Button',
  icon: 'arrow-right',
  style: 'filled',
  // size: 'small',
};
IconFilled.parameters = { controls: { exclude: ['style', 'size'] } };

