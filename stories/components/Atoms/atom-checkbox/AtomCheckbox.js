import './_atom-checkbox.css';

export const createAtomCheckbox = ({
  checked = false,
  id = '',
  name = '',
  disabled = false,
  required = false,
}) => {
  const baseCheckbox = document.createElement('input');
  baseCheckbox.type = 'checkbox';
  baseCheckbox.className = ['atom-checkbox'].join(' ');

  if (checked) {
    baseCheckbox.setAttribute('checked', 'checked');
  }

  if (id) {
    baseCheckbox.setAttribute('id', id);
  }

  if (name) {
    // baseCheckbox.setAttribute('', id);
    baseCheckbox.name = name;
  }

  if (disabled) {
    // baseCheckbox.setAttribute('', id);
    baseCheckbox.disabled = disabled;
  }

  if (required) {
    // baseCheckbox.setAttribute('', id);
    baseCheckbox.required = required;

    // create span for asterisk *
  }

  return baseCheckbox;
};