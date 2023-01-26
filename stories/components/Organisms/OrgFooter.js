import { createAtomButton } from '../Atoms/atom-button/atom-button';
import { createAtomLabel} from "../Atoms/AtomLabel";
import { createAtomInput } from "../Atoms/AtomInput";

export const createOrgFooter = ({
  buttonText = '',
  dataStyle = '',
  size = '',
  backgroundColor,
  labelText,
  disabled = false,
  onClick,
}) => {
  const orgfooter = document.createElement('footer');
  orgfooter.className = ['sh-org-footer'].join(' ');
  // label
  orgfooter.appendChild(
      createAtomLabel({
        labelText: 'Search the site',
      })
  )
  // input
  orgfooter.appendChild(
      createAtomInput({
        placeholder: 'Enter keyword',
      })
  )
  // button
  orgfooter.appendChild(
      createAtomButton(
      {
        // buttonText: buttonText,
        // onClick: onSubmitSearch,
      })
  )

  return orgfooter;
};
