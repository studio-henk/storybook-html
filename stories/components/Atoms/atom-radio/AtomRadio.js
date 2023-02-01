import './_atom-radio.css';

export const createAtomRadio = ({
  checked = false,
  id = '',
  name = '',
  disabled = false,
  required = false,
}) => {
  const atomRadio = document.createElement('input');
  atomRadio.type = 'radio';
  atomRadio.className = ['atom-radio'].join(' ');

  if (checked) {
    atomRadio.setAttribute('checked', 'checked');
  }

  if (id) {
    atomRadio.setAttribute('id', id);
  }

  if (name) {
    atomRadio.name = name;
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