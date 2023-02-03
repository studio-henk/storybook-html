import './_atom-radio.css';

export const createAtomRadio = ({
  checked = false,
  id = '',
  name = '',
  disabled = false,
  required = false,
  value,
}) => {
  const atomRadio = document.createElement('input');
  atomRadio.type = 'radio';
  atomRadio.className = ['atom-radio'].join(' ');

  if (checked) {
    atomRadio.setAttribute('checked', 'checked');
    atomRadio.checked = checked;
  }

  if (id) {
    atomRadio.setAttribute('id', id);
  }

  if (name) {
    atomRadio.name = name;
  }

  if (value) {
    atomRadio.value = value;
  }

  if (disabled) {
    atomRadio.disabled = disabled;
  }

  if (required) {
    atomRadio.required = required;
    atomRadio.ariaRequired = true;

    // create span for asterisk *
  }

  return atomRadio;
};