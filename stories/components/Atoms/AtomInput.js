import './_atom-input.css';

/*<input
    type="text"
    name="txt_businessname"
    id="txt_businessname"
    placeholder=" "
    className="sh-forms__input-txt"
    required
    disabled
    pattern=".*\S.*"
    autoComplete="off"
    form
    value ?
/>*/

export const createAtomInput = ({
  name = '',
  id = '',
  placeholder,
  required = false,
  disabled = false,
  pattern = '',
  patternTooltipText = '',
  autocomplete = 'off',
  form,
  initialValue
}) => {
  const baseInput = document.createElement('input');
  baseInput.className = ['atom-input-txt'].join(' ');
  baseInput.type = 'text';
  baseInput.name = name;
  baseInput.id = id;
  baseInput.autocomplete = autocomplete;

  if (placeholder) {
    // baseInput.setAttribute('placeholder', placeholder);
    baseInput.placeholder = placeholder;
  }

  if (required) {
    // baseInput.setAttribute('required', 'required');
    baseInput.required = required;
    /*const requiredAsterisk = document.createElement('span');
    requiredAsterisk.className = '--is-required';
    requiredAsterisk.innerText = '*';
    baseInput.insertAdjacentHTML('afterend', requiredAsterisk);*/
  }

  if (disabled) {
    baseInput.disabled = disabled;
  }

  if (pattern) {
    baseInput.pattern = pattern;
    baseInput.title = patternTooltipText;
  }

  if (initialValue) {
    // baseInput.value = initialValue
    baseInput.setAttribute('value', initialValue);
  }

  if (form) {
    // baseInput.form = form
    baseInput.setAttribute('form', form);
  }

  return baseInput;
};