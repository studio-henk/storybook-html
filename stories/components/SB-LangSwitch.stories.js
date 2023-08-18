import { LangSwitch } from "./SB-LangSwitch.js";
import { BADGE } from "@geometricpanda/storybook-addon-badges";
export default {
  title: "Components/LangSwitch",
  component: LangSwitch,
  /*parameters: { controls: { sort: 'requiredFirst' } },*/
  parameters: {
    badges: [BADGE.NEEDS_REVISION],
  },
  argTypes: {
    lang: {
      control: { type: "select" },
      options: ["NL", "EN"],
    },
    /*    forAttr: {
      control: "text",
      type: {
        name: "string",
        required: true,
      },
    },*/
  },
};

const Template = ({ dataUrl, lang, ...args }) => {
  return LangSwitch({ dataUrl, lang, ...args });
};

export const Default = Template.bind({});
Default.args = {
  dataUrl: "/nl/cart/list",
  lang: "nl",
};
Default.parameters = {
  badges: [BADGE.BETA],
  controls: { include: ["lang", "NL"] },
};
Default.storyName = "LangSwitch";

/*
export const Default = () =>
  `<lang-switch data-url="/nl/test" lang="en"></lang-switch>`;*/