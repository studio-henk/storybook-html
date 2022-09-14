import { createAtomButton } from '../../Atoms/atom-button/atom-button';
import { createBaseLabel} from "../../Atoms/BaseLabel";
import {createBaseInput} from "../../Atoms/BaseInput";

export const createMCLSearch = ({
  label,
  placeholder,
  buttonText,
}) => {
  const mclsearch = document.createElement('div');
  mclsearch.className = ['sh-molecule-search'].join(' ');
  // label
  mclsearch.appendChild(
      createBaseLabel({
        label: label,
      })
      // createBaseLabel({
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
