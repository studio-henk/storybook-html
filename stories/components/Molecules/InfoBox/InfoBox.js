import './info-box.css';
import { Icon } from "../../Atoms/atom-icon/_atom-icon";

export const createInfoBox = ({
                                  title = 'Waar kunnen we mee helpen?',
                                  subtitle = '',
                                  content = 'Content here',
                                  icon = 'icon-phone',
                                  bgColor = 'var(--color-accent15)',
                                  fgColor = 'var(--color-black)',
                                  hasPaddingBox = true,
                                  paddingTopUnits = 3,
                                  paddingRightUnits = 4,
                                  paddingBottomUnits = 5,
                                  paddingLeftUnits = 4,
                                  paddingTopUnitsDesktop = 7,
                                  paddingRightUnitsDesktop = 7,
                                  paddingBottomUnitsDesktop = 7,
                                  paddingLeftUnitsDesktop = 7,
                              }) => {
    const wrapperElement = document.createElement('div');
    wrapperElement.className = ['molecule-info-box'].join(' ');

    // const bgBox = document.createElement('div');
    // bgBox.className = ['sh-molecule-bg-box'].join(' ');


    // set style attribute
    if (bgColor && !fgColor) {
        wrapperElement.setAttribute('style', '--color-background-component-bgbox:' + bgColor + ';');
    } else if (!bgColor && fgColor) {
        wrapperElement.setAttribute('style', '--color-text-component-bgbox:' + fgColor + ';');
    } else if (bgColor && fgColor) {
        wrapperElement.setAttribute('style', '--color-background-component-bgbox:' + bgColor + '; --color-text-component-bgbox:' + fgColor + ';');
    }

    const paddingBox = document.createElement('div');
    paddingBox.className = ['sh-molecule-padding-box'].join(' ');
    paddingBox.setAttribute(
        'style',
        '--size-spacing-units-top:' + paddingTopUnits + '; --size-spacing-units-right:' + paddingRightUnits + '; --size-spacing-units-bottom:' + paddingBottomUnits + '; --size-spacing-units-left:' + paddingLeftUnits + ';' +
         '--size-spacing-units-top-desktop:' + paddingTopUnitsDesktop + '; --size-spacing-units-right-desktop:' + paddingRightUnitsDesktop + '; --size-spacing-units-bottom-desktop:' + paddingBottomUnitsDesktop + '; --size-spacing-units-left-desktop:' + paddingLeftUnitsDesktop + ';'
    );

    // component-layout-box
    const layoutBox = document.createElement('div');
    layoutBox.className = ['component-layout-box'].join(' ');
    // layoutBox.innerText = 'hello';

    if (icon) {
        layoutBox.appendChild(
            Icon({
                icon: icon
            })
        )
    }

    // info-box__header
    const header = document.createElement('header');
    header.className = ['info-box__header'].join(' ');

    if (subtitle) {
        const ibSubTitle = document.createElement('small');
        ibSubTitle.className = ['info-box__subtitle'].join(' ');
        ibSubTitle.innerText = subtitle;

        header.appendChild(ibSubTitle);
    }

    const ibTitle = document.createElement('p');
    ibTitle.className = ['info-box__heading'].join(' ');
    ibTitle.innerText = title;

    const infoBody = document.createElement('div');
    infoBody.className = ['info-box__body'].join(' ');
    infoBody.innerHTML = content;

    header.appendChild(ibTitle);
    // icon - optional
    layoutBox.appendChild(header);
    layoutBox.appendChild(infoBody);
    paddingBox.appendChild(layoutBox);
    wrapperElement.appendChild(paddingBox);

    // wrapperElement.insertAdjacentHTML('beforeend', bgPaddingBox);
    // wrapperElement.appendChild(bgBox);

    return wrapperElement;
};
