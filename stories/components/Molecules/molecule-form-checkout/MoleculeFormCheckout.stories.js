import './_molecule-form-checkout.css';
import '../../Atoms/atom-fieldset/_atom-fieldset.css';
import {createMoleculeInputLabel} from "../molecule-input-label/MoleculeInputLabel";
import {createAtomButton} from "../../Atoms/atom-button/atom-button";
import { createMoleculeLabelSelect } from "../molecule-label-select/MoleculeLabelSelect";
import {createMoleculeLabelCheckbox} from "../molecule-label-checkbox/MoleculeLabelCheckbox";

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
    wrapperElement.className = ['molecule-form-checkout'].join(' ');

    // form element
    const formElement = document.createElement('form');
    formElement.className = ['molecule-form-checkout__form'].join(' ');
    formElement.noValidate = true;

    // name field
    formElement.appendChild(
        // create label+input
        createMoleculeInputLabel({
            ...args
        })
    )

    // email field
    formElement.appendChild(
        createMoleculeInputLabel({
            type: 'email',
            labelText: 'Email Adres',
            dataStyle: 'labels-as-placeholders',
            name: 'txt_email',
            id: 'txt_email',
            forAttr: 'txt_email',
            placeholder: ' ',
            pattern: '\b[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}\b',
            patternTooltipText: 'Please enter a valid email address',
            autocomplete: 'email'
        })
    )

    // country select
    formElement.appendChild(
        createMoleculeLabelSelect({
            labelText: 'Land',
            name: 'txt_country',
            id: 'txt_country',
            forAttr: 'txt_country',
            dataStyle: 'labels-as-placeholders'
        })
    )

    // postcode
    formElement.appendChild(
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

    // create 2 column grid here
    const gridElement = document.createElement('div');
    gridElement.className = ['molecule-form-checkout__grid-container'].join(' ');

    // huisnummer
    gridElement.appendChild(
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
    gridElement.appendChild(
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

    // add gridelement
    formElement.appendChild(gridElement);

    // add fieldset for checkboxes
    const fieldsetElement = document.createElement('fieldset');
    fieldsetElement.className = ['molecule-form-checkout__fieldset atom-fieldset'].join(' ');

    // create checkbox and label for terms of condition etc
    fieldsetElement.appendChild(
        createMoleculeLabelCheckbox({
            checked: false,
            disabled: false,
            id: 'input_txt_terms',
            name: 'input_txt_terms',
            forAttr: 'input_txt_terms',
            labelText: 'Ik heb de <a href="#">algemene voorwaarden</a>, <a href="#">aflevervoorwaarden</a> en het <a href="#">retourbeleid</a> gelezen en ga hiermee akkoord.',
            customCheckbox: true
        })
    )

    // create checkbox and label for newsletter
    // Ik wil mezelf graag inschrijven voor de nieuwsbrief
    fieldsetElement.appendChild(
        createMoleculeLabelCheckbox({
            checked: false,
            disabled: false,
            id: 'input_txt_newsletter',
            name: 'input_txt_newsletter',
            forAttr: 'input_txt_newsletter',
            labelText: 'Ik wil mezelf graag inschrijven voor de nieuwsbrief',
            customCheckbox: true
        })
    )

    // add fieldsetelement to form
    formElement.appendChild(fieldsetElement);

    // create button
    formElement.appendChild(
        // create label+input
        createAtomButton({
            ...args
        })
    )

    // add formelement
    wrapperElement.appendChild(formElement);

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