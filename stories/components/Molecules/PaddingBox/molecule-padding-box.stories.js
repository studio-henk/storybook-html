import { createMoleculePaddingBox } from './molecule-padding-box';

export default {
  title: 'Components/Molecules/padding-box_hidden_',
  argTypes: {
    text: { control: 'text' },
    paddingTopUnits : {
        control: { type: 'number', min: 0 },
    },
    paddingRightUnits : {
        control: { type: 'number', min: 0 },
    },
    paddingBottomUnits : {
        control: { type: 'number', min: 0 },
    },
    paddingLeftUnits : {
        control: { type: 'number', min: 0 },
    }
  },
};

const Template = ({ title, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createMoleculePaddingBox({ title, ...args });
};

export const Base = Template.bind({});
Base.args = {
    text: 'This box only controls its padding',
    paddingTopUnits: 4,
    paddingRightUnits: 4,
    paddingBottomUnits: 4,
    paddingLeftUnits: 4
};

// story: padding box inside a bg-box