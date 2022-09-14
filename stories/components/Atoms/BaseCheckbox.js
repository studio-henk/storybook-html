// import './basebutton.css';

export const createBaseCheckbox = ({
  checked = false,
  id = ''
}) => {
  const baseCheckbox = document.createElement('input');
  baseCheckbox.type = 'checkbox';
  baseCheckbox.className = ['sh-atom-checkbox'].join(' ');

  if (checked) {
    baseCheckbox.setAttribute('checked', 'checked');
  }

  if (id) {
    baseCheckbox.setAttribute('id', id);
  }

  return baseCheckbox;
};