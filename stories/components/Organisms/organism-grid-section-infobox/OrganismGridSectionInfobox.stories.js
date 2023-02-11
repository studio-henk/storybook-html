import { createOrganismGridSectionInfobox } from './OrganismGridSectionInfobox';

export default {
  title: 'Components/Organisms/Infobox Grid Section',
  argTypes: {

  },
};

const Template = ({ ...args }) => {
  return createOrganismGridSectionInfobox({ ...args });
};

export const Base = Template.bind({});
Base.args = {

};
