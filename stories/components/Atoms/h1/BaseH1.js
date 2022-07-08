import './atom-h1.css';

export const createBaseH1 = ({
  variant = '',
  text,
}) => {
  const baseH1 = document.createElement('h1');
  baseH1.innerText = text;

  if (variant) {
    baseH1.setAttribute('data-variant', variant);
  }

  return baseH1;
};


