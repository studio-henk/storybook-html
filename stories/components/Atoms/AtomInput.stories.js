import {createAtomInput} from './AtomInput';
import {BADGE} from "@geometricpanda/storybook-addon-badges";

export default {
    title: 'Components/Atoms/Base/Input Text_hidden',
    component: createAtomInput,
    parameters: {
        docs: {
            description: {
                component: 'The ```<input>``` HTML element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. The ```<input>``` element is one of the most **powerful and complex** in all of HTML _due to the sheer number of combinations of input types and attributes_.',
            },
        },
        controls: {sort: 'requiredFirst'}
    },
    argTypes: {
        type: {
            control: {
                type: 'select',
                required: true
            },
            options: ['text', 'tel', 'email', 'month', 'number', 'password', 'search',],
            table: {
                type: {summary: 'string'},
                defaultValue: {summary: 'text'},
            },
        },
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
        placeholder: {
            control: 'text',
            type: {
                name: 'string',
                required: false
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
        pattern: {
            control: 'text',
            /*table: {
                type: {summary: 'string'},
                defaultValue: {summary: '.*\\S.*'},
            },*/
        },
        autocomplete: {
            control: 'text',
            table: {
                type: {summary: 'string'},
                defaultValue: {summary: 'off'},
            },
        },
        inputmode: {
            control: {type: 'select'},
            options: ['text', 'decimal', 'numeric', 'tel', 'search', 'email', 'url'],
            table: {
                type: {summary: 'string'},
                defaultValue: {summary: 'text'},
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

const Template = ({placeholder, ...args}) => {
    return createAtomInput({placeholder, ...args});
};

export const Default = Template.bind({});
Default.args = {
    id: 'txt_default',
    name: 'txt_default'
};
Default.parameters = {
    badges: [BADGE.STABLE],
    //controls: {include: []}
}
Default.storyName = 'Atom Input';

/*export const RequiredText = Template.bind({});
RequiredText.args = {
    required: true,
    //initialValue: ' '
};
RequiredText.parameters = {
    badges: [BADGE.EXPERIMENTAL],
    controls: {include: ['required']},
    docs: {
        description: {
            story: 'A field is _required_ when it has the _required_ attribute. This attribute specifies that the user must fill in a value before submitting a form. <p>Note that this means that **a required field can not be empty**. An empty field will therefor be **invalid**.</p><p>To show the user which fields are required we can configure the [molecule label+input](../?path=/docs/components-molecules-input-controls-label-input--default-required) to show an asterisk near the label or field.</p>',
        },
    },
}
RequiredText.storyName = 'Required';*/


// with placeholder
export const Placeholder = Template.bind({});
Placeholder.args = {
    placeholder: 'Enter text',
};
Placeholder.parameters = {
    badges: [BADGE.BETA],
    controls: {include: ['placeholder']}
}
Placeholder.storyName = 'With placeholder text';

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true
};
Disabled.parameters = {
    badges: [BADGE.STABLE],
    controls: {include: ['disabled']}
}
Disabled.storyName = 'Disabled';

/*export const Pattern = Template.bind({});
Pattern.args = {
    pattern: '.*\\S.*',
    patternTooltipText: 'This field may not ONLY contain a space character.'
};
Pattern.parameters = {
    badges: [BADGE.BETA],
    controls: {include: ['pattern', 'patternTooltipText']}
}
Pattern.storyName = 'Pattern';*/

/*export const AutoComplete = Template.bind({});
AutoComplete.args = {
  autocomplete: 'on'
};
AutoComplete.storyName = 'AutoComplete';*/

export const InitialValue = Template.bind({});
InitialValue.args = {
    initialValue: 'HENK'
};
InitialValue.parameters = {
    badges: [BADGE.STABLE],
    controls: {include: ['initialValue']},
}
InitialValue.storyName = 'InitialValue';

/*export const WithFormRef = Template.bind({});
WithFormRef.args = {
  form: '#someform'
};
WithFormRef.parameters = {
  badges: [BADGE.BETA],
  controls: {include: ['form']},
}
WithFormRef.storyName = 'With Form Ref';*/

/*
export const EmailField = Template.bind({});
EmailField.args = {
    type: 'email',
    inputmode: 'email',
    autocomplete: 'email'
};
EmailField.parameters = {
    badges: [BADGE.BETA],
    controls: {include: ['type']},
}
EmailField.storyName = 'Email';*/
