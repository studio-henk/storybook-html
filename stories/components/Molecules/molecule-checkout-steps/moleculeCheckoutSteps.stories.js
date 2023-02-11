import {createMoleculeCheckoutSteps} from './moleculeCheckoutSteps';
import {withDesign} from "storybook-addon-designs";
import {BADGE} from "@geometricpanda/storybook-addon-badges";
export default {
    title: 'Components/Molecules/Checkout Steps',
    component: 'createMoleculeCheckoutSteps',
    parameters: {
        badges: [BADGE.BETA],
        controls: {sort: 'requiredFirst'},
        docs: {
            description: {
                component: 'The CheckoutSteps component shows steps to take to complete the checkout.',
            },
        },
    },
    argTypes: {
        data: {
            control: 'object'
        },
    },
    decorators: [withDesign],
};

const Template = ({title, ...args}) => {
    return createMoleculeCheckoutSteps({...args});
};

export const Base = Template.bind({});
Base.args = {
    element: 'ol',
    dataStyle: 'no-bullets',
    data: [
        {
            id: 1,
            text: 'step 1',
            href: '/?path=/story/templates-pages-pages-homepage--base',
            isActive: true,
        },
        {
            id: 2,
            text: 'step 2',
            href: '/?path=/story/templates-pages-pages-homepage--base'
        },
        {
            id: 3,
            text: 'step 3',
            href: '/?path=/story/templates-pages-pages-homepage--base'
        }
    ]
};
Base.parameters = {
    badges: [BADGE.BETA],
    controls: {include: ['data']},
    docs: {
        description: {
            story: 'Base CheckoutSteps',
        },
    },
    design: {
        type: "figma",
        url: "https://www.figma.com/file/DHpJJWTOUv4MpfeCEx3pe6/UI?node-id=163%3A156&t=CzZFiclWQ6jogxIm-1",
    },
}

export const henkSteps = Template.bind({});
henkSteps.args = {
    element: 'ol',
    dataStyle: 'no-bullets',
    data: [
        {
            id: 1,
            text: 'gegevens',
            href: '/?path=/story/templates-pages-pages-homepage--base',
            isActive: true,
        },
        {
            id: 2,
            text: 'levering',
            href: '/?path=/story/templates-pages-pages-homepage--base'
        },
        {
            id: 3,
            text: 'betaling',
            href: '/?path=/story/templates-pages-pages-homepage--base'
        }
    ]
};
henkSteps.parameters = {
    controls: {include: ['data']},
    docs: {
        description: {
            story: 'CheckoutSteps with Dutch step names.',
        },
    },
    design: {
        type: "figma",
        url: "https://www.figma.com/file/DHpJJWTOUv4MpfeCEx3pe6/UI?node-id=163%3A156&t=CzZFiclWQ6jogxIm-1",
    },
}
henkSteps.storyName = 'HENK Steps';

export const stepDeliveryActive = Template.bind({});
stepDeliveryActive.args = {
    element: 'ol',
    dataStyle: 'no-bullets',
    data: [
        {
            id: 1,
            text: 'gegevens',
            href: '/?path=/story/templates-pages-pages-homepage--base',
        },
        {
            id: 2,
            text: 'levering',
            href: '/?path=/story/templates-pages-pages-homepage--base',
            isActive: true,
        },
        {
            id: 3,
            text: 'betaling',
            href: '/?path=/story/templates-pages-pages-homepage--base'
        }
    ]
};
stepDeliveryActive.parameters = {
    controls: {include: ['data']},
    docs: {
        description: {
            story: 'Step 2 active',
        },
    },
    design: {
        type: "figma",
        url: "https://www.figma.com/file/DHpJJWTOUv4MpfeCEx3pe6/UI?node-id=163%3A156&t=CzZFiclWQ6jogxIm-1",
    },
}

export const stepPaymentActive = Template.bind({});
stepPaymentActive.args = {
    element: 'ol',
    dataStyle: 'no-bullets',
    data: [
        {
            id: 1,
            text: 'gegevens',
            href: '/?path=/story/templates-pages-pages-homepage--base',
        },
        {
            id: 2,
            text: 'levering',
            href: '/?path=/story/templates-pages-pages-homepage--base',
        },
        {
            id: 3,
            text: 'betaling',
            href: '/?path=/story/templates-pages-pages-homepage--base',
            isActive: true,
        }
    ]
};
stepPaymentActive.parameters = {
    controls: {include: ['data']},
    docs: {
        description: {
            story: 'Step 3 active',
        },
    },
    design: {
        type: "figma",
        url: "https://www.figma.com/file/DHpJJWTOUv4MpfeCEx3pe6/UI?node-id=163%3A156&t=CzZFiclWQ6jogxIm-1",
    },
}