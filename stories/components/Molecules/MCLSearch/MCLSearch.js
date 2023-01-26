import { createAtomButton } from '../../Atoms/atom-button/atom-button';
import { createAtomLabel} from "../../Atoms/AtomLabel";
import {createBaseInput} from "../../Atoms/AtomInput";

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
    createBaseInput({
        placeholder: placeholder,
    })
      // createBaseInput({
      //   placeholder: 'Enter keyword',
      // })
  )
  // button
  mclsearch.appendChild(
      // createBaseButton({
      //   variant: 'primary',
      //   label: 'Search',
      // })
      createAtomButton({
        variant: 'primary',
        buttonText: buttonText,
      })
  )

  return mclsearch;
};
