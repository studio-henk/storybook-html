import { createForm } from "./OrganismFormCheckout";

// import 'intl-tel-input/build/css/intlTelInput.css';

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
    checkbox1Required: true
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
};

formShowRequiredWithCSSValidation.storyName = "With CSS validation";

function runTelField () {
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
    // console.table(countryElems);
    for (const countryElem of countryElems) {
        // console.log(countryElem.innerText);
        let countryName = countryElem.innerText;
        // console.log(countryName);
        if (countryName.includes('(')) {
            // console.log('I have a ( character !');
            // countryName.replace(/(.*)/, 'hello');
            // console.log(countryName);
            const newCountryName = countryName.replace(/\s*\(.*?\)\s*/g, '');
            // console.log(newCountryName);
            countryElem.innerText = newCountryName;
        }
        // console.log(countryName);
    }
}

/*var test2 = function() {
    console.log('test2: do something !');
}*/
// test2();
/*window.parent.window.GLOBAL = {
    mydata: 'hello'
  };*/


/*const formStories = window.parent.document.querySelectorAll('a[data-parent-id="components-organisms-checkout-form"]');
console.log(formStories);
for (const formStory of formStories) {
    console.log(formStory);
}*/

// Alternative to load event
/*document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    runTelField();
  }
};*/

/*window.parent.window.addEventListener('hashchange', () => {
  console.log('The hash has changed!');
}, false);*/

/*
window.addEventListener('hashchange', () => {
  console.log('The hash has changed!');
}, false);*/

/*
window.parent.window.addEventListener('unload', () => {
  console.log('The hash has changed!');
}, false);*/
