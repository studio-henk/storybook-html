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

const dataFieldsToHide = {
    fields: [
        {
            id: 1,
            name: 'some field 1',
            dataIf: 'radio-business'
        },
        {
            id: 2,
            name: 'some field 2',
            dataIf: 'input_cb_alt_delivery_address'
        }
    ]
}

function documentChangeEventsHandler (e) {
    // console.log('documentChangeEventsHandler called');
    // hideFieldsOnLoad();
    let target = e.target;
    // console.log(target);
    // console log shows changed element name and value
    console.log('change event called by: ' + target.id + ' with value: ' + target.value);
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
        default:
            // console.log(target.value);
    }
    hideFieldsOnLoad();
}

function getAddress () {
    console.log('getting address');
    // check if fields postcode, huisnummer are filled in
        // if not filled in addition then try with postcode and huisnummer only
        // else use all 3
    // do fetch here
        // https://api.postnl.nl/v4/address/international/?countryIso=NLD&postalCode=1098 XB&houseNumber=516
        let url = 'https://api.postnl.nl/v4/address/international/?countryIso=NLD&postalCode=1098 XB&houseNumber=516';
        /*fetch(url)
            .then((response) => response.json())
            .then((data) => console.log(data));*/
    // with apikey in header
        // kn15RoqPHjUOVMRuxLNcgh9XUZHKO1AS
        fetch(url, {
          headers: {
            'apikey': 'kn15RoqPHjUOVMRuxLNcgh9XUZHKO1AS',
          },
          mode: 'no-cors',
        })
        .then((response) => response.json())
        .then((data) => console.log(data));

    // do something with result
        // display in feedbackDisplay component
}

function addEventHandlersForDocument () {
    console.log('addEventHandlersForDocument reporting for duty: listening for change events');
    document.addEventListener('change', documentChangeEventsHandler);
}

function addEventHandlerForAddressButton () {
    console.log('addEventHandlerForAddressButton reporting for duty: listening for click event');
    // document.addEventListener('click', documentChangeEventsHandler);
    document.querySelector('#buttonGetAddress').addEventListener('click', getAddress, false);
}

/*setTimeout(() => {
    addEventHandlersForDocument();
}, 500)*/

function hideFieldsOnLoad(dataIf) {
    // console.log('hideFieldsOnLoad called from form stories');
    // all fields marked with [data-if] should be hidden on load unless its condition is true
    const getAllElementsToHide = document.querySelectorAll('[data-if]');
    if (getAllElementsToHide.length < 1) {
        console.log('found no elements to hide');
    } else {
        console.log('found some elements to hide');
        // find corresponding radio button or whatever and check if checked
        for (const allElementsToHideElement of getAllElementsToHide) {
            let condition = allElementsToHideElement.dataset.if;
            // find corresponding form control and check if checked
            let correspondingControls = document.querySelectorAll('#' + condition);
            const currentlyChecked = correspondingControls[0].checked;
            // compare
            if (currentlyChecked === false) {
                // hide field
                allElementsToHideElement.style.display = 'none';
            } else {
                // show
                allElementsToHideElement.style.display = 'block';
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
    addEventHandlerForAddressButton();
  }
};