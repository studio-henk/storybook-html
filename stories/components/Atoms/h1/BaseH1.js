// import './atom-h1.css';

export const createBaseH1 = ({
  variant = '',
  CSSclass = '',
  text,
}) => {
  const baseH1 = document.createElement('h1');
  baseH1.innerText = text;

  if (variant) {
    baseH1.setAttribute('data-variant', variant);
  }

  if (CSSclass) {
    baseH1.classList.add(CSSclass);
  }

  return baseH1;
};


