import {createMoleculeLabelTextarea} from './MoleculeLabelTextarea';
import {BADGE} from '@geometricpanda/storybook-addon-badges';

export default {
    title: 'Components/Molecules/Input Controls/Label + Textarea',
    parameters: {
        badges: [BADGE.BETA, BADGE.EXPERIMENTAL],
        controls: {sort: 'requiredFirst'}
    },
    // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
    argTypes: {
        labelText: {
            control: 'text',
            table: {
                category: 'Atom Label',
                // subcategory: 'Button colors',
            }
        },
        forAttr: {
            control: 'text',
            type: {
                name: 'string',
                required: true
            },
            table: {
                category: 'Atom Label',
            }
        },
        name: {
            control: 'text',
            type: {
                name: 'string',
                required: true
            },
            table: {
                category: 'Atom Select',
            }
        },
        id: {
            control: 'text',
            type: {
                name: 'string',
                required: true
            },
            table: {
                category: 'Atom Select',
            }
        },
        required: {
            control: 'boolean',
            /*defaultValue: false,*/
            table: {
                category: 'Atom Select',
            }
        },
        disabled: {
            control: 'boolean',
            /*defaultValue: false,*/
            table: {
                category: 'Atom Select',
            }
        },
        autocomplete: {
            control: 'text',
            table: {
                type: {summary: 'string'},
                defaultValue: {summary: 'off'},
                category: 'Atom Select',
            },
        },
        initialValue: {
            control: 'text',
            description: 'if an initial value is needed.',
            table: {
                category: 'Atom Select',
            }
        },
        form: {
            control: 'text',
            description: 'form reference',
            table: {
                category: 'Atom Select',
            }
        },
        dataStyle: {
            control: {type: 'select'},
            options: ['', 'labels-as-placeholders'],
            table: {
                category: 'Atom Label',
                // subcategory: 'Button colors',
            }
        }
    },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({labelText, ...args}) => {
    return createMoleculeLabelTextarea({
        labelText, ...args}
    );
};

export const Default = Template.bind({});
Default.args = {
    labelText: 'label text'
};
Default.parameters = {
    badges: [BADGE.BETA],
    controls: {
        include: ['labelText'],
        exclude: ['initialValue']
    },
}

/*export const Stacked = Template.bind({});
Stacked.argTypes = {}
Stacked.args = {
    labelText: 'label text',
    placeholder: '',
    forAttr: 'txt_1',
    id: 'txt_1',
    dataStyle: 'labels-as-placeholders'
};
Stacked.parameters = {
    badges: [BADGE.BETA],
    controls: {
        include: ['labelText'],
        exclude: ['initialValue']
    },
}*/
