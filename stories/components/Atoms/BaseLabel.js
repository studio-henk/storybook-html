// import './basebutton.css';

export const createBaseLabel = ({
  label = 'default label text',
  forAttr = '',
  checkmarkCircle = false
}) => {
  const baselabel = document.createElement('label');
  baselabel.innerText = label;
  baselabel.className = ['sh-atom-label'].join(' ');

  if (forAttr) {
    baselabel.setAttribute('for', forAttr);
  }

    if (checkmarkCircle === true) {
        // add html for checkmark svg icon
        const checkmark = `
        <span class="icon-checkmark"><svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 4L3.5 6.5L8.5 1" stroke="white" stroke-linecap="round"></path></svg></span>
        `

        baselabel.insertAdjacentHTML('beforeend', checkmark)
    }

  return baselabel;
};