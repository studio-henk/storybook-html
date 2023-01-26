import './_atom-textarea.css';

/*
<textarea
  id="story"
  name="story"
  rows="5"
  cols="33"
>
It was a dark and stormy night...
</textarea>
*/

export const createAtomTextarea = ({
  autocomplete = 'off',
  cols,
  disabled     = false,
  form,
  id           = '',
  initialValue,
  name         = '',
  placeholder,
  required     = false,
}) => {
  const baseTextarea = document.createElement('textarea');
  baseTextarea.className = ['atom-textarea'].join(' ');
  baseTextarea.name = name;
  baseTextarea.id = id;
  baseTextarea.autocomplete = autocomplete;

  if (placeholder) {
    baseTextarea.placeholder = placeholder;
  }

  if (required) {
    baseTextarea.required = required;
    /*const requiredAsterisk = document.createElement('span');
    requiredAsterisk.className = '--is-required';
    requiredAsterisk.innerText = '*';
    baseTextarea.insertAdjacentHTML('afterend', requiredAsterisk);*/
  }

  if (disabled) {
    baseTextarea.disabled = disabled;
  }

  /*if (initialValue) {
    baseTextarea.setAttribute('value', initialValue);
  }*/

  if (form) {
    baseTextarea.setAttribute('form', form);
  }

  if (cols) {
    baseTextarea.cols = cols;
  }

  return baseTextarea;
};