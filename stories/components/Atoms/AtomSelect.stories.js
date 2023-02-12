import {createAtomSelect} from './AtomSelect';
import {BADGE} from "@geometricpanda/storybook-addon-badges";

export default {
    title: 'Components/Atoms/Base/Select_hidden',
    component: createAtomSelect,
    parameters: {controls: {sort: 'requiredFirst'}},
    argTypes: {
        name: {
            control: 'text',
            type: {
                name: 'string',
                required: true
            },
        },
        id: {
            control: 'text',
            type: {
                name: 'string',
                required: true
            },
        },
        required: {
            control: 'boolean',
            /*defaultValue: false,*/
        },
        disabled: {
            control: 'boolean',
            /*defaultValue: false,*/
        },
        autocomplete: {
            control: 'text',
            table: {
                type: {summary: 'string'},
                defaultValue: {summary: 'off'},
            },
        },
        initialValue: {
            control: 'text',
            description: 'if an initial value is needed.',
        },
        form: {
            control: 'text',
            description: 'form reference',
        }
    },
};

const Template = ({name, ...args}) => {
    return createAtomSelect({name, ...args});
};
export const Default = Template.bind({});
Default.args = {
    name: 'select_country',
    id: 'country-selector-01',
    disabled: false
};
Default.parameters = {
    badges: [BADGE.BETA],
    // controls: {include: ['labelText', '']},
    controls: {
        // exclude: ['initialValue', 'form']
        include: ['id', 'name']
    },
}
Default.storyName = 'Atom Select';

export const Disabled = Template.bind({});
Disabled.args = {
    name: 'select_country',
    id: 'country-selector-01',
    disabled: true
};
Disabled.parameters = {
    badges: [BADGE.BETA],
    controls: {include: ['disabled']},
}
Disabled.storyName = 'Disabled';
