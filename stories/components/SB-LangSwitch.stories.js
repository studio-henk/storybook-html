import { LangSwitch } from "./SB-LangSwitch.js";
import { BADGE } from "@geometricpanda/storybook-addon-badges";
export default {
  title: "Components/LangSwitch",
  component: LangSwitch,
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

/*
const Template = ({ dataUrl, forAttr, ...args }) => {
  return LangSwitch({ dataUrl, forAttr, ...args });
};
export const Default = Template.bind({});
Default.args = {
  dataUrl: "/nl/cart/list",
};
/!*Default.parameters= {
  badges: [BADGE.BETA],
  // controls: {include: ['labelText', '']},
}*!/
Default.storyName = "LangSwitch";*/
export const Default = () =>
  `<lang-switch data-url="/nl/test" checked></lang-switch>`;