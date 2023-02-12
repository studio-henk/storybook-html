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
        url: "https://www.figma.com/file/DHpJJWTOUv4MpfeCEx3pe6/UI?node-id=16%3A144&t=rsNgWdfYtt2CC04f-1",
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
            story: '> _Anything from 45 to 75 characters is widely regarded as a satisfactory length of line for a single-column page set in a serifed text face in a text size. The 66-character line (counting both letters and spaces) is widely regarded as ideal. For multiple column work, a better average is 40 to 50 characters_. See https://webtypography.net/2.1.2'
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

const BookStyleTemplate = ({text1, text2, text3 }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    return `
    <div class="book-style">
        <p>${text1}</p>
        <p>${text2}</p>
        <p>${text3}</p>
    </div>
  `;
};

export const BookLook = BookStyleTemplate.bind({});
BookLook.args = {
    text1: 'ALS Gregor Samsa eines Morgens aus unruhigen Träumen erwachte, fand er sich in seinem Bett zu einem ungeheuren Ungeziefer verwandelt. Er lag auf seinem panzerartig harten Rücken und sah, wenn er den Kopf ein wenig hob, seinen gewölbten, braunen, von bogenförmigen Versteifungen geteilten Bauch, auf dessen Höhe sich die Bettdecke, zum gänzlichen Niedergleiten bereit, kaum noch erhalten konnte. Seine vielen, im Vergleich zu seinem sonstigen Umfang kläglich dünnen Beine flimmerten ihm hilflos vor den Augen.',
    text2: '»Was ist mit mir geschehen?« dachte er. Es war kein Traum. Sein Zimmer, ein richtiges, nur etwas zu kleines Menschenzimmer, lag ruhig zwischen den vier wohlbekannten Wänden. Über dem Tisch, auf dem eine auseinandergepackte Musterkollektion von Tuchwaren ausgebreitet war – Samsa war Reisender –, hing das Bild, das er vor kurzem aus einer illustrierten Zeitschrift ausgeschnitten und in einem hübschen, vergoldeten Rahmen untergebracht hatte. Es stellte eine Dame dar, die, mit einem Pelzhut und einer Pelzboa versehen, aufrecht dasaß und einen schweren Pelzmuff, in dem ihr ganzer Unterarm verschwunden war, dem Beschauer entgegenhob.',
    text3: 'Gregors Blick richtete sich dann zum Fenster, und das trübe Wetter – man hörte Regentropfen auf das Fensterblech aufschlagen – machte ihn ganz melancholisch. »Wie wäre es, wenn ich noch ein wenig weiterschliefe und alle Narrheiten vergäße,« dachte er, aber das war gänzlich undurchführbar, denn er war gewöhnt, auf der rechten Seite zu schlafen, konnte sich aber in seinem gegenwärtigen Zustand nicht in diese Lage bringen.'
};
BookLook.parameters = {
    badges: [BADGE.EXPERIMENTAL],
}
