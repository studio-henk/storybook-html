import {createAtomTextarea} from './AtomTextarea';
import {BADGE} from "@geometricpanda/storybook-addon-badges";

export default {
    title: 'Components/Atoms/Base/Textarea_hidden',
    component: createAtomTextarea,
    parameters: {controls: {sort: 'requiredFirst'}},
    argTypes: {
        initialValue: {
            control: 'text',
            description: 'if an initial value is needed.',
            table: {
                category: 'Visual Properties',
            }
        },
        name: {
            control: 'text',
            type: {
                name: 'string',
                required: true
            },
            table: {
                category: 'Code Attributes',
            }
        },
        id: {
            control: 'text',
            type: {
                name: 'string',
                required: true
            },
            table: {
                category: 'Code Attributes',
            }
        },
        placeholder: {
            control: 'text',
            type: {
                name: 'string',
                required: false
            },
            table: {
                category: 'Visual Properties',
            }
        },
        required: {
            control: 'boolean',
            table: {
                category: 'Code Attributes',
            }
        },
        disabled: {
            control: 'boolean',
            table: {
                category: 'Visual Properties',
            }
        },
        autocomplete: {
            control: 'text',
            table: {
                type: {summary: 'string'},
                defaultValue: {summary: 'off'},
                category: 'Code Attributes',
            },
        },
        form: {
            control: 'text',
            description: 'form reference',
            table: {
                category: 'Code Attributes',
            }
        },
        cols: {
            control: 'number',
            description: 'width?',
            table: {
                category: 'Visual Attributes',
            }
        }
    },
};

const Template = ({initialValue, ...args}) => {
    return createAtomTextarea(
        {initialValue, ...args}
    );
};

export const Default = Template.bind({});
Default.args = {
    name: 'my_textarea'
};
Default.parameters = {
    badges: [BADGE.BETA],
    controls: {
        include: [''],
        hideNoControlsWarning: true
    },
}
Default.storyName = 'Default';

export const WithPlaceHolder = Template.bind({});
WithPlaceHolder.args = {
    name: 'my_textarea',
    placeholder: 'Please enter a question or remark'
};
WithPlaceHolder.parameters = {
    badges: [BADGE.BETA],
    controls: {include: ['placeholder']},
}
WithPlaceHolder.storyName = 'With placeholder';

export const Configurable = Template.bind({});
Configurable.args = {
    name: 'my_textarea'
};
Configurable.parameters = {
    badges: [BADGE.BETA],
}
Configurable.storyName = 'Configurable';
