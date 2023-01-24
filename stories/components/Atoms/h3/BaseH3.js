import './atom-h3.css';

export const createBaseH3 = ({
  variant = '',
  CSSclass = '',
  text = 'test default text h3',
}) => {
  const baseH3 = document.createElement('h3');
  baseH3.innerText = text;

  if (variant) {
    baseH3.setAttribute('data-variant', variant);
  }

  if (CSSclass) {
    baseH3.classList.add(CSSclass);
  }

  return baseH3;
};


