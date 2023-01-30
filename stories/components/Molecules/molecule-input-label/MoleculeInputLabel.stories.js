import {createMoleculeInputLabel} from './MoleculeInputLabel';
import {BADGE} from '@geometricpanda/storybook-addon-badges';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
    title: 'Components/Molecules/Input Controls/Label + Input',
    parameters: {
        badges: [BADGE.BETA, BADGE.EXPERIMENTAL],
        controls: {sort: 'requiredFirst'}
    },
    // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
    argTypes: {
        showRequired: {
            control: 'boolean',
        },
        minLength: {
            control: 'number',
        },
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
        patternTooltipText: {
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
        inputmode: {
            control: 'text',
            table: {
                type: {summary: 'string'},
                defaultValue: {summary: 'text'},
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
    labelText: 'label text',
    name: 'txt_default',
    id: 'txt_default',
    forAttr: 'txt_default',
};
Default.parameters = {
    badges: [BADGE.BETA],
    controls: {include: ['labelText']},
}

export const DefaultRequired = Template.bind({});
DefaultRequired.args = {
    labelText: 'label text',
    name: 'txt_defaultReq',
    id: 'txt_defaultReq',
    forAttr: 'txt_defaultReq',
    required: true
};
DefaultRequired.parameters = {
    badges: [BADGE.BETA],
    controls: {include: ['labelText']},
    docs: {
        description: {
            story: 'Setting the _required_ attribute immediately makes an empty field **invalid** in CSS validation. The ```:invalid``` CSS pseudo-class could style this element for example by giving the input a red border. However, at HENK we do not want our users to start with a form showing red fields all over the place to start with.' +
             'Instead, we make this an option first **and** make use of the ```:placeholder-shown``` CSS pseudo-class.',
        },
    },
}

export const ShowRequired = Template.bind({});
ShowRequired.args = {
    showRequired: true,
    labelText: 'label text',
    name: 'txt_showReq',
    id: 'txt_showReq',
    forAttr: 'txt_showReq',
    required: true
};
ShowRequired.parameters = {
    badges: [BADGE.BETA],
    controls: {include: ['labelText']},
    docs: {
        description: {
            story: 'By setting ```data-show-required-fields="true"``` attribute on a parent element of the input we show an asterisk near the label. This field is invalid because it is empty, but we do not show it is invalid at this point. We will show this at point of submitting the form.',
        },
    },
}

// currently used regex / pattern: pattern: '\\b[a-z-20-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}\\b',
// w3c example regex: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
export const UseCSSValidationEmail = Template.bind({});
UseCSSValidationEmail.argTypes = {}
UseCSSValidationEmail.args = {
    showRequired: true,
    useCSSvalidation: true,
    //minLength: 3,
    labelText: 'Email Address',
    forAttr: 'txt_invalidEmail',
    id: 'txt_invalidEmail',
    name: 'txt_invalidEmail',
    // placeholder: '@',
    placeholder: ' ',
    // pattern: '\\b[a-z-20-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}\\b',
    pattern: '^[a-zA-Z0-9.!#$%’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$',
    patternTooltipText: 'Please enter a valid email address.',
    disabled: false,
    required: true,
    // initialValue: '',
};
UseCSSValidationEmail.parameters = {
    badges: [BADGE.BETA],
    // controls: {include: ['labelText']}
    controls: {exclude: ['autocomplete', 'form']},
    docs: {
        description: {
            story: 'This email field uses a regex pattern to validate an entered value. Taken from [W3C](https://www.w3.org/TR/2012/WD-html-markup-20120329/datatypes.html#form.data.emailaddress-def). Note that ```a@b``` is officially a valid email adress.',
        },
    },
}

export const StackedUseCSSValidationEmail = Template.bind({});
StackedUseCSSValidationEmail.argTypes = {}
StackedUseCSSValidationEmail.args = {
    dataStyle: 'labels-as-placeholders',
    disabled: false,
    //minLength: 3,
    forAttr: 'txt_invalidEmailStacked',
    id: 'txt_invalidEmailStacked',
    labelText: 'Email Address',
    name: 'txt_invalidEmailStacked',
    // placeholder: '@',
    pattern: '^[a-zA-Z0-9.!#$%’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$',
    patternTooltipText: 'Please enter a valid email address.',
    placeholder: ' ',
    required: true,
    showRequired: true,
    useCSSvalidation: true,
    // initialValue: '',
};
StackedUseCSSValidationEmail.parameters = {
    badges: [BADGE.BETA],
    // controls: {include: ['labelText']}
    controls: {exclude: ['autocomplete', 'form']},
    docs: {
        description: {
            story: 'This email field uses a regex pattern to validate an entered value. Taken from [W3C](https://www.w3.org/TR/2012/WD-html-markup-20120329/datatypes.html#form.data.emailaddress-def). Note that ```a@b``` is officially a valid email adress.',
        },
    },
}



export const Stacked = Template.bind({});
Stacked.argTypes = {}
Stacked.args = {
    labelText: 'label text',
    forAttr: 'txt_stacked',
    id: 'txt_stacked',
    name: 'txt_stacked',
    placeholder: ' ',
    dataStyle: 'labels-as-placeholders'
};
Stacked.parameters = {
    badges: [BADGE.BETA],
    controls: {include: ['labelText']}
}

export const StackedAutoComplete = Template.bind({});
StackedAutoComplete.argTypes = {}
StackedAutoComplete.args = {
    labelText: 'Name',
    forAttr: 'txt_ac',
    id: 'txt_ac',
    name: 'txt_ac',
    placeholder: ' ',
    dataStyle: 'labels-as-placeholders',
    autocomplete: 'name'
};
StackedAutoComplete.parameters = {
    badges: [BADGE.BETA],
    controls: {include: ['labelText', 'autocomplete']}
}

export const StackedAutoCompleteCC = Template.bind({});
StackedAutoCompleteCC.argTypes = {}
StackedAutoCompleteCC.args = {
    labelText: 'Creditcard number',
    forAttr: 'txt_accc',
    id: 'txt_accc',
    name: 'txt_accc',
    placeholder: ' ',
    required: true,
    pattern: '[0-9]{8,19}',
    patternTooltipText: 'This field requires a valid creditcard number',
    dataStyle: 'labels-as-placeholders',
    autocomplete: 'cc-number',
    inputmode: 'numeric'
};
StackedAutoCompleteCC.parameters = {
    badges: [BADGE.BETA],
    controls: {include: ['labelText', 'autocomplete', 'inputmode']}
}

export const StackedWithPlaceholder = Template.bind({});
StackedWithPlaceholder.argTypes = {}
StackedWithPlaceholder.args = {
    labelText: 'First Name',
    forAttr: 'txt_firstname',
    id: 'txt_firstname',
    name: 'txt_firstname',
    placeholder: 'Enter your first name',
    dataStyle: 'labels-as-placeholders',
    // initialValue: 'HENK'
};
StackedWithPlaceholder.parameters = {
    badges: [BADGE.BETA],
    controls: {include: ['labelText']}
}

export const StackedWithInitialValue = Template.bind({});
StackedWithInitialValue.argTypes = {}
StackedWithInitialValue.args = {
    labelText: 'First Name',
    forAttr: 'txt_initval',
    id: 'txt_initval',
    name: 'txt_initval',
    placeholder: ' ',
    dataStyle: 'labels-as-placeholders',
    initialValue: 'HENK'
};
StackedWithInitialValue.parameters = {
    badges: [BADGE.BETA],
    controls: {include: ['labelText']}
}

export const StackedWithInitialValueAndPlaceholder = Template.bind({});
StackedWithInitialValueAndPlaceholder.argTypes = {}
StackedWithInitialValueAndPlaceholder.args = {
    labelText: 'First Name',
    forAttr: 'txt_initValPH',
    id: 'txt_initValPH',
    name: 'txt_initValPH',
    placeholder: 'Enter your first name',
    dataStyle: 'labels-as-placeholders',
    initialValue: 'HENK'
};
StackedWithInitialValueAndPlaceholder.parameters = {
    badges: [BADGE.BETA],
    controls: {include: ['labelText']}
}

/*
export const UseCSSValidation = Template.bind({});
UseCSSValidation.argTypes = {}
UseCSSValidation.args = {
    labelText: 'label text',
    forAttr: 'txt_invalid1',
    id: 'txt_invalid1',
    name: 'txt_invalid1',
    placeholder: ' ',
    pattern: '.*\S.*',
    patternTooltipText: 'This field may not ONLY contain a space character.',
    disabled: false,
    required: true,
    initialValue: ' ',
};
UseCSSValidation.parameters = {
    badges: [BADGE.BETA],
    // controls: {include: ['labelText']}
    controls: {exclude: ['autocomplete', 'form']}
}
*/

/*
export const StackedWithCSSValidation = Template.bind({});
StackedWithCSSValidation.argTypes = {}
StackedWithCSSValidation.args = {
    labelText: 'label text',
    forAttr: 'txt_invalid2',
    id: 'txt_invalid2',
    name: 'txt_invalid2',
    placeholder: ' ',
    pattern: '.*\\S.*',
    patternTooltipText: 'This field may not ONLY contain a space character.',
    disabled: false,
    required: true,
    initialValue: ' ',
    dataStyle: 'labels-as-placeholders',
};
StackedWithCSSValidation.parameters = {
    badges: [BADGE.BETA],
    // controls: {include: ['labelText']}
    controls: {exclude: ['autocomplete', 'form']}
}
*/


export const Configurable = Template.bind({});
Configurable.argTypes = {}
Configurable.args = {
    labelText: 'label text',
    forAttr: 'txt_cf1',
    id: 'txt_cf1',
    name: 'txt_cf1',
    placeholder: ' ',
    pattern: '.*\\S.*',
    patternTooltipText: 'This field may not ONLY contain a space character.',
    disabled: false,
    required: false,
    initialValue: ''
};
Configurable.parameters = {
    badges: [BADGE.BETA],
    // controls: {include: ['labelText']}
    controls: {exclude: ['autocomplete', 'form']}
}
