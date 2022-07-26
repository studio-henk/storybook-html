import './atom-h2.css';

export const createBaseH2 = ({
  variant = '',
  CSSclass = '',
  text = 'test default text h2',
}) => {
  const baseH2 = document.createElement('h2');
  baseH2.innerText = text;

  if (variant) {
    baseH2.setAttribute('data-variant', variant);
  }

  if (CSSclass) {
    baseH2.classList.add(CSSclass);
  }

  return baseH2;
};


