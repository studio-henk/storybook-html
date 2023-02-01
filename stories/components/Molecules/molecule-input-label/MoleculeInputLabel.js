import './_molecule-input-label.css';
import {createAtomInput} from "../../Atoms/AtomInput";
import {createAtomLabel} from "../../Atoms/AtomLabel";

export const createMoleculeInputLabel = ({
    showRequired,
    useCSSvalidation,
    type,
    minLength,
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
    inputmode: inputmode,
    form: form,
    initialValue: initialValue,
    isShown,
}) => {
  // create div
  const wrapperElement = document.createElement('div');
  wrapperElement.className = ['molecule-input-label layout-container-input-label'].join(' ');

  /*if (vueShow) {
    // v-show="customerKind == 'business' "
    wrapperElement.setAttribute('v-show', vueShow);
  }*/

  wrapperElement.setAttribute('data-show', isShown);

  if (showRequired) {
    wrapperElement.setAttribute('data-show-required-fields', true);
  }

  if (useCSSvalidation) {
    wrapperElement.setAttribute('data-use-css-validation', true);
  }

  // input
  wrapperElement.appendChild(
    createAtomInput({
      type: type,
      minLength: minLength,
      name: name,
      id: id,
      placeholder: placeholder,
      required: required,
      disabled: disabled,
      pattern: pattern,
      patternTooltipText: patternTooltipText,
      autocomplete: autocomplete,
      inputmode: inputmode,
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

  // if [data-style="labels-as-placeholders"] then add a span with the patterntooltiptext / title / error messag
  if (dataStyle === 'labels-as-placeholders' && useCSSvalidation) {
    const errorMSGspan = `
      <span class="molecule-input-label__message-invalid">${patternTooltipText}</span>
    `;

    wrapperElement.insertAdjacentHTML('beforeend', errorMSGspan);
  }

  return wrapperElement;
};