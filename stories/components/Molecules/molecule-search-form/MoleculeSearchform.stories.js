import './_molecule-searchform.css'
import {createMoleculeInputLabel} from "../molecule-input-label/MoleculeInputLabel";
import {createAtomButton} from "../../Atoms/atom-button/atom-button";

export default {
    title: 'Components/Molecules/Search Form',
    argTypes: {
        labelText: {control: 'text'},
        buttonText: {control: 'text'},
        placeholder: {control: 'text'},
        shape: {
            control: {type: 'radio'},
            options: ['none', 'circle', 'rect', 'rounded'],
            table: {
                type: {summary: 'shape'},
                defaultValue: {summary: 'circle'},
            },
        }
    },
};

const Template = ({...args}) => {
    // create wrapper
    const wrapperElement = document.createElement('div');
    wrapperElement.className = ['molecule-search-form layout-horizontal'].join(' ');

    wrapperElement.appendChild(
        // create label+input
        createMoleculeInputLabel({
            ...args
        })
    )

    // create button
    wrapperElement.appendChild(
        // create label+input
        createAtomButton({
            ...args
        })
    )
    // return createMoleculeInputLabel({...args });
    return wrapperElement;
};

export const Base = Template.bind({});
Base.args = {
    labelText: 'Search the site',
    placeholder: 'You can enter several search keywords separated by a comma.',
    buttonText: 'search',
    shape: 'rounded',
    icon: 'icon-search'
};
Base.storyName = 'Default';