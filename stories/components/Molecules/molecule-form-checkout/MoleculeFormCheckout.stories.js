import './_molecule-form-checkout.css'
import {createMoleculeInputLabel} from "../molecule-input-label/MoleculeInputLabel";
import {createAtomButton} from "../../Atoms/atom-button/atom-button";
import { createMoleculeLabelSelect } from "../molecule-label-select/MoleculeLabelSelect";

export default {
    title: 'Components/Molecules/Checkout Form',
    argTypes: {
        labelText: {control: 'text'},
        buttonText: {control: 'text'},
        placeholder: {control: 'text'},
        shape: {
            control: {type: 'radio'},
            options: ['none', 'circle', 'rect', 'rounded'],
            table: {
                type: {summary: 'shape'},
                defaultValue: {summary: 'circle'},
            },
        }
    },
};

const Template = ({...args}) => {
    // create wrapper
    const wrapperElement = document.createElement('div');
    wrapperElement.className = ['molecule-form-checkout xlayout-horizontal'].join(' ');

    // name field
    wrapperElement.appendChild(
        // create label+input
        createMoleculeInputLabel({
            ...args
        })
    )

    // email field
    wrapperElement.appendChild(
        createMoleculeInputLabel({
            type: 'email',
            labelText: 'Email Adres',
            dataStyle: 'labels-as-placeholders',
            name: 'txt_email',
            id: 'txt_email',
            forAttr: 'txt_email',
            placeholder: ' ',
            autocomplete: 'email'
        })
    )

    // country select
    wrapperElement.appendChild(
        createMoleculeLabelSelect({
            labelText: 'Land',
            name: 'txt_country',
            id: 'txt_country',
            forAttr: 'txt_country',
            dataStyle: 'labels-as-placeholders'
        })
    )

    // postcode
    wrapperElement.appendChild(
        createMoleculeInputLabel({
            labelText: 'Postcode',
            name: 'txt_postcode',
            id: 'txt_postcode',
            forAttr: 'txt_postcode',
            dataStyle: 'labels-as-placeholders',
            placeholder: ' ',
            autocomplete: 'postal-code'
        })
    )

    // huisenummer
    wrapperElement.appendChild(
        createMoleculeInputLabel({
            labelText: 'Huisnummer',
            name: 'txt_housenumber',
            id: 'txt_housenumber',
            forAttr: 'txt_housenumber',
            dataStyle: 'labels-as-placeholders',
            placeholder: ' ',
            autocomplete: 'address-line2'
        })
    )

    // toevoeging
    wrapperElement.appendChild(
        createMoleculeInputLabel({
            labelText: 'Toevoeging',
            name: 'txt_housenumberaddition',
            id: 'txt_housenumberaddition',
            forAttr: 'txt_housenumberaddition',
            dataStyle: 'labels-as-placeholders',
            placeholder: ' ',
            autocomplete: 'address-line2'
        })
    )

    // create button
    wrapperElement.appendChild(
        // create label+input
        createAtomButton({
            ...args
        })
    )
    // return createMoleculeInputLabel({...args });
    return wrapperElement;
};

function submitForm() {
// alert('clicked');
console.log(event.target);
event.preventDefault();
// store button
const thisButton = event.target;
// set button state to loading
thisButton.setAttribute('data-state', 'loading');
setTimeout(() => {
  console.log("Delayed for 2 second.");
  thisButton.removeAttribute('data-state');
}, 2000)
}

export const Base = Template.bind({});
Base.args = {
    dataStyle: 'labels-as-placeholders',
    labelText: 'Naam',
    name: 'txt_name',
    id: 'txt_name',
    forAttr: 'txt_name',
    placeholder: ' ',
    buttonText: 'naar levering',
    buttonElement: 'button',
    onClick: submitForm,
    autocomplete: 'name',
};
Base.storyName = 'Default';

export const WithCSSValidation = Template.bind({});
WithCSSValidation.args = {
    labelText: 'Naam',
    placeholder: ' ',
    buttonText: 'naar levering',
};
WithCSSValidation.storyName = 'With CSS Validation';

export const WithAutocomplete = Template.bind({});
WithAutocomplete.args = {
    dataStyle: 'labels-as-placeholders',
    labelText: 'Naam',
    name: 'txt_nameAC',
    id: 'txt_nameAC',
    forAttr: 'txt_nameAC',
    autocomplete: 'name',
    placeholder: 'Please enter your full name',
    buttonText: 'naar levering',
};
WithAutocomplete.storyName = 'With Autocomplete';