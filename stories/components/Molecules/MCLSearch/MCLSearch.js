import { createAtomButton } from '../../Atoms/atom-button/atom-button';
import { createAtomLabel} from "../../Atoms/AtomLabel";
import {createAtomInput} from "../../Atoms/AtomInput";

export const createMCLSearch = ({
  label,
  placeholder,
  buttonText,
}) => {
  const mclsearch = document.createElement('div');
  mclsearch.className = ['sh-molecule-search'].join(' ');
  // label
  mclsearch.appendChild(
      createAtomLabel({
        label: label,
      })
      // createAtomLabel({
      //   label: 'Search the site',
      // })
  )
  // input
  mclsearch.appendChild(
    createAtomInput({
        placeholder: placeholder,
    })
  )
  // button
  mclsearch.appendChild(
      createAtomButton({
        buttonText: buttonText,
      })
  )

  return mclsearch;
};
