import {createMoleculeInputLabel} from './MoleculeInputLabel';
import {BADGE} from '@geometricpanda/storybook-addon-badges';
import {RequiredText} from "../../Atoms/AtomInput.stories";
// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
    title: 'Components/Molecules/Input Controls/Label + Input',
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
                category: 'Atom Input',
            }
        },
        id: {
            control: 'text',
            type: {
                name: 'string',
                required: true
            },
            table: {
                category: 'Atom Input',
            }
        },
        placeholder: {
            control: 'text',
            // if: { arg: 'dataStyle', neq: 'labels-as-placeholders' },
            description: '! can only be used with default version, not with labels-as-placeholders version.',
            table: {
                category: 'Atom Input',
            }
        },
        required: {
            control: 'boolean',
            /*defaultValue: false,*/
            table: {
                category: 'Atom Input',
            }
        },
        disabled: {
            control: 'boolean',
            /*defaultValue: false,*/
            table: {
                category: 'Atom Input',
            }
        },
        pattern: {
            control: 'text',
            table: {
                category: 'Atom Input',
            }
        },
        autocomplete: {
            control: 'text',
            table: {
                type: {summary: 'string'},
                defaultValue: {summary: 'off'},
                category: 'Atom Input',
            },
        },
        initialValue: {
            control: 'text',
            description: 'if an initial value is needed.',
            table: {
                category: 'Atom Input',
            }
        },
        form: {
            control: 'text',
            description: 'form reference',
            table: {
                category: 'Atom Input',
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
    return createMoleculeInputLabel({labelText, ...args});
};

export const Default = Template.bind({});
Default.args = {
    labelText: 'label text'
};
Default.parameters = {
    badges: [BADGE.BETA],
    controls: {include: ['labelText']},
}

export const Stacked = Template.bind({});
Stacked.argTypes = {}
Stacked.args = {
    labelText: 'label text',
    forAttr: 'txt_1',
    id: 'txt_1',
    placeholder: ' ',
    dataStyle: 'labels-as-placeholders'
};
Stacked.parameters = {
    badges: [BADGE.BETA],
    controls: {include: ['labelText']}
}

export const StackedWithPlaceholder = Template.bind({});
StackedWithPlaceholder.argTypes = {}
StackedWithPlaceholder.args = {
    labelText: 'First Name',
    forAttr: 'txt_firstname',
    id: 'txt_firstname',
    placeholder: 'Enter your first name',
    dataStyle: 'labels-as-placeholders',
    // initialValue: 'Nils ?'
};
StackedWithPlaceholder.parameters = {
    badges: [BADGE.BETA],
    controls: {include: ['labelText']}
}

export const StackedWithInitialValue = Template.bind({});
StackedWithInitialValue.argTypes = {}
StackedWithInitialValue.args = {
    labelText: 'First Name',
    forAttr: 'txt_firstname',
    id: 'txt_firstname',
    placeholder: ' ',
    dataStyle: 'labels-as-placeholders',
    initialValue: 'Nils ?'
};
StackedWithInitialValue.parameters = {
    badges: [BADGE.BETA],
    controls: {include: ['labelText']}
}

export const StackedWithInitialValueAndPlaceholder = Template.bind({});
StackedWithInitialValueAndPlaceholder.argTypes = {}
StackedWithInitialValueAndPlaceholder.args = {
    labelText: 'First Name',
    forAttr: 'txt_firstname',
    id: 'txt_firstname',
    placeholder: 'Enter your first name',
    dataStyle: 'labels-as-placeholders',
    initialValue: 'Nils ?'
};
StackedWithInitialValueAndPlaceholder.parameters = {
    badges: [BADGE.BETA],
    controls: {include: ['labelText']}
}

export const Configurable = Template.bind({});
Configurable.argTypes = {}
Configurable.args = {
    labelText: 'label text',
    forAttr: 'txt_1',
    id: 'txt_1',
    name: 'country_selector01',
    placeholder: ' ',
    disabled: false,
    required: false,
    initialValue: ''
};
Configurable.parameters = {
    badges: [BADGE.BETA],
    // controls: {include: ['labelText']}
    controls: {exclude: ['autocomplete', 'form', 'pattern']}
}
