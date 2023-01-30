import {withDesign} from "storybook-addon-designs";
import './atom-paragraph.css';
import {createBaseParagraph} from './BaseParagraph';
import {BADGE} from "@geometricpanda/storybook-addon-badges";

export default {
    title: 'Components/Atoms/Base/Paragraph',
    component: 'createBaseParagraph',
    parameters: {
        badges: [BADGE.BETA],
        docs: {
            description: {
                component: 'The ```<p>``` HTML element represents a paragraph. Paragraphs are usually represented in visual media as blocks of text separated from adjacent blocks by blank lines and/or first-line indentation, but HTML paragraphs can be any structural grouping of related content, such as images or form fields.',
            },
        },
    },
    argTypes: {
        text: {control: 'text'},
    },
    decorators: [withDesign],
};

const Template = ({text, ...args}) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<p>${label}</p>`;
    return createBaseParagraph({text, ...args});
};

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Base.args = {
    text: 'This is a paragraph.',
};

Base.parameters = {
    // controls: { exclude: ['variant'] },
    docs: {
        description: {
            story: 'Some story **markdown**',
        },
    },
    design: {
        type: "figma",
        url: "https://www.figma.com/file/qWDiZBpGWRBLwJh9qNVB7K/UI-Library?node-id=1350%3A76",
    },
};

// Bringhurst
export const Bringhurst = Template.bind({});
Bringhurst.args = {
    text: 'Bringhurst said line measure should be ca. 66 characters per line.',
};

Bringhurst.parameters = {
    docs: {
        description: {
            story: '> _Anything from 45 to 75 characters is widely regarded as a satisfactory length of line for a single-column page set in a serifed text face in a text size. The 66-character line (counting both letters and spaces) is widely regarded as ideal. For multiple column work, a better average is 40 to 50 characters_. See http://webtypography.net/2.1.2'
        },
    },
}

// multiple paragraphs
const MultiTemplate = ({text1, text2, ...args}) => {
    // You can either use a function to create DOM elements or use a plain html string!
    return `
    <p>${text1}</p>
    <p>${text2}</p>
  `;
    // return createBaseParagraph({ text, ...args });
};

export const TwoParas = MultiTemplate.bind({});
TwoParas.args = {
    text1: 'The &lt;p&gt; HTML element represents a paragraph. Paragraphs are usually represented in visual media as blocks of text separated from adjacent blocks by blank lines and/or first-line indentation, but HTML paragraphs can be any structural grouping of related content, such as images or form fields.',
    text2: 'Paragraphs are block-level elements, and notably will automatically close if another block-level element is parsed before the closing &lt;/p&gt; tag.',
};

