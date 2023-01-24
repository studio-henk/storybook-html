import './_atom-icon.css';
import camelcase from "lodash.camelcase";
import { returnIconSVG } from "./_icons-function";

export const Icon = ({
     // size = '',
     icon = ''
 }) => {
    const iconElement = document.createElement('span');
    iconElement.className = ['sh-atom-icon'].join(' ');

    /*if (size && size !== 'base') {
        iconElement.setAttribute('data-size', size);
    }*/

    /*if (textColor) {
        iconElement.setAttribute('data-text-color', textColor);
    }*/

    /*if (shape) {
        iconElement.setAttribute('data-shape', shape);
    }*/

    if (icon) {
        // iconElement.setAttribute('data-icon', icon);
        const iconName = camelcase(icon);

        iconElement.insertAdjacentHTML('beforeend', returnIconSVG(iconName));
    }

    return iconElement;
};
