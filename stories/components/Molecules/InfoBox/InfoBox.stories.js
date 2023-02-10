import {withDesign} from "storybook-addon-designs";
// badges
import {BADGE} from '@geometricpanda/storybook-addon-badges';
import { createInfoBox } from './InfoBox';

export default {
  title: 'Components/Molecules/info-box',
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    icon: {
        control: {type: 'select'},
        options: [
            'icon-arrow-right', 'icon-arrow-left', 'icon-phone', 'icon-calendar', 'icon-truck'
        ],
    },
    bgColor: {
        control: { type: 'select' },
        options: [
            'var(--color-black)',
            'var(--color-henk-black)',
            'var(--color-white)',
            'var(--color-henk-white)',
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
        ],
        table: {
            category: 'Colors',
            type: { summary: 'select' },
            defaultValue: { summary: 'var(--color-accent15)' },
        }
    },
    fgColor: {
        control: { type: 'select' },
        options: [
            'var(--color-black)',
            'var(--color-henk-black)',
            'var(--color-white)',
            'var(--color-henk-white)',
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
        ],
        table: {
            category: 'Colors',
            type: { summary: 'select' },
            defaultValue: { summary: 'var(--color-black)' },
        }
    },
    paddingTopUnits : {
        control: { type: 'number', min: 0 },
        defaultValue: 3,
        table: {
            category: 'Padding',
            type: { summary: 'number' },
            defaultValue: { summary: 3 },
        }
    },
    paddingRightUnits : {
        control: { type: 'number', min: 0 },
        defaultValue: 5,
        table: {
            category: 'Padding',
            type: { summary: 'number' },
            defaultValue: { summary: 5 },
        }
    },
    paddingBottomUnits : {
        control: { type: 'number', min: 0 },
        defaultValue: 4,
        table: {
            category: 'Padding',
            type: { summary: 'number' },
            defaultValue: { summary: 4 },
        }
    },
    paddingLeftUnits : {
        control: { type: 'number', min: 0 },
        defaultValue: 5,
        table: {
            category: 'Padding',
            type: { summary: 'number' },
            defaultValue: { summary: 5 },
        }
    },
    paddingTopUnitsDesktop : {
        control: { type: 'number', min: 0 },
        defaultValue: 7,
        table: {
            category: 'Padding',
            type: { summary: 'number' },
            defaultValue: { summary: 7 },
        }
    },
    paddingRightUnitsDesktop : {
        control: { type: 'number', min: 0 },
        defaultValue: 7,
        table: {
            category: 'Padding',
            type: { summary: 'number' },
            defaultValue: { summary: 7 },
        }
    },
    paddingBottomUnitsDesktop : {
        control: { type: 'number', min: 0 },
        defaultValue: 7,
        table: {
            category: 'Padding',
            type: { summary: 'number' },
            defaultValue: { summary: 7 },
        }
    },
    paddingLeftUnitsDesktop : {
        control: { type: 'number', min: 0 },
        defaultValue: 7,
        table: {
            category: 'Padding',
            type: { summary: 'number' },
            defaultValue: { summary: 7 },
        }
    }
  },
  decorators: [withDesign],
};

const Template = ({ title, ...args }) => {
  return createInfoBox({ title, ...args });
};

export const Base = Template.bind({});
Base.args = {
    title: 'Waar kunnen we mee helpen?',
    icon: 'icon-phone',
    content: '' +
     '<a href="tel:+31(0)12345678">+31 (0)12345678</a><br />' +
     '<a href="mailto:info@studio-henk.nl">info@studio-henk.nl</a>',
    paddingTopUnits: 3,
    paddingRightUnits: 5,
    paddingBottomUnits: 4,
    paddingLeftUnits: 5,
    paddingTopUnitsDesktop: 7,
    paddingRightUnitsDesktop: 7,
    paddingBottomUnitsDesktop: 7,
    paddingLeftUnitsDesktop: 7,
};
Base.parameters = {
    design: {
        type: "figma",
        url: "https://www.figma.com/file/DHpJJWTOUv4MpfeCEx3pe6/UI?node-id=54%3A70&t=MjZgE0J2pK6M33Yy-1",
    },
};

export const IconCalendar = Template.bind({});
IconCalendar.args = {
    title: 'Bezorgen op afspraak',
    content: '<p>Lorem ipsum dolor sit amet, ectetur adi piscing elit, tincidunt tincidunt.</p>',
    icon: 'icon-calendar'
};

export const IconTruck = Template.bind({});
IconTruck.args = {
    title: 'Bezorgen op afspraak',
    content: '<p>Lorem ipsum dolor sit amet, ectetur adi piscing elit, tincidunt tincidunt.</p>',
    icon: 'icon-truck'
};


export const Subtitle = Template.bind({});
Subtitle.args = {
    title: 'Waar kunnen we mee helpen?',
    subtitle: 'levering',
    icon: 'icon-phone'
};
export const BackgroundAccent10 = Template.bind({});
BackgroundAccent10.args = {
    content: '<p>Lorem ipsum dolor sit amet, ectetur adi piscing elit, tincidunt tincidunt.</p>',
    bgColor: 'var(--color-accent10)',
    fgColor: 'var(--color-white)',
    icon: 'icon-phone'
};
