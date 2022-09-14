import './sh-atom-checkbox-label.css';
import {createBaseInput} from "../BaseInput";
import {createBaseCheckbox} from "../BaseCheckbox";
import {createBaseLabel} from "../BaseLabel";

export const createBaseCheckboxLabel = ({
  checked = false,
  label,
  id,
  forAttr,
  order,
  customCheckbox = false,
  variant,
  checkmarkCircle
}) => {
  // create div
  const baseCheckboxLabel = document.createElement('div');
  baseCheckboxLabel.className = ['sh-atom-checkbox-label'].join(' ');

  // order
  if (order == 'reverse') {
    baseCheckboxLabel.setAttribute('data-order', order);
  }

  // custom
  if (customCheckbox == true) {
    baseCheckboxLabel.setAttribute('data-custom-checkbox', customCheckbox);
  }

  // custom
  if (variant == 'circle') {
    baseCheckboxLabel.setAttribute('data-variant', variant);
    checkmarkCircle = true;
  }

  // input
  baseCheckboxLabel.appendChild(
    createBaseCheckbox({
        checked: checked,
        id: id
    })
  )

  // label
  baseCheckboxLabel.appendChild(
    createBaseLabel({
        label: label,
        forAttr: forAttr,
        checkmarkCircle: checkmarkCircle
    })
  )

  // const baseCheckbox = document.createElement('input');
  // baseCheckbox.type = 'checkbox';
  // baseCheckbox.className = ['sh-atom-checkbox'].join(' ');
  //
  // if (checked) {
  //   baseCheckboxLabel.setAttribute('checked', 'checked');
  // }

  return baseCheckboxLabel;
};