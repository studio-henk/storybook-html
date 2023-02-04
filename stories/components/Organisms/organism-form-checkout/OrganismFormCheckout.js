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
                               ...args
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

    // radio buttons
    const radioButtons1 = createMoleculeLabelRadio({
        legendText: 'Kies uw type aankoop',
        customRadio: true,
        layout: 'horizontal',
        dataStyle: 'no-panel',
        data: [
            {
                id: 'radio-private',
                checked: true,
                disabled: false,
                groupName: 'group-customerKind',
                customRadio: false,
                labelText: 'Particulier',
                forAttr: 'radio-private',
                value: 'private',
            },
            {
                id: 'radio-business',
                checked: false,
                disabled: false,
                groupName: 'group-customerKind',
                customRadio: false,
                labelText: 'Zakelijk',
                forAttr: 'radio-business',
                value: 'business',
            }
        ]
    })

    // title
    const h1 = createBaseH1({
        text: formTitle,
        className: 'h2',
    })

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
        // dataIf: 'radio-business',
        dataIfSelector: 'radio-business',
        dataIfValue: true,
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

    // plaatsnaam (BE)
    const formFieldCityName = createMoleculeInputLabel({
        name: 'txt_city_name',
        id: 'txt_city_name',
        forAttr: 'txt_city_name',
        labelText: 'Plaatsnaam',
        required: true,
        dataStyle: dataStyle,
        placeholder: ' ',
        autocomplete: 'address-level2',
        // dataIf: 'select_country === "BE"'
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
            autocomplete: 'off',
            required: true,
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

    // add feedbackDisplay here
    // connect to POSTNL API
    const feedbackDisplayElement = document.createElement('div');
    feedbackDisplayElement.className = 'cmp-feedback-display';
    /*feedbackDisplayElement.innerHTML = 'Hello !';
    feedbackDisplayElement.style.backgroundColor = 'beige';
    feedbackDisplayElement.style.padding = '2rem';*/
    feedbackDisplayElement.style.width = '100%';

    const infoBox = `<div class="info-section__box">
        <header class="info-section__header">
            <p class="info-section__header-heading">
                <small>Jouw adres</small>
            </p>
        </header>
        <div class="info-section__body">
            <!--<address class="info-section__body-address" xid="result-address" xdata-hasfadein="true" [data-skeleton="true"]>
                Straatnaam 123-2<br>
                1234 AB, AMSTERDAM<br>
                THE NETHERLANDS
            </address>-->
            <address class="info-section__body-address" id="result-address" data-hasfadein="true">
                Straatnaam 123-2<br>
                1234 AB, AMSTERDAM<br>
                THE NETHERLANDS
            </address>
            <!--<div>
                <input type="text" name="txt_streetName" id="txt_streetName" readonly>
                <input type="text" name="txt_houseNumber" id="txt_houseNumber" readonly>
                <br>
                <input type="text" name="txt_postCode" id="txt_postCode" readonly>
            </div>-->
        </div>
        <footer class="info-section__footer">
            <a href="#" class="info-section__footer-link" style="color: dodgerblue; border: 1px solid dodgerblue;">dit
                klopt niet</a>
        </footer>
    </div>
    `;

    const fbButton = `
        <button type="button" id="buttonGetAddress">get address</button>
    `;

    // feedbackDisplayElement.insertAdjacentHTML('beforeend', fbButton);

    feedbackDisplayElement.insertAdjacentHTML('beforeend', infoBox);


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
        helpText: 'Verklaren waar we het telefoon nummer voor gebruiken',
    })

    // add fieldset for delivery checkbox
    const fieldsetElementAltAddress = document.createElement('fieldset');
    fieldsetElementAltAddress.className = ['molecule-form-checkout__fieldset atom-fieldset'].join(' ');
    fieldsetElementAltAddress.setAttribute('data-style', 'no-panel');

    // create checkbox for other delivery address
    // Levering op ander adres
    fieldsetElementAltAddress.appendChild(
        createMoleculeLabelCheckbox({
            checked: false,
            disabled: false,
            // required: checkbox2Required,
            id: 'input_cb_alt_delivery_address',
            name: 'input_cb_alt_delivery_address',
            forAttr: 'input_cb_alt_delivery_address',
            labelText: 'Levering op ander adres',
            customCheckbox: true,
            order: 'reverse',
            alignment: 'between',
        })
    )

    // add placeholder div for alt adress fields
    const altAddressContainer = document.createElement('div');
    altAddressContainer.className = 'molecule-form-checkout__fields-container';
    altAddressContainer.innerHTML = 'hello placeholder for other fields.';
    // altAddressContainer.setAttribute('data-show', 'no');
    altAddressContainer.setAttribute('data-if', 'input_cb_alt_delivery_address');

    // add fieldset for checkboxes
    const fieldsetElement = document.createElement('fieldset');
    fieldsetElement.className = ['molecule-form-checkout__fieldset atom-fieldset'].join(' ');
    fieldsetElement.setAttribute('data-style', 'no-panel');

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
    formElement.append(formFieldCityName);
    formElement.appendChild(gridElement);
    formElement.appendChild(feedbackDisplayElement);
    formElement.appendChild(formFieldTelephone);
    formElement.appendChild(fieldsetElementAltAddress);
    formElement.appendChild(altAddressContainer);
    formElement.appendChild(fieldsetElement);
    formElement.append(formButton);

    wrapperElement.append(formElement);

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
                countryElem.innerText = countryName.replace(/\s*\(.*?\)\s*/g, '');
            }
        }
    }
    setTimeout(() => {
        runTelField();
    }, 50)

    // submit form fake
    function submitForm(event) {
        event.preventDefault();
        // store button
        const thisButton = event.target;
        // set button state to loading
        thisButton.setAttribute('data-state', 'loading');
        setTimeout(() => {
            thisButton.removeAttribute('data-state');
        }, 2000)
    }

    return wrapperElement;
};
