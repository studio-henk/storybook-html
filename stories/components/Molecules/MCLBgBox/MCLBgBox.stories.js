import { createMCLBgBox } from './MCLBgBox';

export default {
  title: 'Components/Molecules/bg-box_hidden_',
  argTypes: {
    text: { control: 'text' },
    bgColor: {
        control: { type: 'select' },
        options: [
            'var(--color-Black)',
            'var(--color-HENK-Black)',
            'var(--color-White)',
            'var(--color-HENK-White)',
            'var(--color-accent1)',
            'var(--color-accent2)',
            'var(--color-accent3)',
            'var(--color-accent4)',
            'var(--color-accent5)',
            'var(--color-accent6)',
            'var(--color-accent7)',
            'var(--color-accent8)',
            'var(--color-accent9)',
            'var(--color-accent10)',
            'var(--color-accent11)',
            'var(--color-accent12)',
            'var(--color-accent13)',
            'var(--color-accent14)',
            'var(--color-accent15)',
            'var(--color-accent16)',
            'var(--color-accent17)',
            'var(--color-transparent)',
        ]
    },
    fgColor: {
        control: { type: 'select' },
        options: [
            'var(--color-Black)',
            'var(--color-HENK-Black)',
            'var(--color-White)',
            'var(--color-HENK-White)',
            'var(--color-accent1)',
            'var(--color-accent2)',
            'var(--color-accent3)',
            'var(--color-accent4)',
            'var(--color-accent5)',
            'var(--color-accent6)',
            'var(--color-accent7)',
            'var(--color-accent8)',
            'var(--color-accent9)',
            'var(--color-accent10)',
            'var(--color-accent11)',
            'var(--color-accent12)',
            'var(--color-accent13)',
            'var(--color-accent14)',
            'var(--color-accent15)',
            'var(--color-accent16)',
            'var(--color-accent17)',
            'var(--color-transparent)',
        ]
    },
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
    // fgColor: {
    //     control: {
    //         type: 'color',
    //         presetColors: [{ color: '#ff4785', title: 'Coral' }, { color: 'var(--color-accent1)', title: 'Accent 1' }],
    //     },
    // }
  },
};

const Template = ({ title, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createMCLBgBox({ title, ...args });
};

export const Base = Template.bind({});
Base.args = {
    text: 'This box only controls its background (and text) colors'
};

export const BackgroundBlue = Template.bind({});
BackgroundBlue.args = {
    text: 'I am Blue',
    bgColor: 'var(--color-accent11)'
};

export const ForegroundGreen = Template.bind({});
ForegroundGreen.args = {
    text: 'My text is green',
    fgColor: 'var(--color-accent16)'
};

export const BothBackgroundAndForeground = Template.bind({});
BothBackgroundAndForeground.args = {
    text: 'My text is orange',
    bgColor: 'blue',
    fgColor: 'orange'
};

// with padding box
export const WithPaddingBox = Template.bind({});
WithPaddingBox.args = {
    text: 'My text is orange',
    bgColor: 'var(--color-accent1)',
    fgColor: 'var(--color-HENK-Black)',
    hasPaddingBox: true,
    paddingTopUnits: 4,
    paddingRightUnits: 4,
    paddingBottomUnits: 4,
    paddingLeftUnits: 4
};