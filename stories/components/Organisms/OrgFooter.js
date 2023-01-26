import { createAtomButton } from '../Atoms/atom-button/atom-button';
import { createAtomLabel} from "../Atoms/AtomLabel";
import {createBaseInput} from "../Atoms/AtomInput";

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
      createAtomLabel({
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
