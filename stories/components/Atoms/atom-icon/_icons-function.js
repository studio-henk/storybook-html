export function returnIconSVG(iconName, strokeColor) {
    // const strokeColor = 'pink';
    if (!strokeColor) strokeColor = 'currentcolor';
    switch (iconName) {
        case 'iconArrowRight':
            let iconSVG = `
            <svg
                class="sh-atom-icon__svg"
                width="15"
                height="15"
                fill="none"
                aria-labelledby="${iconName}"
                id="${iconName}"
                xmlns="http://www.w3.org/2000/svg"
            >
                <title>${iconName}</title>
                <desc>Arrow icon pointing right</desc>
                <path d="M9.375 11.25L13.125 7.5L9.375 3.75" stroke="currentcolor" stroke-linecap="square"></path>
                <path d="M1.875 7.5L12.5 7.5" stroke="currentcolor" stroke-linecap="square"></path>
            </svg>
            `;
            return iconSVG;
            break;
        case 'iconArrowLeft':
            iconSVG = `            
            <svg
                class="sh-atom-icon__svg"
                width="15"
                height="15"
                fill="none"
                aria-labelledby="${iconName}"
                id="${iconName}"
                xmlns="http://www.w3.org/2000/svg"
            >
                <title>${iconName}</title>
                <desc>Arrow icon pointing left</desc>
                <path transform="rotate(180 7.1875 7.5)" id="svg_2" stroke-linecap="square" stroke="${ strokeColor }"
                      d="m1.875,7.5l10.625,0"/>
                <path stroke="${strokeColor}" id="svg_3" stroke-linecap="square"
                      d="m5.38607,11.25l-3.88636,-3.75l3.88636,-3.75"/>
            </svg>
            `;
            return iconSVG;
            break;
        default:
            console.log('no icon name supplied.');
    }
}