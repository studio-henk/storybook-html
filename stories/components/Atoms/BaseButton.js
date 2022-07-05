import './basebutton.css';

export const createBaseButton = ({
  // primary = false,
  variant = '',
  size = '',
  backgroundColor,
  label,
  disabled = false,
  onClick,
}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.addEventListener('click', onClick);

  // const mode = primary ? 'sh-atom-button--primary' : '';
  // btn.className = ['sh-atom-button', `sh-atom-button--${size}`, mode].join(' ');
  btn.className = ['sh-atom-button'].join(' ');
  btn.style.backgroundColor = backgroundColor;

  if (size) {
    btn.setAttribute('data-size', size);
  }

  if (variant) {
    btn.setAttribute('data-variant', variant);
  }

  if (disabled) {
    btn.setAttribute('disabled', '');
  }

  return btn;
};
