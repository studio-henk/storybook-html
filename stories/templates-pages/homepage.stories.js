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
Base.args = {
    title: 'homepage',
    text: 'This is a homepage.',
};

export const About = Template.bind({});
About.args = {
    title: 'About us',
    text: 'This is an About page.',
};