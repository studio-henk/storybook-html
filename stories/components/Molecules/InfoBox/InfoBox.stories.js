import {withDesign} from "storybook-addon-designs";
// badges
import {BADGE} from '@geometricpanda/storybook-addon-badges';
import {createInfoBox} from './InfoBox';

export default {
    title: 'Components/Molecules/info-box',
    component: 'createInfoBox',
    parameters: {
        badges: [BADGE.BETA],
        controls: {sort: 'requiredFirst'},
        docs: {
            description: {
                component: 'Infoboxes',
            },
        },
    },
    argTypes: {
        title: {
            control: 'text',
            table: {
                category: 'Content',
                type: {summary: 'text'},
                defaultValue: {summary: 'Heading'},
            }
        },
        subtitle: {
            control: 'text',
            table: {
                category: 'Content',
                type: {summary: 'text'},
                defaultValue: {summary: 'Subtitle'},
            }
        },
        content: {
            control: 'text',
            table: {
                category: 'Content',
                type: {summary: 'text'},
                defaultValue: {summary: '<p>Lorem ipsum dolor sit amet, ectetur adi piscing elit, tincidunt tincidunt.</p>'},
            }
        },
        icon: {
            control: {type: 'select'},
            options: [
                'icon-arrow-right', 'icon-arrow-left', 'icon-phone', 'icon-calendar', 'icon-truck'
            ],
            table: {
                category: 'Content',
                type: {summary: 'select'},
                defaultValue: {summary: ''},
            }
        },
        bgColor: {
            control: {type: 'select'},
            options: [
                'var(--color-black)',
                'var(--color-henk-black)',
                'var(--color-white)',
                'var(--color-henk-white)',
                'var(--color-accent1)',
                'var(--color-accent2)',
                'var(--color-accent3)',
                'var(--color-accent4)',
                'var(--color-accent5)',
                'var(--color-accent6)',
                'var(--color-accent7)',
                'var(--color-accent8)',
                'var(--color-accent9)',
                'var(--color-accent10)',
                'var(--color-accent11)',
                'var(--color-accent12)',
                'var(--color-accent13)',
                'var(--color-accent14)',
                'var(--color-accent15)',
                'var(--color-accent16)',
                'var(--color-accent17)',
                'var(--color-transparent)',
            ],
            table: {
                category: 'Colors',
                type: {summary: 'select'},
                defaultValue: {summary: 'var(--color-accent15)'},
            }
        },
        fgColor: {
            control: {type: 'select'},
            options: [
                'var(--color-black)',
                'var(--color-henk-black)',
                'var(--color-white)',
                'var(--color-henk-white)',
                'var(--color-accent1)',
                'var(--color-accent2)',
                'var(--color-accent3)',
                'var(--color-accent4)',
                'var(--color-accent5)',
                'var(--color-accent6)',
                'var(--color-accent7)',
                'var(--color-accent8)',
                'var(--color-accent9)',
                'var(--color-accent10)',
                'var(--color-accent11)',
                'var(--color-accent12)',
                'var(--color-accent13)',
                'var(--color-accent14)',
                'var(--color-accent15)',
                'var(--color-accent16)',
                'var(--color-accent17)',
                'var(--color-transparent)',
            ],
            table: {
                category: 'Colors',
                type: {summary: 'select'},
                defaultValue: {summary: 'var(--color-black)'},
            }
        },
        paddingTopUnits: {
            control: {type: 'number', min: 0},
            table: {
                category: 'Padding',
                type: {summary: 'number'},
                defaultValue: {summary: 3},
            }
        },
        paddingRightUnits: {
            control: {type: 'number', min: 0},
            table: {
                category: 'Padding',
                type: {summary: 'number'},
                defaultValue: {summary: 5},
            }
        },
        paddingBottomUnits: {
            control: {type: 'number', min: 0},
            table: {
                category: 'Padding',
                type: {summary: 'number'},
                defaultValue: {summary: 4},
            }
        },
        paddingLeftUnits: {
            control: {type: 'number', min: 0},
            table: {
                category: 'Padding',
                type: {summary: 'number'},
                defaultValue: {summary: 5},
            }
        },
        paddingTopUnitsDesktop: {
            control: {
                type: 'number',
                min: 0
            },
            table: {
                category: 'Padding',
                type: {summary: 'number'},
                defaultValue: {summary: 7},
            }
        },
        paddingRightUnitsDesktop: {
            control: {type: 'number', min: 0},
            table: {
                category: 'Padding',
                type: {summary: 'number'},
                defaultValue: {summary: 7},
            }
        },
        paddingBottomUnitsDesktop: {
            control: {type: 'number', min: 0},
            table: {
                category: 'Padding',
                type: {summary: 'number'},
                defaultValue: {summary: 7},
            }
        },
        paddingLeftUnitsDesktop: {
            control: {type: 'number', min: 0},
            table: {
                category: 'Padding',
                type: {summary: 'number'},
                defaultValue: {summary: 7},
            }
        }
    },
    decorators: [withDesign],
};

const Template = ({title, ...args}) => {
    return createInfoBox({title, ...args});
};

export const Base = Template.bind({});
Base.args = {
    title: 'Heading',
    icon: '',
    content: 'Lorem ipsum dolor sit amet, ectetur adi piscing elit, tincidunt tincidunt.',
};
Base.parameters = {
    design: {
        name: "Figma",
        type: "figma",
        url: "https://www.figma.com/file/DHpJJWTOUv4MpfeCEx3pe6/UI?node-id=111%3A123&t=GDdILhF3ojig0wTh-1",
        offset: [0, 0],
        scale: 1,
        allowFullscreen: false
    },
};

export const IconCalendar = Template.bind({});
IconCalendar.args = {
    title: 'Bezorgen op afspraak',
    content: '<p>Lorem ipsum dolor sit amet, ectetur adi piscing elit, tincidunt tincidunt.</p>',
    icon: 'icon-calendar',
};
IconCalendar.parameters = {
    controls: {include: ['title', 'content']},
    design: {
        name: "Figma",
        type: "figma",
        url: "https://www.figma.com/file/DHpJJWTOUv4MpfeCEx3pe6/UI?node-id=280%3A119&t=GDdILhF3ojig0wTh-1",
    },
}
IconCalendar.storyName = 'Bezorgen op afspraak';

export const IconTruck = Template.bind({});
IconTruck.args = {
    title: 'Gratis levering',
    content: '<p>Lorem ipsum dolor sit amet, ectetur adi piscing elit, tincidunt tincidunt.</p>',
    icon: 'icon-truck'
};
IconTruck.parameters = {
    controls: {include: ['title', 'content']},
    design: {
        name: "Figma",
        type: "figma",
        url: "https://www.figma.com/file/DHpJJWTOUv4MpfeCEx3pe6/UI?node-id=280%3A137&t=GDdILhF3ojig0wTh-1",
    },
}
IconTruck.storyName = 'Gratis levering';

export const IconPhone = Template.bind({});
IconPhone.args = {
    title: 'Waar kunnen we mee helpen?',
    content: '<p>Lorem ipsum dolor sit amet, ectetur adi piscing elit, tincidunt tincidunt.</p>',
    icon: 'icon-phone'
};
IconPhone.parameters = {
    controls: {include: ['title', 'content']},
    design: {
        name: "Figma",
        type: "figma",
        url: "https://www.figma.com/file/DHpJJWTOUv4MpfeCEx3pe6/UI?node-id=280%3A155&t=GDdILhF3ojig0wTh-1",
    },
}
IconPhone.storyName = 'Helpen?';

export const IconPhoneAltContent = Template.bind({});
IconPhoneAltContent.args = {
    title: 'Waar kunnen we mee helpen?',
    content: '' +
        '<a href="tel:+31(0)12345678">+31 (0)12345678</a><br />' +
        '<a href="mailto:info@studio-henk.nl">info@studio-henk.nl</a>',
    icon: 'icon-phone'
};
IconPhoneAltContent.parameters = {
    controls: {include: ['title', 'content']},
}
IconPhoneAltContent.storyName = 'With alternative content';

export const Subtitle = Template.bind({});
Subtitle.args = {
    title: 'Voor 16 november geleverd.',
    subtitle: 'Levering',
    content: '<p>Je ontvangt per mail een track and trace code om je bestelling te volgen.</p>',
    icon: '',
    bgColor: 'var(--color-henk-white)',
    fgColor: 'var(--color-henk-black)',
};
Subtitle.parameters = {
    controls: {include: ['title', 'content']},
    design: {
        name: "Figma",
        type: "figma",
        url: "https://www.figma.com/file/DHpJJWTOUv4MpfeCEx3pe6/UI?node-id=280%3A167&t=GDdILhF3ojig0wTh-1",
    },
}
Subtitle.storyName = 'With subtitle';

export const BackgroundAccent10 = Template.bind({});
BackgroundAccent10.args = {
    content: '<p>Lorem ipsum dolor sit amet, ectetur adi piscing elit, tincidunt tincidunt.</p>',
    bgColor: 'var(--color-accent5)',
    fgColor: 'var(--color-henk-black)',
    icon: 'icon-phone'
};
BackgroundAccent10.parameters = {
    controls: {include: ['title', 'content', 'bgColor', 'fgColor']},
}
BackgroundAccent10.storyName = 'Highlighted';