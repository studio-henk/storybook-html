import {withDesign} from "storybook-addon-designs";
import {Icon} from './_atom-icon';
// badges
import {BADGE} from '@geometricpanda/storybook-addon-badges';

export default {
    title: 'Components/Atoms/Icon/Icon Stories',
    component: Icon,
    argTypes: {
        icon: {
            control: {type: 'select'},
            options: [
                'icon-arrow-right', 'icon-arrow-left', 'icon-phone'
            ],
            /*table: {
                category: 'Colors',
            }*/
        },
    },
    decorators: [withDesign],
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({icon, ...args}) => {
    return Icon({icon, ...args});
};
export const IconArrowRight = Template.bind({});
IconArrowRight.args = {
    icon: 'icon-arrow-right',
};
// badge
IconArrowRight.parameters = {
    // controls: {exclude: ['onClick']},
    badges: [BADGE.BETA],
    /*design: {
        type: "figma",
        url: "https://www.figma.com/file/qWDiZBpGWRBLwJh9qNVB7K/UI-Library?node-id=1934%3A75&t=g6XyYAI8wx3Wy5f3-1",
    },*/
};

export const IconArrowLeft = Template.bind({});
IconArrowLeft.args = {
    icon: 'icon-arrow-left',
};
// badge
IconArrowLeft.parameters = {
    // controls: {exclude: ['onClick']},
    badges: [BADGE.BETA],
    /*design: {
        type: "figma",
        url: "https://www.figma.com/file/qWDiZBpGWRBLwJh9qNVB7K/UI-Library?node-id=1934%3A75&t=g6XyYAI8wx3Wy5f3-1",
    },*/
};

export const IconArrowDown = Template.bind({});
IconArrowDown.args = {
    icon: 'icon-arrow-down',
};
// badge
IconArrowDown.parameters = {
    // controls: {exclude: ['onClick']},
    badges: [BADGE.BETA],
    /*design: {
        type: "figma",
        url: "https://www.figma.com/file/qWDiZBpGWRBLwJh9qNVB7K/UI-Library?node-id=1934%3A75&t=g6XyYAI8wx3Wy5f3-1",
    },*/
};

export const IconDisclosureCollapsed = Template.bind({});
IconDisclosureCollapsed.args = {
    icon: 'icon-disclosure-collapsed',
};
// badge
IconDisclosureCollapsed.parameters = {
    // controls: {exclude: ['onClick']},
    badges: [BADGE.BETA],
    /*design: {
        type: "figma",
        url: "https://www.figma.com/file/qWDiZBpGWRBLwJh9qNVB7K/UI-Library?node-id=1934%3A75&t=g6XyYAI8wx3Wy5f3-1",
    },*/
};
