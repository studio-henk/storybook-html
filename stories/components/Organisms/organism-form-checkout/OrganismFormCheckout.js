import './_organism-form-checkout.css';
import '../../Atoms/atom-fieldset/_atom-fieldset.css';
import {createBaseH1} from "../../Atoms/h1/BaseH1";
import {createAtomButton} from "../../Atoms/atom-button/atom-button";
import {createMoleculeInputLabel} from "../../Molecules/molecule-input-label/MoleculeInputLabel";
import {createMoleculeLabelSelect} from "../../Molecules/molecule-label-select/MoleculeLabelSelect";
import {createMoleculeLabelCheckbox} from "../../Molecules/molecule-label-checkbox/MoleculeLabelCheckbox";

export const createForm = ({
  formTitle= 'title',
  showRequired,
  useCSSvalidation,
  dataStyle,
  buttonText,
  field1LabelText,
  field2LabelText,
  field3SelectLabelText,
  field4LabelText,
  field1Required,
  field2Required,
  field4Required,
  checkbox1Required,
  checkbox2Required,
  patternField2,
  patternTooltipTextField2,
}) => {

  // create wrapper
  const wrapperElement = document.createElement('div');
  wrapperElement.className = ['molecule-form-checkout'].join(' ');

  if (showRequired) {
    wrapperElement.setAttribute('data-show-required-fields', true);
  }

  if (useCSSvalidation) {
    wrapperElement.setAttribute('data-use-css-validation', true);
  }

  // form element
  const formElement = document.createElement('form');
  formElement.className = ['molecule-form-checkout__form'].join(' ');
  formElement.noValidate = true;

  // title
  const h1 = createBaseH1({
    text: formTitle,
  })

  const formField1 = createMoleculeInputLabel( {
    name: 'txt_name',
    id: 'txt_name',
    forAttr: 'txt_name',
    labelText: field1LabelText,
    required: field1Required,
    dataStyle: dataStyle,
    placeholder: ' ',
    autocomplete: 'name',
  })

  const formField2 = createMoleculeInputLabel( {
    name: 'txt_email',
    id: 'txt_email',
    forAttr: 'txt_email',
    labelText: field2LabelText,
    required: field2Required,
    dataStyle: dataStyle,
    placeholder: ' ',
    autocomplete: 'email',
    useCSSvalidation: useCSSvalidation,
    pattern: patternField2,
    patternTooltipText: patternTooltipTextField2,
  })

  const formField3Select = createMoleculeLabelSelect( {
    name: 'select_country',
    id: 'select_country',
    forAttr: 'select_country',
    labelText: field3SelectLabelText,
    dataStyle: dataStyle
  })

  // postcode
  const formField4 = createMoleculeInputLabel( {
    name: 'txt_postcode',
    id: 'txt_postcode',
    forAttr: 'txt_postcode',
    labelText: field4LabelText,
    required: field4Required,
    dataStyle: dataStyle,
    placeholder: ' ',
    autocomplete: 'postal-code',
  })

  // 2 columns here
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
            autocomplete: 'off'
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
            autocomplete: 'off'
        })
    )

  // add fieldset for checkboxes
    const fieldsetElement = document.createElement('fieldset');
    fieldsetElement.className = ['molecule-form-checkout__fieldset atom-fieldset'].join(' ');

    // create checkbox and label for terms of condition etc
    fieldsetElement.appendChild(
        createMoleculeLabelCheckbox({
            checked: false,
            disabled: false,
            required: checkbox1Required,
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
            required: checkbox2Required,
            id: 'input_txt_newsletter',
            name: 'input_txt_newsletter',
            forAttr: 'input_txt_newsletter',
            labelText: 'Ik wil mezelf graag inschrijven voor de nieuwsbrief',
            customCheckbox: true
        })
    )

  const formButton = createAtomButton( {
    buttonText: buttonText,
    // onClick: onFormSubmit,
  })

  formElement.append(h1);
  formElement.append(formField1);
  formElement.append(formField2);
  formElement.append(formField3Select);
  formElement.append(formField4);
  formElement.appendChild(gridElement);
  formElement.appendChild(fieldsetElement);
  formElement.append(formButton);

  wrapperElement.append(formElement);

  return wrapperElement;
};