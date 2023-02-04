import {createMoleculeLabelRadio} from './MoleculeLabelRadio';
import {BADGE} from '@geometricpanda/storybook-addon-badges';

export default {
    title: 'Components/Molecules/Input Controls/Label + Radio',
    parameters: {
        badges: [BADGE.BETA],
    },
    argTypes: {
        // checked: { control: 'boolean' },
        // labelText: { control: 'text' },
        // forAttr: { control: 'text' },
        // id: { control: 'text' },
        order: {
            /*control: { type: 'radio' },
            options: ['base', 'reverse'],*/
            control: 'check', options: ['reverse'],
            table: {
                type: {summary: 'string'},
                defaultValue: {summary: 'base'},
            },
        },
    },
};

const Template = ({...args}) => {
    return createMoleculeLabelRadio({...args});
};

export const Default = Template.bind({});
Default.args = {
    legendText: 'Kies uw type aankoop',
    required: false,
    data: [
        {
            id: 'radio1',
            checked: true,
            disabled: false,
            groupName: 'group1',
            customRadio: false,
            labelText: 'Particulier',
            forAttr: 'radio1',
            value: 'value 1'
        },
        {
            id: 'radio2',
            checked: false,
            disabled: false,
            groupName: 'group1',
            customRadio: false,
            labelText: 'Zakelijk',
            forAttr: 'radio2',
            value: 'value 2'
        }
    ]
};
export const DefaultLongLegendAndLabels = Template.bind({});
DefaultLongLegendAndLabels.args = {
    legendText: 'Kies uw type aankoop and <br>something more yada yada ',
    required: false,
    data: [
        {
            id: 'radioLong1',
            checked: false,
            disabled: false,
            groupName: 'groupLong1',
            customRadio: false,
            labelText: 'Particulier and some more text and a break as well<br> to f*** things up',
            forAttr: 'radioLong1',
        },
        {
            id: 'radioLong2',
            checked: false,
            disabled: false,
            groupName: 'groupLong1',
            customRadio: false,
            labelText: 'Zakelijk',
            forAttr: 'radioLong2',
        }
    ]
};

export const Disabled = Template.bind({});
Disabled.args = {
    legendText: 'This control has been disabled',
    required: false,
    data: [
        {
            id: 'radio-disabled1',
            checked: false,
            disabled: true,
            groupName: 'group-disabled',
            customRadio: false,
            labelText: 'Particulier',
            forAttr: 'radio-disabled1',
        },
        {
            id: 'radio-disabled2',
            checked: false,
            disabled: true,
            groupName: 'group-disabled',
            customRadio: false,
            labelText: 'Zakelijk',
            forAttr: 'radio-disabled2',
        }
    ]
};
export const DefaultRequired = Template.bind({});
DefaultRequired.args = {
    legendText: 'This control is <strong>required</strong>',
    required: true,
    data: [
        {
            id: 'radio-required1',
            checked: false,
            disabled: false,
            groupName: 'group-required',
            customRadio: false,
            labelText: 'Particulier',
            forAttr: 'radio-required1',
        },
        {
            id: 'radio-required2',
            checked: false,
            disabled: false,
            groupName: 'group-required',
            customRadio: false,
            labelText: 'Zakelijk',
            forAttr: 'radio-required2',
        }
    ]
};

export const CheckedOnLoad = Template.bind({});
CheckedOnLoad.args = {
    legendText: 'Kies uw type aankoop',
    required: false,
    data: [
        {
            id: 'radio_on_load1',
            checked: true,
            disabled: false,
            groupName: 'groupROL1',
            customRadio: false,
            labelText: 'Particulier',
            forAttr: 'radio_on_load1',
        },
        {
            id: 'radio_on_load2',
            checked: false,
            disabled: false,
            groupName: 'groupROL1',
            customRadio: false,
            labelText: 'Zakelijk',
            forAttr: 'radio_on_load2',
        }
    ]
};

export const WithLink = Template.bind({});
WithLink.args = {
    legendText: 'Kies uw type aankoop',
    required: false,
    data: [
        {
            id: 'radio-link1',
            checked: false,
            disabled: false,
            groupName: 'group-link',
            customRadio: false,
            labelText: 'Particulier <a href="#">with a link</a>',
            forAttr: 'radio-link1',
        },
        {
            id: 'radio-link2',
            checked: false,
            disabled: false,
            groupName: 'group-link',
            customRadio: false,
            labelText: 'Zakelijk',
            forAttr: 'radio-link2',
        }
    ]
};

export const ReversedOrder = Template.bind({});
ReversedOrder.args = {
    legendText: 'Kies uw type aankoop',
    required: false,
    order: 'reverse',
    data: [
        {
            id: 'radio-reverse1',
            checked: false,
            disabled: false,
            groupName: 'group-reverse',
            customRadio: false,
            labelText: 'Particulier',
            forAttr: 'radio-reverse1',
        },
        {
            id: 'radio-reverse2',
            checked: false,
            disabled: false,
            groupName: 'group-reverse',
            customRadio: false,
            labelText: 'Zakelijk',
            forAttr: 'radio-reverse2',
        }
    ]
};

export const CustomRadio = Template.bind({});
CustomRadio.args = {
    legendText: 'Kies uw type aankoop',
    required: true,
    customRadio: true,
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
};

export const LayoutHorizontal = Template.bind({});
LayoutHorizontal.args = {
    legendText: 'Kies uw type aankoop',
    required: true,
    customRadio: false,
    layout: 'horizontal',
    data: [
        {
            id: 'radio-horizontal1',
            checked: true,
            disabled: false,
            groupName: 'group-horizontal1',
            customRadio: false,
            labelText: 'Particulier',
            forAttr: 'radio-horizontal1',
        },
        {
            id: 'radio-horizontal2',
            checked: false,
            disabled: false,
            groupName: 'group-horizontal1',
            customRadio: false,
            labelText: 'Zakelijk',
            forAttr: 'radio-horizontal2',
        }
    ]
};
LayoutHorizontal.storyName = "Horizontal Layout";

export const LayoutHorizontalCustom = Template.bind({});
LayoutHorizontalCustom.args = {
    legendText: 'Kies uw type aankoop',
    required: true,
    customRadio: true,
    layout: 'horizontal',
    data: [
        {
            id: 'radio-horizontal-custom1',
            checked: true,
            disabled: false,
            groupName: 'group-horizontal-custom',
            customRadio: false,
            labelText: 'Particulier',
            forAttr: 'radio-horizontal-custom1',
        },
        {
            id: 'radio-horizontal-custom2',
            checked: false,
            disabled: false,
            groupName: 'group-horizontal-custom',
            customRadio: false,
            labelText: 'Zakelijk',
            forAttr: 'radio-horizontal-custom2',
        }
    ]
};
LayoutHorizontalCustom.storyName = "Horizontal Layout Custom";

export const LayoutHorizontalNoPanel = Template.bind({});
LayoutHorizontalNoPanel.args = {
    legendText: 'Kies uw type aankoop',
    /*required: true,*/
    customRadio: true,
    layout: 'horizontal',
    dataStyle: 'no-panel',
    data: [
        {
            id: 'radio-custom-hor1',
            checked: true,
            disabled: false,
            groupName: 'group-custom',
            customRadio: false,
            labelText: 'Particulier',
            forAttr: 'radio-custom-hor1',
        },
        {
            id: 'radio-custom-hor2',
            checked: false,
            disabled: false,
            groupName: 'group-custom-hor',
            customRadio: false,
            labelText: 'Zakelijk',
            forAttr: 'radio-custom-hor2',
        }
    ]
};
LayoutHorizontalNoPanel.storyName = "No Panel";

/*export const ReversedOrderRequired = Template.bind({});
ReversedOrderRequired.args = {
  checked: false,
  required: true,
  labelText: 'Ik heb de algemene voorwaarden, aflevervoorwaarden en het retourbeleid gelezen en ga hiermee akkoord.',
  forAttr: 'hocker2',
  id: 'hocker2',
  order: 'reverse'
};*/

/*export const EmptyLabel = Template.bind({});
EmptyLabel.args = {
  checked: false,
  label: '',
  forAttr: 'hocker3',
  id: 'hocker3',
};*/

/*
export const CustomCheckboxRequired = Template.bind({});
CustomCheckboxRequired.args = {
  checked: false,
  required: true,
  labelText: 'Ik heb de algemene voorwaarden, aflevervoorwaarden en het retourbeleid gelezen en ga hiermee akkoord.',
  forAttr: 'hocker4',
  id: 'hocker4',
  customCheckbox: true
};
*/

/*export const CustomCheckboxCircle = Template.bind({});
CustomCheckboxCircle.args = {
  checked: false,
  labelText: 'Ik heb de algemene voorwaarden, aflevervoorwaarden en het retourbeleid gelezen en ga hiermee akkoord.',
  forAttr: 'hocker6',
  id: 'hocker6',
  customCheckbox: true,
  variant: 'circle'
};*/

/*
export const CustomCheckboxCircleRequired = Template.bind({});
CustomCheckboxCircleRequired.args = {
  checked: false,
  required: true,
  labelText: 'Ik heb de algemene voorwaarden, aflevervoorwaarden en het retourbeleid gelezen en ga hiermee akkoord.',
  forAttr: 'hocker6',
  id: 'hocker6',
  customCheckbox: true,
  variant: 'circle',
  order: 'reverse'
};*/

/*
function documentChangeEventsHandler(e) {
    let target = e.target;
    console.log(target);
    // let customerKind = document.querySelector('[name="group-customerKind"]');
    // console.log(customerKind);
    // console.log(customerKind.checked);
    // let hiddenField = document.querySelector('[data-show="no"]');
    // let shownField = document.querySelector('[data-show="yes"]');
    let hiddenFieldBusiness = document.querySelector('[data-if="business"]');
    switch (target.id) {
        // TODO: use correct ID's
        case 'radio-private':
            console.log(target.value);
            // const shownField = document.querySelector('[data-show="yes"]');
            // shownField.setAttribute('data-show', 'no');
            break;
        case 'radio-business':
            console.log(target.value);
            // const hiddenField = document.querySelector('[data-show="no"]');
            // hiddenField.setAttribute('data-show', 'yes');
            break;
        case 'input_cb_alt_delivery_address':
            console.log(target.value);
            // hiddenField.setAttribute('data-show', 'yes');
            break;
        default:
            console.log(target.checked);
            console.log(target.value);
    }
}
*/

/*function addEventHandlersForDocument() {
    console.log('addEventHandlersForDocument reporting for duty: listening for change events');
    document.addEventListener('change', documentChangeEventsHandler);
}

setTimeout(() => {
    addEventHandlersForDocument();
}, 500)*/

/*
function hideFieldsOnLoad() {
console.log('hideFieldsOnLoad called');
}

// Alternative to DOMContentLoaded event
document.onreadystatechange = () => {
  if (document.readyState === "interactive") {
    hideFieldsOnLoad();
  }
};*/
