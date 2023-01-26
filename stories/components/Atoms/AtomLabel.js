/*
* Note: To programmatically set the for attribute, use htmlFor.
*
* */
import './_atom-label.css';

export const createAtomLabel = ({
  labelText = 'label text',
  forAttr = '',
  dataStyle,
  pattern = '',
  patternTooltipText = '',
  checkmarkCircle = false
}) => {
  const BaseLabel = document.createElement('label');
  BaseLabel.innerText = labelText;
  BaseLabel.className = ['atom-label'].join(' ');

  if (forAttr) {
    // BaseLabel.setAttribute('for', forAttr);
    BaseLabel.htmlFor = forAttr;
  }

  if (dataStyle) {
    BaseLabel.setAttribute('data-style', dataStyle);
  }

  if (pattern) {
    BaseLabel.title = patternTooltipText;
  }

    if (checkmarkCircle === true) {
        // add html for checkmark svg icon
        const checkmark = `
        <span class="icon-checkmark"><svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 4L3.5 6.5L8.5 1" stroke="white" stroke-linecap="round"></path></svg></span>
        `

        BaseLabel.insertAdjacentHTML('beforeend', checkmark)
    }

  return BaseLabel;
};