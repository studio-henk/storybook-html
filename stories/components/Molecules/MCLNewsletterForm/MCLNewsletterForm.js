import { createAtomButton } from '../../Atoms/atom-button/atom-button';
import { createAtomLabel} from "../../Atoms/AtomLabel";
import {createBaseInput} from "../../Atoms/AtomInput";

export const createMCLNewsletterForm = ({
  label,
  placeholder,
  buttonText,
}) => {
  const mclnewsletterform = document.createElement('form');
  mclnewsletterform.className = ['sh-molecule-newsletterform'].join(' ');
  // label
  mclnewsletterform.appendChild(
      createAtomLabel({
        label: label,
      })
  )
  // input
  mclnewsletterform.appendChild(
    createBaseInput({
        placeholder: placeholder,
    })
  )
  // button
  mclnewsletterform.appendChild(
      createAtomButton({
        type: 'submit',
        variant: 'primary',
        buttonText: buttonText,
      })
  )

  return mclnewsletterform;
};
