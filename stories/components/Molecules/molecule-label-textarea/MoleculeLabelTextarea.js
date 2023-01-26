import './_molecule-label-textarea.css';
import {createAtomTextarea} from "../../Atoms/atom-textarea/AtomTextarea";
import {createAtomLabel} from "../../Atoms/AtomLabel";

export const createMoleculeLabelTextarea = ({
  labelText,
  forAttr,
  dataStyle,
  name: name,
  id: id,
  placeholder: placeholder,
  required: required,
  disabled: disabled,
  autocomplete: autocomplete,
  form: form,
  initialValue: initialValue
}) => {
  // create div
  const wrapperElement = document.createElement('div');
  wrapperElement.className = ['molecule-label-textarea layout-container-input-label'].join(' ');

  // input
  wrapperElement.appendChild(
    createAtomTextarea({
      name: name,
      id: id,
      placeholder: placeholder,
      required: required,
      disabled: disabled,
      autocomplete: autocomplete,
      form: form,
      initialValue: initialValue
    })
  )

  // label
  wrapperElement.appendChild(
    createAtomLabel({
        labelText: labelText,
        forAttr: forAttr,
        dataStyle
    })
  )

  return wrapperElement;
};