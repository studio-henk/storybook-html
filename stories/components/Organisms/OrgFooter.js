import { createBaseButton } from '../Atoms/BaseButton';
import { createBaseLabel} from "../Atoms/BaseLabel";
import {createBaseInput} from "../Atoms/BaseInput";

export const createOrgFooter = ({
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
      createBaseButton({
        variant: 'quaternary',
        label: 'Sign up',
        // onClick: onSubmitSearch,
      })
  )

  return orgfooter;
};
