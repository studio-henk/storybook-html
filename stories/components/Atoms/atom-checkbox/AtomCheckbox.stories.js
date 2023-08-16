import { createAtomCheckbox } from "./AtomCheckbox";
export default {
  title: "Components/Atoms/Base/Input Checkbox",
  parameters: { controls: { sort: "requiredFirst" } },
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    id: {
      control: "text",
      type: {
        name: "string",
        required: true,
      },
    },
    name: {
      control: "text",
      type: {
        name: "string",
        required: true,
      },
    },
  },
};

const Template = ({ ...args }) => {
  return createAtomCheckbox({ ...args });
};

export const Default = Template.bind({});
Default.args = {
  checked: false,
  id: "checkbox_id_01",
  name: "checkbox_name_01",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  checked: false,
  id: "checkbox_id_02",
  name: "checkbox_name_02",
};