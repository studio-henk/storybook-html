import './_molecule-label-select.css';
import {createAtomSelect} from "../../Atoms/AtomSelect";
import {createAtomLabel} from "../../Atoms/AtomLabel";

export const createMoleculeLabelSelect = ({
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
  wrapperElement.className = ['molecule-label-select layout-container-input-label'].join(' ');

  // input
  wrapperElement.appendChild(
    createAtomSelect({
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
        dataStyle
        /*checkmarkCircle: checkmarkCircle*/
    })
  )

  return wrapperElement;
};