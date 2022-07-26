import { createBaseButton } from '../../Atoms/BaseButton';
import { createBaseLabel} from "../../Atoms/BaseLabel";
import {createBaseInput} from "../../Atoms/BaseInput";

export const createMCLNewsletterForm = ({
  label,
  placeholder,
  buttonText,
}) => {
  const mclnewsletterform = document.createElement('form');
  mclnewsletterform.className = ['sh-molecule-newsletterform'].join(' ');
  // label
  mclnewsletterform.appendChild(
      createBaseLabel({
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
      createBaseButton({
        type: 'submit',
        variant: 'primary',
        buttonText: buttonText,
      })
  )

  return mclnewsletterform;
};
