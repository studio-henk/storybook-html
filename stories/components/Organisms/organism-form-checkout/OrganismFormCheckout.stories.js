import { createForm } from "./OrganismFormCheckout";

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
    formTitle: 'Adres gegevens',
    buttonText: 'naar levering',
    // onClick: submitForm,
    field1LabelText: 'Naam',
    field2LabelText: 'Email Adres',
    field3SelectLabelText: 'Land',
    field4LabelText: 'Postcode',
    fieldTelLabelText: 'Telefoon nummer',
    fieldCompanyNameLabelText: 'Bedrijf',
    fieldCompanyNameRequired: false,
    // vueShow: 'customerKind == "business"',
};

export const formShowRequired = Template.bind({});
formShowRequired.args = {
    formTitle: 'Adres gegevens',
    showRequired: true,
    buttonText: 'naar levering',
    field1LabelText: 'Naam',
    field2LabelText: 'Email Adres',
    field1Required: false,
    field2Required: true,
    field3SelectLabelText: 'Land',
    field4LabelText: 'Postcode',
    field4Required: true,
    fieldTelLabelText: 'Telefoon nummer',
    checkbox1Required: true,
    fieldCompanyNameLabelText: 'Bedrijf',
    fieldCompanyNameRequired: false,
};

export const formShowRequiredWithCSSValidation = Template.bind({});
formShowRequiredWithCSSValidation.args = {
    formTitle: 'Adres gegevens',
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
    fieldTelLabelText: 'Telefoon nummer',
    checkbox1Required: true,
    fieldCompanyNameLabelText: 'Bedrijf',
    fieldCompanyNameRequired: false,
};

formShowRequiredWithCSSValidation.storyName = "With CSS validation";

/*window.parent.window.GLOBAL = {
    myData: 'hello'
};*/

