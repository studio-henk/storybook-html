import './organism-grid-section-infobox.css';
import {Icon} from "../../Atoms/atom-icon/_atom-icon";
import InfoBoxStories from "../../Molecules/InfoBox/InfoBox.stories";
import {createInfoBox} from "../../Molecules/InfoBox/InfoBox";

export const createOrganismGridSectionInfobox = ({
    ...args
}) => {
    // modal outer container aka overlay
    const OrgGridSection = document.createElement('div');
    OrgGridSection.className = ['organism-grid-section-infobox'].join(' ');
    // OrgGridSection.innerText = 'hello';

    // get infobox
    OrgGridSection.appendChild(
        createInfoBox({
            title: 'Waar kunnen we mee helpen?',
            icon: 'icon-phone',
            content: '' +
             '<a href="tel:+31(0)12345678">+31 (0)12345678</a><br />' +
             '<a href="mailto:info@studio-henk.nl">info@studio-henk.nl</a>',
            paddingTopUnits: 3,
            paddingRightUnits: 5,
            paddingBottomUnits: 4,
            paddingLeftUnits: 5,
            paddingTopUnitsDesktop: 7,
            paddingRightUnitsDesktop: 7,
            paddingBottomUnitsDesktop: 7,
            paddingLeftUnitsDesktop: 7,
            ...args
        })
    )

    // get infobox
    OrgGridSection.appendChild(
        createInfoBox({
            title: 'Gratis levering',
            icon: 'icon-truck',
            content: 'Lorem ipsum dolor sit amet, ectetur adi piscing elit, tincidunt tincidunt.',
            paddingTopUnits: 3,
            paddingRightUnits: 5,
            paddingBottomUnits: 4,
            paddingLeftUnits: 5,
            paddingTopUnitsDesktop: 7,
            paddingRightUnitsDesktop: 7,
            paddingBottomUnitsDesktop: 7,
            paddingLeftUnitsDesktop: 7,
            ...args
        })
    )

    // get infobox
    OrgGridSection.appendChild(
        createInfoBox({
            title: 'Bezorgen op afspraak',
            icon: 'icon-calendar',
            content: 'Lorem ipsum dolor sit amet, ectetur adi piscing elit, tincidunt tincidunt.',
            paddingTopUnits: 3,
            paddingRightUnits: 5,
            paddingBottomUnits: 4,
            paddingLeftUnits: 5,
            paddingTopUnitsDesktop: 7,
            paddingRightUnitsDesktop: 7,
            paddingBottomUnitsDesktop: 7,
            paddingLeftUnitsDesktop: 7,
            ...args
        })
    )

  return OrgGridSection;
};
