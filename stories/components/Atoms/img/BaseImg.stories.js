// import { withDesign } from "storybook-addon-designs";
// import './atom-h1.css';
import { createBaseImg } from './BaseImg';
import {BADGE} from "@geometricpanda/storybook-addon-badges";

export default {
  title: 'Components/Atoms/Base/Image',
  parameters: {
    badges: [BADGE.BETA, BADGE.EXPERIMENTAL],
  },
  argTypes: {
    variant: {
        control: { type: 'select' },
        options: ['base', 'rounded', 'avatar', 'logo']
    },
    alt: {
        control: 'text'
    },
  },
  //decorators: [withDesign],
};

const Template = ({ src, width, height, alt, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<p>${label}</p>`;
  return createBaseImg({ src, width, height, alt, ...args });
};

export const Base = Template.bind({});
Base.args = {
    width: 250,
    height: 250,
    alt: 'alt text here',
};

Base.parameters = {
    controls: { exclude: ['width', 'height'] },
}

// rounded corners
export const RoundedCorners = Template.bind({});
RoundedCorners.args = {
    variant: 'rounded',
    width: 250,
    height: 250,
    alt: 'This image has rouned corners',
};

RoundedCorners.parameters = {
    controls: { exclude: ['width', 'height'] },
}

// logo HENK
export const HenkLogo = Template.bind({});
HenkLogo.args = {
    src: '/images/henk.svg',
    variant: 'logo',
    width: 300,
    height: 26,
    alt: 'HENK logo',
};

HenkLogo.parameters = {
    controls: { exclude: ['variant', 'width', 'height'] },
}

export const Avatar = Template.bind({});
Avatar.args = {
    src: '/images/okke1.jpg',
    variant: 'avatar',
    width: 40,
    height: 40,
    alt: 'alt text here',
};

Avatar.parameters = {
    controls: { exclude: ['variant', 'width', 'height'] },
}


// Base.parameters = {
//     // controls: { exclude: ['variant'] },
//     design: {
//         type: "figma",
//         url: "https://www.figma.com/file/qWDiZBpGWRBLwJh9qNVB7K/UI-Library?node-id=1350%3A76",
//     },
// }