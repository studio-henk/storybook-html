import { createOrgModal } from './OrgModal';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Organisms/OrgModal_hidden',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
    buttonText: { control: 'text' },
    onCloseModal: { action: 'onCloseModal' },
  },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ buttonText, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createOrgModal({ buttonText, ...args });
};

export const ModalOpen = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
ModalOpen.args = {
  buttonText: 'Close',
  isOpen: true
};
