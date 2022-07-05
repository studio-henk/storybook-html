// import './basebutton.css';

// <input type="text" id="name" name="name" required minLength="4" maxLength="8" size="10">

export const createBaseInput = ({
  placeholder,
}) => {
  const baseInput = document.createElement('input');
  baseInput.type = 'text',
  baseInput.className = ['sh-atom-input'].join(' ');

  if (placeholder) {
    baseInput.setAttribute('placeholder', placeholder);
  }

  return baseInput;
};