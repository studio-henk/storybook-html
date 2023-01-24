import {withDesign} from "storybook-addon-designs";
import {Icon} from './_atom-icon';
// badges
import {BADGE} from '@geometricpanda/storybook-addon-badges';

export default {
    title: 'Components/Atoms/Icon/Icon Stories',
    component: Icon,
    argTypes: {
        icon: {
            control: {type: 'select'},
            options: [
                'icon-arrow-right', 'icon-arrow-left',
            ],
            /*table: {
                category: 'Colors',
            }*/
        },
        /*buttonElement: {
            control: {type: 'radio'},
            options: ['a', 'button', 'span'],
            table: {
                type: {summary: 'html element'},
                defaultValue: {summary: 'a'},
            },
        },*/
        /*buttonText: {
            name: 'buttonText',
            type: {
                name: 'string',
                required: true
            },
            description: 'a text label for button',
            table: {
                type: {summary: 'string'},
                defaultValue: {summary: 'button text'},
            },
            control: 'text'
        },*/
        /*style: {
            control: {type: 'select'},
            options: ['plain', 'soft']
        },*/
        /*accent: {
            control: {type: 'select'},
            options: [
                'accent1',
                'accent2', 'accent3', 'accent4', 'accent5', 'accent6', 'accent7', 'accent8', 'accent9', 'accent10', 'accent11', 'accent12', 'accent13', 'accent14', 'accent15', 'accent16', 'accent17'
            ],
            description: 'accent refers to a color from the HENK palette',
            table: {
                category: 'Colors',
            }
        },*/
        /*textColor: {
            control: {type: 'select'},
            options: [
                'white', 'black', 'henk-black', 'henk-white',
                'accent1', 'accent2', 'accent3', 'accent4', 'accent5', 'accent6', 'accent7', 'accent8', 'accent9', 'accent10', 'accent11', 'accent12', 'accent13', 'accent14', 'accent15', 'accent16', 'accent17'
            ],
            table: {
                category: 'Colors',
            }
        },*/
        /*role: {
          control: { type: 'radio' },
          options: ['Normal', 'primary', 'cancel', 'destructive'],
          table: {
            type: { summary: 'string' },
            defaultValue: { summary: 'base' },
          },
        },*/
        /*size: {
            control: {type: 'radio'},
            options: ['base', 'small', 'xsmall'],
            table: {
                type: {summary: 'string'},
                defaultValue: {summary: 'base'},
            },
        },*/
        /*shape: {
            control: {type: 'radio'},
            options: ['circle', 'rect', 'rounded'],
            table: {
                type: {summary: 'shape'},
                defaultValue: {summary: 'circle'},
            },
        },*/
        // textTransform: {},
        /*state: {
            control: {type: 'radio'},
            options: ['None', 'disabled'],
            table: {
                type: {summary: 'string'},
                defaultValue: {summary: 'None'},
            },
        },*/
        /*dataState: {
            control: {type: 'radio'},
            options: ['None', 'loading'],
            table: {
                type: {summary: 'This prop should be set by some javascript function when a ajax call is made.'},
                defaultValue: {summary: 'loading'},
            },
        },*/
    },
    decorators: [withDesign],
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({icon, ...args}) => {
    return Icon({icon, ...args});
};
export const IconArrowRight = Template.bind({});
IconArrowRight.args = {
    icon: 'icon-arrow-right',
};
// badge
IconArrowRight.parameters = {
    // controls: {exclude: ['onClick']},
    badges: [BADGE.BETA],
    /*design: {
        type: "figma",
        url: "https://www.figma.com/file/qWDiZBpGWRBLwJh9qNVB7K/UI-Library?node-id=1934%3A75&t=g6XyYAI8wx3Wy5f3-1",
    },*/
};

export const IconArrowLeft = Template.bind({});
IconArrowLeft.args = {
    icon: 'icon-arrow-left',
};
// badge
IconArrowLeft.parameters = {
    // controls: {exclude: ['onClick']},
    badges: [BADGE.BETA],
    /*design: {
        type: "figma",
        url: "https://www.figma.com/file/qWDiZBpGWRBLwJh9qNVB7K/UI-Library?node-id=1934%3A75&t=g6XyYAI8wx3Wy5f3-1",
    },*/
};