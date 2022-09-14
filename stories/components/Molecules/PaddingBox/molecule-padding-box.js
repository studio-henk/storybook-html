import './_sh-molecule-padding-box.css';
import { createBaseParagraph } from "../../Atoms/p/BaseParagraph";

export const createMoleculePaddingBox = ({
  text,
  paddingTopUnits = 4,
  paddingRightUnits = 4,
  paddingBottomUnits = 4,
  paddingLeftUnits = 4,
  inBgBox = false
}) => {
  const mclPaddingBox = document.createElement('div');
  mclPaddingBox.className = ['sh-molecule-padding-box'].join(' ');

  mclPaddingBox.setAttribute(
  'style',
  '--size-spacing-units-top:' + paddingTopUnits + '; --size-spacing-units-right:' + paddingRightUnits + '; --size-spacing-units-bottom:' + paddingBottomUnits + '; --size-spacing-units-left:' + paddingLeftUnits + ';'
  );

  // if inside bg-box is true
  if (inBgBox) {
    // create bg-box first
  } else {
    // p
    mclPaddingBox.appendChild(
      createBaseParagraph({
        text: text
      })
    )

    return mclPaddingBox;
  }

};
