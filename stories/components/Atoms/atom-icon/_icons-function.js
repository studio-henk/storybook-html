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
        case 'iconPhone':
            iconSVG = `
                <svg 
                    class="sh-atom-icon__svg"
                    width="20" 
                    height="20" 
                    viewBox="0 0 20 20"
                    aria-labelledby="${iconName}"
                    id="${iconName}"
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <title>${iconName}</title>
                    <desc>icon of a phone</desc>
                    <path 
                        fill-rule="evenodd" 
                        clip-rule="evenodd" 
                        d="M4.23887 2L7.7656 7.05663L4.92805 9.89418C5.57414 10.8959 6.3477 11.8478 7.24995 12.7501C8.1522 13.6523 9.10409 14.4259 10.1058 15.072L12.9434 12.2344L18 15.7611L16.6193 17.1418C15.858 17.9031 14.7406 18.1855 13.7091 17.8773C11.0295 17.0769 8.62885 15.6102 6.50932 13.4907C4.38979 11.3712 2.92316 8.97048 2.12266 6.2909C1.8145 5.25939 2.09691 4.14196 2.85815 3.38072L4.23887 2ZM11.0332 15.6259C11.9828 16.1491 12.9747 16.5648 14.0089 16.8738C14.6716 17.0717 15.3896 16.8903 15.8786 16.4012L16.375 15.9048L13.0637 13.5953L11.0332 15.6259ZM4.37414 8.96682L6.40467 6.93629L4.09519 3.62495L3.59879 4.12135C3.1097 4.61044 2.92826 5.32836 3.12625 5.99109C3.43523 7.02535 3.85088 8.01721 4.37414 8.96682Z" 
                        fill="${strokeColor}"
                    />
                </svg>                                
            `;
            return iconSVG;
        case 'iconCalendar':
            iconSVG = `
                <svg 
                    class="sh-atom-icon__svg"
                    width="20" 
                    height="20" 
                    viewBox="0 0 20 20"
                    aria-labelledby="${iconName}"
                    id="${iconName}" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <title>${iconName}</title>
                    <desc>icon of a calendar</desc>
                    <path 
                        fill-rule="evenodd" 
                        clip-rule="evenodd" 
                        d="M5.99702 2V3.62766H14.0031V2H14.5706V3.62766H18V6.88261V7.42125V18H2V7.42125V6.88261V3.62766H5.42951V2H5.99702ZM17.4325 6.88261V4.1663H2.56751V6.88261H17.4325ZM2.56751 7.42125V17.4614H17.4325V7.42125H2.56751ZM10.2838 12.5787H12.8558V13.1173H10.2838V15.5587H9.71625V13.1173H7.1441V12.5787H9.71625V10.1376H10.2838V12.5787Z" 
                        fill="${strokeColor}"
                    />
                </svg>                                                
            `;
            return iconSVG;
        case 'iconTruck':
            iconSVG = `
                <svg
                    class="sh-atom-icon__svg" 
                    width="24" 
                    height="24"
                    viewBox="0 0 20 20"
                    aria-labelledby="${iconName}"
                    id="${iconName}" 
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <title>${iconName}</title>
                    <desc>icon of a delivery truck</desc>
                    <path 
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2 5H12.8718V13.674H6.73373V13.0586H12.2564V5.61538H2.61538V13.0586H3.84615V13.674H2V5Z"
                        fill="${strokeColor}"
                    />
                    <path 
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.2564 6.4652H16.4173L18 9.6307V13.674H15.9194V13.0586H17.3846V9.77597L16.0369 7.08059H12.8718V13.0586H13.6044V13.674H12.2564V6.4652Z"
                        fill="${strokeColor}"
                    />
                    <path 
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.2381 12.2088C4.59882 12.2088 4.08059 12.727 4.08059 13.3663C4.08059 14.0056 4.59882 14.5238 5.2381 14.5238C5.87737 14.5238 6.3956 14.0056 6.3956 13.3663C6.3956 12.727 5.87737 12.2088 5.2381 12.2088ZM3.4652 13.3663C3.4652 12.3872 4.25895 11.5934 5.2381 11.5934C6.21724 11.5934 7.01099 12.3872 7.01099 13.3663C7.01099 14.3454 6.21724 15.1392 5.2381 15.1392C4.25895 15.1392 3.4652 14.3454 3.4652 13.3663Z"
                        fill="${strokeColor}"
                    />
                    <path 
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.7619 12.2088C14.1226 12.2088 13.6044 12.727 13.6044 13.3663C13.6044 14.0056 14.1226 14.5238 14.7619 14.5238C15.4012 14.5238 15.9194 14.0056 15.9194 13.3663C15.9194 12.727 15.4012 12.2088 14.7619 12.2088ZM12.989 13.3663C12.989 12.3872 13.7828 11.5934 14.7619 11.5934C15.741 11.5934 16.5348 12.3872 16.5348 13.3663C16.5348 14.3454 15.741 15.1392 14.7619 15.1392C13.7828 15.1392 12.989 14.3454 12.989 13.3663Z"
                        fill="${strokeColor}"
                    />
                </svg>                                                                
            `;
            return iconSVG;
        default:
            console.log('no icon name supplied.');
    }
}