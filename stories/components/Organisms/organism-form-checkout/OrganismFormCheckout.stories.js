/*import './_molecule-form-checkout.css';
import '../../Atoms/atom-fieldset/_atom-fieldset.css';*/
import { createForm } from "./OrganismFormCheckout";
/*
import { createMoleculeLabelSelect } from "../../Molecules/molecule-label-select/MoleculeLabelSelect";
import {createMoleculeLabelCheckbox} from "../../Molecules/molecule-label-checkbox/MoleculeLabelCheckbox";*/

export default {
    title: 'Components/Organisms/Checkout Form',
    argTypes: {
        formTitle: {control: 'text'},
        buttonText: {control: 'text'},
        field1LabelText: {control: 'text'},
        showRequired: {
            control: 'boolean',
        },
        useCSSvalidation: {
            control: 'boolean',
        },
      },
}

const Template = ({ ...args }) => {
  return createForm({
  dataStyle: 'labels-as-placeholders',
  ...args
  });
};

export const Base = Template.bind({});
Base.args = {
    formTitle: 'Checkout Form',
    buttonText: 'naar levering',
    field1LabelText: 'Naam',
    field2LabelText: 'Email Adres',
    field3SelectLabelText: 'Land',
    field4LabelText: 'Postcode',
};

export const formShowRequired = Template.bind({});
formShowRequired.args = {
    formTitle: 'Checkout Form: show required fields',
    showRequired: true,
    buttonText: 'naar levering',
    field1LabelText: 'Naam',
    field2LabelText: 'Email Adres',
    field1Required: false,
    field2Required: true,
    field3SelectLabelText: 'Land',
    field4LabelText: 'Postcode',
    field4Required: true,
    checkbox1Required: true
};

export const formShowRequiredWithCSSValidation = Template.bind({});
formShowRequiredWithCSSValidation.args = {
    formTitle: 'With CSS Validation',
    showRequired: true,
    useCSSvalidation: true,
    buttonText: 'naar levering',
    field1LabelText: 'Naam',
    field1Required: false,
    field2LabelText: 'Email Adres',
    field2Required: true,
    patternField2: '^[a-zA-Z0-9.!#$%’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$',
    patternTooltipTextField2: 'Please enter a valid email address.',
    field3SelectLabelText: 'Land',
    field4LabelText: 'Postcode',
    field4Required: true,
    checkbox1Required: true,
};

formShowRequiredWithCSSValidation.storyName = "With CSS validation";