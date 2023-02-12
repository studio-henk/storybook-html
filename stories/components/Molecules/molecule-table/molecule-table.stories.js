import {createTable} from './molecule-table';
import {BADGE} from "@geometricpanda/storybook-addon-badges";

export default {
    title: 'Components/Molecules/Table_hidden',
    component: createTable,
    parameters: {
        badges: [BADGE.BETA],
        controls: {sort: 'requiredFirst'},
        docs: {
            description: {
                component: 'Table',
            },
        },
    },
    argTypes: {
        label: {control: 'text'},
        buttonText: {control: 'text'},
        placeholder: {control: 'text'},
    },
};

const Template = ({label, buttonText, placeholder, ...args}) => {
    return createTable({...args});
};

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Base.args = {
    label: 'Search the site',
    placeholder: 'test placeholder text',
    buttonText: 'sign up'
};
