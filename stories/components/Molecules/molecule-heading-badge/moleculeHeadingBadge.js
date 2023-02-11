import './molecule-heading-badge.css';
import {createMoleculePaddingBox} from "../PaddingBox/molecule-padding-box";
import {createBaseH1} from "../../Atoms/h1/BaseH1";

export const createMoleculeHeadingBadge = ({
                                               titleText,
                                               badgeNumber,
                                               ...args
                                           }) => {
    const wrapperElement = document.createElement('div');
    wrapperElement.className = ['molecule-heading-badge'].join(' ');
    // wrapperElement.innerText = 'hello';

    // add paddingBox
    const padBox = wrapperElement.appendChild(
        createMoleculePaddingBox({
            ...args
        })
    )

    // add layout container
    const layoutContainer = document.createElement('div');
    layoutContainer.className = ['molecule-heading-badge__layout-container component-layout-container'].join(' ');

    padBox.appendChild(layoutContainer);

    // add h1
    const h1 = createBaseH1({
        titleText: titleText,
        className: 'h2',
    })

    layoutContainer.appendChild(h1);

    /*add badge*/
    const atomBadge = `
        <span class="atom-badge">${badgeNumber}</span>    
    `;

    layoutContainer.insertAdjacentHTML('beforeend', atomBadge);


    return wrapperElement;
};
