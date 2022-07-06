import { withDesign } from "storybook-addon-designs";
import './atom-paragraph.css';
import { createBaseParagraph } from './BaseParagraph';

export default {
  title: 'Components/Atoms/Paragraph',
  argTypes: {
      label: {control: 'text'},
  },
  decorators: [withDesign],
};

const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  return `<p>${label}</p>`;
  // return createBaseButton({ label, ...args });
};

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Base.args = {
  label: 'This is a paragraph.',
};

Base.parameters = {
    // controls: { exclude: ['variant'] },
    design: {
        type: "figma",
        url: "https://www.figma.com/file/qWDiZBpGWRBLwJh9qNVB7K/UI-Library?node-id=1350%3A76",
    },
};