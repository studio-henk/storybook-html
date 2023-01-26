import { createAtomLabel } from './AtomLabel';
import {BADGE} from "@geometricpanda/storybook-addon-badges";
export default {
  title: 'Components/Atoms/Base/Label',
  component: createAtomLabel,
  parameters: { controls: { sort: 'requiredFirst' } },
  /*parameters: {
    badges: [BADGE.NEEDS_REVISION],
  },*/
  argTypes: {
    labelText: { control: 'text' },
    forAttr: {
      control: 'text',
      type: {
          name: 'string',
          required: true
      },
    },
    pattern: {
      control: 'text',
      /*table: {
          type: {summary: 'string'},
          defaultValue: {summary: '.*\\S.*'},
      },*/
    },
    /*dataStyle: {
      control: {type: 'select'},
      options: ['', 'labels-as-placeholders']
    }*/
  },
};

const Template = ({ labelText,forAttr, ...args }) => {
  return createAtomLabel({ labelText,forAttr, ...args });
};
export const Default = Template.bind({});
Default.args = {
  labelText: 'Label text',
  forAttr: 'input1'
};
Default.parameters= {
  badges: [BADGE.BETA],
  // controls: {include: ['labelText', '']},
}
Default.storyName = 'Atom Label';

// export const BaseLabelCircle = Template.bind({});
// BaseLabelCircle.args = {
//   labelText: 'Label text',
//   forAttr: 'forwho',
//   checkmarkCircle: true
// };
// BaseLabelCircle.parameters= {
//   badges: [BADGE.EXPERIMENTAL],
//   controls: {include: ['labelText']},
// }
// BaseLabelCircle.storyName = 'Base Label Circle';
