import './_sh-molecule-padding-box.css';
import {createBaseParagraph} from "../../Atoms/p/BaseParagraph";

export const createMoleculePaddingBox = ({
                                             dummyText,
                                             paddingTopUnits = 4,
                                             paddingRightUnits = 4,
                                             paddingBottomUnits = 4,
                                             paddingLeftUnits = 4,
                                             paddingTopUnitsDesktop = 6,
                                             paddingRightUnitsDesktop = 6,
                                             paddingBottomUnitsDesktop = 6,
                                             paddingLeftUnitsDesktop = 6,
                                             inBgBox = false
                                         }) => {
    const mclPaddingBox = document.createElement('div');
    mclPaddingBox.className = ['sh-molecule-padding-box'].join(' ');
    mclPaddingBox.setAttribute(
        'style',
        '--size-spacing-units-top:' + paddingTopUnits + '; --size-spacing-units-right:' + paddingRightUnits + '; --size-spacing-units-bottom:' + paddingBottomUnits + '; --size-spacing-units-left:' + paddingLeftUnits + ';' +
         '--size-spacing-units-top-desktop:' + paddingTopUnitsDesktop + '; --size-spacing-units-right-desktop:' + paddingRightUnitsDesktop + '; --size-spacing-units-bottom-desktop:' + paddingBottomUnitsDesktop + '; --size-spacing-units-left-desktop:' + paddingLeftUnitsDesktop + ';'
    );

    // if inside bg-box is true
    if (inBgBox) {
        // create bg-box first
    } else {
        // p
        if (dummyText) {
            mclPaddingBox.appendChild(
                createBaseParagraph({
                    text: dummyText,
                })
            )
        }

        return mclPaddingBox;
    }

};
