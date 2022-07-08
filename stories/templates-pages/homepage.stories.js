// import { withDesign } from "storybook-addon-designs";
import { createHomePage } from './homepage';

export default {
  title: 'Templates Pages/Pages/Homepage',
  argTypes: {
    title: {control: 'text'},
    text: {control: 'text'},
  },
  //decorators: [withDesign],
};

const Template = ({ title, text, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<p>${label}</p>`;
  return createHomePage({ title, text, ...args });
};

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Base.args = {
    title: 'homepage',
    text: 'This is a homepage.',
};

export const About = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
About.args = {
    title: 'About us',
    text: 'This is an About page.',
};

// Base.parameters = {
//     // controls: { exclude: ['variant'] },
//     design: {
//         type: "figma",
//         url: "https://www.figma.com/file/qWDiZBpGWRBLwJh9qNVB7K/UI-Library?node-id=1350%3A76",
//     },
// };

// Bringhurst
// export const Bringhurst = Template.bind({});
// Bringhurst.args = {
//   text: 'Bringhurst said line measure should be ca. 66 characters per line.',
// };

// multiple paragraphs
// const MultiTemplate = ({ text1,text2, ...args }) => {
//   // You can either use a function to create DOM elements or use a plain html string!
//   return `
//     <p>${text1}</p>
//     <p>${text2}</p>
//   `;
// };

// export const TwoParas = MultiTemplate.bind({});
// TwoParas.args = {
//     text1: 'The &lt;p&gt; HTML element represents a paragraph. Paragraphs are usually represented in visual media as blocks of text separated from adjacent blocks by blank lines and/or first-line indentation, but HTML paragraphs can be any structural grouping of related content, such as images or form fields.',
//     text2: 'Paragraphs are block-level elements, and notably will automatically close if another block-level element is parsed before the closing &lt;/p&gt; tag. See "Tag omission" below.',
// };