import {createMoleculeHeadingBadge} from './moleculeHeadingBadge';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';
import {withDesign} from "storybook-addon-designs";
import {BADGE} from "@geometricpanda/storybook-addon-badges";

export default {
    title: 'Components/Molecules/Heading+Badge',
    component: createMoleculeHeadingBadge,
    parameters: {
        badges: [BADGE.BETA],
        controls: {sort: 'requiredFirst'},
        docs: {
            description: {
                component: 'The Heading+Badge component',
            },
        },
    },
    decorators: [withDesign],
    argTypes: {
        titleText: {control: 'text'},
        badgeNumber: {control: 'number'},
    },
    viewport: {
        //👇 The viewports you want to use
        viewports: INITIAL_VIEWPORTS,
        //👇 Your own default viewport
        defaultViewport: 'mobile1',
    },
};

const Template = ({...args}) => {
    return createMoleculeHeadingBadge({...args});
};

export const Base = Template.bind({});
Base.args = {
    titleText: 'Shopping Cart',
    badgeNumber: 2,
};
Base.parameters = {
    viewport: {
        defaultViewport: 'iphonex',
    },
}