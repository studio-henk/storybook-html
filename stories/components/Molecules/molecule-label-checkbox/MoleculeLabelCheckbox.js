import './_molecule-label-checkbox.css';
import {createAtomCheckbox} from "../../Atoms/atom-checkbox/AtomCheckbox";
import {createAtomLabel} from "../../Atoms/AtomLabel";

export const createMoleculeLabelCheckbox = ({
  checked = false,
  disabled = false,
  required = false,
  labelText,
  id,
  forAttr,
  order,
  customCheckbox = false,
  variant,
  checkmarkCircle,
  alignment,
}) => {
  // create div
  const baseCheckboxLabel = document.createElement('div');
  baseCheckboxLabel.className = ['sh-atom-checkbox-label'].join(' ');

  // order
  // if (order === 'reverse') {
  if (order) {
    baseCheckboxLabel.setAttribute('data-order', order);
  }

  // custom
  if (customCheckbox === true) {
    baseCheckboxLabel.setAttribute('data-custom-checkbox', 'true');
  }

  // custom
  if (variant === 'circle') {
    baseCheckboxLabel.setAttribute('data-variant', variant);
    checkmarkCircle = true;
  }

  // alignment
  if (alignment) {
    baseCheckboxLabel.setAttribute('data-alignment', alignment);
  }

  // input
  baseCheckboxLabel.appendChild(
    createAtomCheckbox({
        checked: checked,
        id: id,
        name: name,
        disabled: disabled,
        required: required,
    })
  )

  // label
  baseCheckboxLabel.appendChild(
    createAtomLabel({
        labelText: labelText,
        forAttr: forAttr,
        checkmarkCircle: checkmarkCircle
    })
  )

  // asterisk when required
  if (required) {
    const asteriskElement = `
      <span class="molecule-label-checkbox__hint-required">*</span>
    `;

    baseCheckboxLabel.insertAdjacentHTML('beforeend', asteriskElement);
  }

  /*if (dataStyle === 'labels-as-placeholders' && useCSSvalidation) {
    const errorMSGspan = `
      <span class="molecule-input-label__message-invalid">${patternTooltipText}</span>
    `;

    wrapperElement.insertAdjacentHTML('beforeend', errorMSGspan);
  }*/

  return baseCheckboxLabel;
};