import { createBaseButton } from '../Atoms/BaseButton';
import { createBaseLabel} from "../Atoms/BaseLabel";
import {createBaseInput} from "../Atoms/BaseInput";

export const createMCLSearch = ({
  variant = '',
  size = '',
  backgroundColor,
  label,
  disabled = false,
  onClick,
}) => {
  const mclsearch = document.createElement('div');
  mclsearch.className = ['sh-molecule-search'].join(' ');
  // label
  mclsearch.appendChild(
      createBaseLabel({
        label: 'Search the site',
      })
  )
  // input
  mclsearch.appendChild(
      createBaseInput({
        placeholder: 'Enter keyword',
      })
  )
  // button
  mclsearch.appendChild(
      createBaseButton({
        variant: 'primary',
        label: 'Search',
        // onClick: onSubmitSearch,
      })
  )

  return mclsearch;
};
