import './atom-paragraph.css';

export const createBaseParagraph = ({
  variant = '',
  size = '',
  backgroundColor,
  label,
  disabled = false,
  onClick,
}) => {
  const baseParagraph = document.createElement('p');
  //baseParagraph.type = 'button';
  baseParagraph.innerText = label;
  //baseParagraph.addEventListener('click', onClick);

  // const mode = primary ? 'sh-atom-button--primary' : '';
  // baseParagraph.className = ['sh-atom-button', `sh-atom-button--${size}`, mode].join(' ');
  //baseParagraph.className = ['sh-atom-button'].join(' ');
  //baseParagraph.style.backgroundColor = backgroundColor;

  if (variant) {
    baseParagraph.setAttribute('data-variant', variant);
  }

  return baseParagraph;
};
