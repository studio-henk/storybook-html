import './atom-button.css';
import './_atom-button-loading.css';
import camelcase from "lodash.camelcase";
// import { returnIconSVG } from "./_icons-function";
import { returnIconSVG } from "../atom-icon/_icons-function";

export const createAtomButton = ({
     buttonElement = 'a',
     type = 'button',
     role = '',
     state = '',
     style = '',
     accent = '',
     textColor = '',
     dataState = '',
     size = '',
     buttonText = 'button text',
     onClick,
     href,
     textTransform = '',
     shape = '',
     icon = ''
 }) => {
    const btn = document.createElement(buttonElement);
    if (buttonElement === 'button') {
        btn.type = type;
    }
    if (buttonElement === 'a') {
        btn.href = href ? href : 'https://studio-henk.nl/en';
    }
    btn.innerText = buttonText;
    btn.addEventListener('click', onClick);
    btn.className = ['sh-atom-button'].join(' ');
    //btn.style.backgroundColor = backgroundColor;

    if (role && role !== 'Normal') {
        btn.setAttribute('data-role', role);
    }

    if (state === 'disabled') {
        if (buttonElement === 'button') {
            btn.setAttribute('disabled', 'disabled');
        } else {
            btn.setAttribute('data-state', state);
        }
    }

    if (size && size !== 'base') {
        btn.setAttribute('data-size', size);
    }

    if (style) {
        btn.setAttribute('data-style', style);
    }

    if (accent) {
        btn.setAttribute('data-accent', accent);
    }

    if (textColor) {
        btn.setAttribute('data-text-color', textColor);
    }

    if (dataState) {
        btn.setAttribute('data-state', dataState);
    }

    if (textTransform) {
        btn.setAttribute('data-text-transform', textTransform);
    }

    if (shape) {
        btn.setAttribute('data-shape', shape);
    }

    if (icon) {
        btn.setAttribute('data-icon', icon);
        const iconName = camelcase(icon);
        // var iconName = camelcase(icon);
        // console.log(iconName);

        // let iconSVG = iconName;

        btn.insertAdjacentHTML('beforeend', returnIconSVG(iconName));
        // btn.insertAdjacentHTML('beforeend', iconSVG);
        // btn.insertAdjacentHTML('beforeend', iconArrowRight());
        // btn.insertAdjacentHTML('beforeend', iconName + '()');
        // btn.insertAdjacentHTML('beforeend', iconSVG);
        /*const arrowRight = `
        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">            
            <path d="M8.5 10.5L12.25 6.75L8.5 3" stroke="currentcolor" stroke-linecap="square"/>
            <path d="M1 6.75L11.625 6.75" stroke="currentcolor" stroke-linecap="square"/>
        </svg>
        `
        btn.insertAdjacentHTML('beforeend', arrowRight);*/
    }

    return btn;
};
