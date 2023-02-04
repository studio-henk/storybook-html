import {createForm} from "./OrganismFormCheckout";

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

const Template = ({...args}) => {
    return createForm({
        dataStyle: 'labels-as-placeholders',
        ...args
    });
};

export const Base = Template.bind({});
Base.args = {
    formTitle: 'Adres gegevens',
    buttonText: 'naar levering',
    field1LabelText: 'Naam',
    field2LabelText: 'Email Adres',
    field3SelectLabelText: 'Land',
    field4LabelText: 'Postcode',
    fieldTelLabelText: 'Telefoon nummer',
    fieldCompanyNameLabelText: 'Bedrijf',
    fieldCompanyNameRequired: false,
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

function documentChangeEventsHandler(e) {
    // console.log('documentChangeEventsHandler called');
    // hideFieldsOnLoad();
    let target = e.target;
    // console.log(target);
    // console log shows changed element name and value
    console.log(e.type + ' event called by: ' + target.id + ' with value: ' + target.value);
    switch (target.id) {
        // TODO: use correct ID's
        case 'radio-private':
            // console.log(target.value);
            // const shownField = document.querySelector('[data-show="yes"]');
            // shownField.setAttribute('data-show', 'no');
            break;
        case 'radio-business':
            // console.log(target.value);
            // const hiddenField = document.querySelector('[data-show="no"]');
            // hiddenField.setAttribute('data-show', 'yes');
            break;
        case 'input_cb_alt_delivery_address':
            // hiddenField.setAttribute('data-show', 'yes');
            break;
        case 'txt_postcode':
            // put what is typed here into feedbackDisplay
            console.log(target.value);
            // document.querySelector('.cmp-feedback-display')
            // document.querySelector('#txt_postCode').value = target.value;
            break;
        case 'txt_housenumber':
            // only when event is input, not change
            console.log(e.type);
            if (e.type === 'input') {
                // set a short timeout to give user some space
                // check if txt_postcode is filled in (has a value)
                const postcodeFieldFilled = document.querySelector('#txt_postcode');
                if (postcodeFieldFilled.value && postcodeFieldFilled.value !== '') {
                    console.log('im filled in');
                    // run postnl api fetch
                    setTimeout(() => {
                        // set loading state on of feedbackDisplay
                        const feedbackDisplayElem = document.querySelector('.cmp-feedback-display');
                        feedbackDisplayElem.setAttribute('data-state', 'loading');
                        getAddress();
                    }, 500)
                } else {
                    console.log(postcodeFieldFilled.value);
                    console.log('im NOT filled in');
                }
            }
            break;
        default:
        // console.log(target.value);
    }
    hideFieldsOnLoad();
}

function getAddress() {
    console.log('getting address');
    // check if fields postcode, huisnummer are filled in
    // if not filled in addition then try with postcode and huisnummer only
    // else use all 3
    // do fetch here
    // https://api.postnl.nl/v4/address/international/?countryIso=NLD&postalCode=1098 XB&houseNumber=516
    // let url = 'https://api.postnl.nl/v4/address/international/?countryIso=NLD&postalCode=1098 XB&houseNumber=516';
    // with apikey in header
    // kn15RoqPHjUOVMRuxLNcgh9XUZHKO1AS
    // fetch(url, {
    fetch('../postnl-response.json')
        .then((response) => {
            if (!response.ok) {
                console.log(response.status);
                console.log(response.statusText);
                throw new Error('Network response was not OK');
            } else {
                console.log(response.status);
                console.log(response.statusText);
            }
            return response.json();
        })
        .then((data) => {
            // console.log(data);
            // do something with result
            const feedbackDisplayElem = document.querySelector('.cmp-feedback-display');
            feedbackDisplayElem.removeAttribute('data-state');
            dealWithPostNLData(data);
        })
        .catch((error) => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

// display in feedbackDisplay component
function dealWithPostNLData(postnlData) {
    // console.log('hello postnl data');
    // console.log(postnlData[0]);
    // console.log(postnlData[0].streetName);
    const streetName = postnlData[0].streetName;
    const houseNumber = postnlData[0].houseNumber;
    const postalCode = postnlData[0].postalCode;
    const cityName = postnlData[0].cityName;
    const countryName = postnlData[0].countryName;

    // put in address element in feedbackDisplay block
    const feedbackDisplayTarget = document.querySelector('#result-address');
    if (feedbackDisplayTarget.classList.contains('--fade-in')) {
        feedbackDisplayTarget.classList.remove('--fade-in');
    }
    // line 1
    feedbackDisplayTarget.innerHTML = streetName + ' ' + houseNumber + '<br>';
    // line 2
    feedbackDisplayTarget.innerHTML += postalCode + ', ' + cityName + '<br>';
    // line 3
    feedbackDisplayTarget.innerHTML += countryName;
    // add transition class if not has already
    if (feedbackDisplayTarget.classList.contains('--fade-in')) {
        return true;
    } else {
        setTimeout(() => {
            feedbackDisplayTarget.classList.add('--fade-in');
        }, 500)
    }

}

function addEventHandlersForDocument() {
    console.log('addEventHandlersForDocument reporting for duty: listening for change events');
    document.addEventListener('change', documentChangeEventsHandler);
    document.addEventListener('input', documentChangeEventsHandler);
    // document.querySelector('#txt_housenumber').removeEventListener('change', documentChangeEventsHandler);
    // document.querySelector('#txt_housenumber').removeEventListener('change', documentChangeEventsHandler);
}

function addEventHandlerForAddressButton() {
    console.log('addEventHandlerForAddressButton reporting for duty: listening for click event');
    document.querySelector('#buttonGetAddress').addEventListener('click', getAddress, false);
}

/*setTimeout(() => {
    addEventHandlersForDocument();
}, 500)*/

/* dataIf: means: show field when condition is true / checked */
const dataFieldsToHide = {
    fields: [
        {
            id: 1,
            name: 'Bedrijfsnaam',
            dataIf: 'radio-business',
            dataIfSelector: 'radio-business',
            dataIfValue: true,
        },
        {
            id: 2,
            name: 'alt delivery address',
            dataIf: 'input_cb_alt_delivery_address'
        },
        {
            id: 3,
            name: 'Plaatsnaam',
            dataIf: 'select_country === "BE"',
            dataIfSelector: 'select_country',
            dataIfValue: 'BE',
        }
    ]
}

function hideFieldsOnLoad(dataIf) {
    // console.log('hideFieldsOnLoad called from form stories');
    // all fields marked with [data-if] should be hidden on load unless its condition is true
    const getAllElementsToHide = document.querySelectorAll('[data-if-selector]');
    console.log('elements to hide: ');
    console.log(getAllElementsToHide); // not the controls but things to hide
    if (getAllElementsToHide.length < 1) {
        console.log('found no elements to hide');
    } else {
        console.log('found some elements to hide');
        // find corresponding radio button or whatever and check if checked
        for (const allElementsToHideElement of getAllElementsToHide) {
            console.log(allElementsToHideElement.dataset);
            // let condition = allElementsToHideElement.dataset.if;
            let conditionSelector = allElementsToHideElement.dataset.ifSelector;
            console.log('conditionSelector:' + conditionSelector);
            let conditionValue = allElementsToHideElement.dataset.ifValue;
            // find corresponding form control and check if checked
            let correspondingControls = document.querySelectorAll('#' + conditionSelector);
            // is condition value a boolean or string?
            console.log('conditionValue: ' + conditionValue);
            // if boolean then it is a radio or checkbox
            console.log(typeof conditionValue);
            const currentlyChecked = correspondingControls[0].checked;
            console.log(typeof currentlyChecked);
            // compare
            if (currentlyChecked === false) {
                // hide field
                allElementsToHideElement.style.display = 'none';
                allElementsToHideElement.style.opacity = '0';
            } else {
                // show
                allElementsToHideElement.style.display = 'block';
                allElementsToHideElement.setAttribute('data-alert', 'warning');
            }
        }
    }
    // addEventHandlersForDocument();
}

// Alternative to DOMContentLoaded event
document.onreadystatechange = () => {
    if (document.readyState === "interactive") {
        hideFieldsOnLoad();
        addEventHandlersForDocument();
        // addEventHandlerForAddressButton();
    }
};