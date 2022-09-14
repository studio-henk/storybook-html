import { createAtomButton } from '../Atoms/atom-button/atom-button';
import { createBaseLabel} from "../Atoms/BaseLabel";
import {createBaseInput} from "../Atoms/BaseInput";

export const createOrgFooter = ({
  buttonText = '',
  variant = '',
  size = '',
  backgroundColor,
  label,
  disabled = false,
  onClick,
}) => {
  const orgfooter = document.createElement('footer');
  orgfooter.className = ['sh-org-footer'].join(' ');
  // label
  orgfooter.appendChild(
      createBaseLabel({
        label: 'Search the site',
      })
  )
  // input
  orgfooter.appendChild(
      createBaseInput({
        placeholder: 'Enter keyword',
      })
  )
  // button
  orgfooter.appendChild(
      createAtomButton({
        variant: 'quaternary',
        buttonText: buttonText,
        // onClick: onSubmitSearch,
      })
  )

  return orgfooter;
};
