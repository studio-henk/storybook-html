import './_organism-form-checkout.css';
import '../../Atoms/atom-fieldset/_atom-fieldset.css';
import {createBaseH1} from "../../Atoms/h1/BaseH1";
import {createAtomButton} from "../../Atoms/atom-button/atom-button";
import {createMoleculeInputLabel} from "../../Molecules/molecule-input-label/MoleculeInputLabel";
import {createMoleculeLabelSelect} from "../../Molecules/molecule-label-select/MoleculeLabelSelect";
import {createMoleculeLabelCheckbox} from "../../Molecules/molecule-label-checkbox/MoleculeLabelCheckbox";
import {createMoleculeLabelRadio} from "../../Molecules/molecule-label-radio/MoleculeLabelRadio";

export const createForm = ({
                               formTitle = 'title',
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
                               fieldTelLabelText,
                               fieldTelRequired,
                               checkbox1Required,
                               checkbox2Required,
                               patternField2,
                               patternTooltipTextField2,
                               fieldCompanyNameLabelText,
                               fieldCompanyNameRequired,
                               isShown,
                               ...args
                           }) => {

    // create wrapper
    const wrapperElement = document.createElement('div');
    wrapperElement.className = ['molecule-form-checkout'].join(' ');
    // wrapperElement.id = 'app-vue-checkout-form';
    // wrapperElement.setAttribute('v-cloak', '');

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

    // radio buttons
    const radioButtons1 = createMoleculeLabelRadio({
        legendText: 'Kies uw type aankoop',
        /*required: true,*/
        customRadio: true,
        layout: 'horizontal',
        dataStyle: 'no-panel',
        data: [
            {
                id: 'radio-custom1',
                checked: true,
                disabled: false,
                groupName: 'group-custom',
                customRadio: false,
                labelText: 'Particulier',
                forAttr: 'radio-custom1',
            },
            {
                id: 'radio-custom2',
                checked: false,
                disabled: false,
                groupName: 'group-custom',
                customRadio: false,
                labelText: 'Zakelijk',
                forAttr: 'radio-custom2',
            }
        ]
    })

    // title
    const h1 = createBaseH1({
        text: formTitle,
        className: 'h2',
    })

    function otherFunc (e) {
        console.log('hello other func');
        let target = e.target;
        switch (target.id) {
            case 'radio-custom1':
                console.log('private');
                document.querySelector('[data-show="true"]').setAttribute('data-show', 'false');
                break;
            case 'radio-custom2':
                console.log('business');
                document.querySelector('[data-show="false"]').setAttribute('data-show', 'true');
                break;
        }
    }

    function formStuff () {
        console.log('hello form stuff');
        document.addEventListener('change', otherFunc);
    }
    setTimeout(() => {
        formStuff();
    }, 150)

    // company name
    const formFieldCompany = createMoleculeInputLabel({
        name: 'txt_company_name',
        id: 'txt_company_name',
        forAttr: 'txt_company_name',
        labelText: fieldCompanyNameLabelText,
        required: fieldCompanyNameRequired,
        dataStyle: dataStyle,
        placeholder: ' ',
        autocomplete: 'organization',
        isShown: false,
    })

    const formField1 = createMoleculeInputLabel({
        name: 'txt_name',
        id: 'txt_name',
        forAttr: 'txt_name',
        labelText: field1LabelText,
        required: field1Required,
        dataStyle: dataStyle,
        placeholder: ' ',
        autocomplete: 'name',
    })

    const formField2 = createMoleculeInputLabel({
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

    const formField3Select = createMoleculeLabelSelect({
        name: 'select_country',
        id: 'select_country',
        forAttr: 'select_country',
        labelText: field3SelectLabelText,
        dataStyle: dataStyle
    })

    // postcode
    const formField4 = createMoleculeInputLabel({
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

    // telephone number field here
    const formFieldTelephone = createMoleculeInputLabel({
        name: 'txt_telephone',
        id: 'txt_telephone',
        forAttr: 'txt_telephone',
        labelText: fieldTelLabelText,
        required: fieldTelRequired,
        dataStyle: dataStyle,
        placeholder: '12345678',
        autocomplete: 'tel-national',
    })

    // add fieldset for checkboxes
    const fieldsetElement = document.createElement('fieldset');
    fieldsetElement.className = ['molecule-form-checkout__fieldset atom-fieldset'].join(' ');
    fieldsetElement.setAttribute('data-style', 'no-panel');

    function runTelField() {
        var input = document.querySelector("#txt_telephone");
        window.intlTelInput(input, {
            // options here
            // preferredCountries: ["nl", "be"],
            initialCountry: "nl",
            separateDialCode: true,
            onlyCountries: ["at", "be", "nl", "de", "fr", "it", "lu"],
            autoPlaceholder: "aggressive",
            utilsScript: "./intlTelInput/js/utils.js"
        });
        // remove country names between ()
        const countryElems = document.querySelectorAll('.iti__country-name');
        for (const countryElem of countryElems) {
            let countryName = countryElem.innerText;
            if (countryName.includes('(')) {
                const newCountryName = countryName.replace(/\s*\(.*?\)\s*/g, '');
                countryElem.innerText = newCountryName;
            }
        }
    };
    setTimeout(() => {
        runTelField();
    }, 50)

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

    // submit form fake
    function submitForm() {
        event.preventDefault();
        // store button
        const thisButton = event.target;
        // set button state to loading
        thisButton.setAttribute('data-state', 'loading');
        setTimeout(() => {
            thisButton.removeAttribute('data-state');
        }, 2000)
    }

    const formButton = createAtomButton({
        buttonText: buttonText,
        onClick: submitForm,
    })

    formElement.append(h1);
    formElement.append(radioButtons1);
    formElement.append(formFieldCompany);
    formElement.append(formField1);
    formElement.append(formField2);
    formElement.append(formField3Select);
    formElement.append(formField4);
    formElement.appendChild(gridElement);
    formElement.appendChild(formFieldTelephone);
    formElement.appendChild(fieldsetElement);
    formElement.append(formButton);

    wrapperElement.append(formElement);

    return wrapperElement;
};
