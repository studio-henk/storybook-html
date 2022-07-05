// import './basebutton.css';

export const createBaseLabel = ({
  label,
}) => {
  const baselabel = document.createElement('label');
  baselabel.innerText = label;
  baselabel.className = ['sh-atom-label'].join(' ');

  // if (for) {
  //   label.setAttribute('for', for);
  // }

  return baselabel;
};