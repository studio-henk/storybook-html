export function returnIconSVG(iconName, strokeColor) {
    // const strokeColor = 'pink';
    let iconSVG;
    if (!strokeColor) strokeColor = 'currentcolor';
    switch (iconName) {
        case 'iconArrowRight':
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
                <desc>Arrow icon pointing right</desc>
                <path d="M9.375 11.25L13.125 7.5L9.375 3.75" stroke="currentcolor" stroke-linecap="square"></path>
                <path d="M1.875 7.5L12.5 7.5" stroke="currentcolor" stroke-linecap="square"></path>
            </svg>
            `;
            return iconSVG;
            // break;
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
            // break;
        case 'iconArrowDown':
            iconSVG = `
                <svg
                    class="sh-atom-icon__svg"
                    width="16"
                    height="38"
                    viewBox="0 0 16 38"
                    fill="none"
                    aria-labelledby="${iconName}"
                    id="${iconName}"
                    xmlns="http://www.w3.org/2000/svg"                    
                >
                    <title>${iconName}</title>
                    <desc>Arrow icon pointing down</desc>
                    <path d="M1 29.875L8 36.875L15 29.875"
                          stroke="${ strokeColor }"
                          stroke-linecap="square"/>
                    <path d="M8 1L8 35.7083"
                          stroke="${ strokeColor }"
                          stroke-linecap="square"/>
                </svg>
            `;
            return iconSVG;
            // break;
        case 'iconDisclosureCollapsed':
            iconSVG = `
                <svg 
                    class="sh-atom-icon__svg"
                    width="15" 
                    height="8" 
                    viewBox="0 0 15 8" 
                    fill="none" 
                    aria-labelledby="${iconName}"
                    id="${iconName}"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <title>${iconName}</title>
                    <desc>Arrow icon pointing down</desc>
                    <path d="M14 1L7.5 7L1 1" stroke="${ strokeColor }" stroke-width="0.7" stroke-linecap="round"/>
                </svg>
            `;
            return iconSVG;
            // break;
        case 'iconSearch':
            iconSVG = `
                <svg
                    class="sh-atom-icon__svg"                      
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24"
                    aria-labelledby="${iconName}"
                    id="${iconName}"
                    xmlns="http://www.w3.org/2000/svg"
               >
                    <title>${iconName}</title>
                    <desc>icon of a magnifying glass for search purposes</desc>
                    <g 
                        class="nc-icon-wrapper" 
                        fill="${ strokeColor }"
                        >
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                    </g>
                </svg>                
            `;
            return iconSVG;
            // break;
        default:
            console.log('no icon name supplied.');
    }
}