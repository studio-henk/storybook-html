import { createAtomButton } from '../../Atoms/atom-button/atom-button';
import { createAtomLabel} from "../../Atoms/AtomLabel";
import {createAtomInput} from "../../Atoms/AtomInput";

export const createMCLSearch = ({
  labelText,
  placeholder,
  buttonText,
}) => {
  const mclsearch = document.createElement('div');
  mclsearch.className = ['sh-molecule-search'].join(' ');
  // label
  mclsearch.appendChild(
      createAtomLabel({
        labelText: labelText,
      })
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
