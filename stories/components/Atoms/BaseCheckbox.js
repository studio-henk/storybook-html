// import './basebutton.css';

export const createBaseCheckbox = ({
  checked = false,
}) => {
  const baseCheckbox = document.createElement('input');
  baseCheckbox.type = 'checkbox';
  baseCheckbox.className = ['sh-atom-checkbox'].join(' ');
  //baseCheckbox.setAttribute('checked', '')

  if (checked) {
    baseCheckbox.setAttribute('checked', 'checked');
  }

  return baseCheckbox;
};