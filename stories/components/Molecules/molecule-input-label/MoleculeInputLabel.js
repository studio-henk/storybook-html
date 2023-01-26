import './_molecule-input-label.css';
import {createAtomInput} from "../../Atoms/AtomInput";
import {createAtomLabel} from "../../Atoms/AtomLabel";

export const createMoleculeInputLabel = ({
  labelText,
  forAttr,
  dataStyle,
  name: name,
  id: id,
  placeholder: placeholder,
  required: required,
  disabled: disabled,
  pattern: pattern,
  patternTooltipText: patternTooltipText,
  autocomplete: autocomplete,
  form: form,
  initialValue: initialValue
}) => {
  // create div
  const wrapperElement = document.createElement('div');
  wrapperElement.className = ['molecule-input-label layout-container-input-label'].join(' ');

  // input
  wrapperElement.appendChild(
    createAtomInput({
      name: name,
      id: id,
      placeholder: placeholder,
      required: required,
      disabled: disabled,
      pattern: pattern,
      patternTooltipText: patternTooltipText,
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
        dataStyle,
        pattern: pattern,
        patternTooltipText: patternTooltipText,
        /*checkmarkCircle: checkmarkCircle*/
    })
  )

  return wrapperElement;
};