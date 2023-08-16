import { HamburgerButton } from "./SB-HamburgerButton";
import { BADGE } from "@geometricpanda/storybook-addon-badges";
export default {
  title: "Components/HamburgerButton",
  component: HamburgerButton,
  /*parameters: { controls: { sort: 'requiredFirst' } },*/
  parameters: {
    badges: [BADGE.NEEDS_REVISION],
  },
  /*  argTypes: {
    labelText: { control: 'text' },
    forAttr: {
      control: 'text',
      type: {
          name: 'string',
          required: true
      },
    },
  },*/
};

const Template = ({ labelText, forAttr, ...args }) => {
  return HamburgerButton({ labelText, forAttr, ...args });
};
export const Default = Template.bind({});
/*Default.args = {
  labelText: 'Label text',
  forAttr: 'input1'
};*/
/*Default.parameters= {
  badges: [BADGE.BETA],
  // controls: {include: ['labelText', '']},
}*/
Default.storyName = "Hamburger Button";