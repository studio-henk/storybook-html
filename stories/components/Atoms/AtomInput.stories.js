import { createAtomInput } from './AtomInput';
import {BADGE} from "@geometricpanda/storybook-addon-badges";
export default {
  title: 'Components/Atoms/Base/Input Text',
  component:createAtomInput,
  parameters: { controls: { sort: 'requiredFirst' } },
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

// basic input text html element
/*const TemplateBasicInputElement = ({ ...args }) => {
  const inputElement = `<input type="text" />`;
  return inputElement;
};*/

/*export const HTMLInputText = TemplateBasicInputElement.bind({});
HTMLInputText.parameters= {
  badges: [BADGE.DEPRECATED],
  controls: {include: []},
}
HTMLInputText.storyName = 'Default HTML Input Text';*/

// current
/*const TemplateCurrentHENKInputElement = ({ ...args }) => {
  const inputElement = `<input type="text" class="basic-input__input" />`;
  return inputElement;
};*/
/*
export const CurrentHENKInputText = TemplateCurrentHENKInputElement.bind({});
CurrentHENKInputText.parameters= {
  badges: [BADGE.DEPRECATED],
  controls: {include: []}
}
CurrentHENKInputText.storyName = 'Current HENK Input Text';
*/


const Template = ({ placeholder, ...args }) => {
  return createAtomInput({ placeholder, ...args });
};

export const Default = Template.bind({});
Default.args = {
  placeholder: ''
};
Default.parameters= {
  badges: [BADGE.STABLE],
  //controls: {include: []}
}
Default.storyName = 'Atom Input';

// with placeholder
export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: 'Enter text',
};
Placeholder.parameters= {
  badges: [BADGE.BETA],
  controls: {include: ['placeholder']}
}
Placeholder.storyName = 'With placeholder text';

export const RequiredText = Template.bind({});
RequiredText.args = {
  required: true,
  initialValue: ' '
};
RequiredText.parameters= {
  badges: [BADGE.EXPERIMENTAL],
  controls: {include: ['required']}
}
RequiredText.storyName = 'Required';

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};
Disabled.parameters= {
  badges: [BADGE.STABLE],
  controls: {include: ['disabled']}
}
Disabled.storyName = 'Disabled';

export const Pattern = Template.bind({});
Pattern.args = {
  pattern: '.*\\S.*',
  patternTooltipText: 'This field may not ONLY contain a space character.'
};
Pattern.parameters= {
  badges: [BADGE.BETA],
  controls: {include: ['pattern', 'patternTooltipText']}
}
Pattern.storyName = 'Pattern';

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

export const WithFormRef = Template.bind({});
WithFormRef.args = {
  form: '#someform'
};
WithFormRef.parameters = {
  badges: [BADGE.BETA],
  controls: {include: ['form']},
}
WithFormRef.storyName = 'With Form Ref';
