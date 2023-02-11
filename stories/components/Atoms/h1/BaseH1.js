// import './atom-h1.css';

export const createBaseH1 = ({
  className = '',
  titleText,
}) => {
  const baseH1 = document.createElement('h1');
  baseH1.innerText = titleText;

  /*if (variant) {
    baseH1.setAttribute('data-variant', variant);
  }*/

  if (className) {
    baseH1.classList.add(className);
  }

  return baseH1;
};


