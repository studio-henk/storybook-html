import './basebutton.css';

export const createBaseButton = ({
     element = 'button',
     type = 'button',
     variant = '',
     size = '',
     backgroundColor,
     buttonText = 'button text',
     disabled = false,
     onClick,
 }) => {
    const btn = document.createElement(element);
    if (element === 'button') {
        btn.type = type;
    }
    if (element === 'a') {
        btn.href = '#';
    }
    btn.innerText = buttonText;
    btn.addEventListener('click', onClick);
    btn.className = ['sh-atom-button'].join(' ');
    //btn.style.backgroundColor = backgroundColor;

    if (size) {
        btn.setAttribute('data-size', size);
    }

    if (variant) {
        btn.setAttribute('data-variant', variant);
    }

    if (disabled) {
        btn.setAttribute('disabled', '');
    }

    return btn;
};
