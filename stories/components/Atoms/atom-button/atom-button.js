import './atom-button.css';

export const createAtomButton = ({
     buttonElement = 'button',
     type = 'button',
     role = '',
     state = '',
     style = '',
     size = '',
     backgroundColor,
     buttonText = 'button text',
     onClick,
     icon = ''
 }) => {
    const btn = document.createElement(buttonElement);
    if (buttonElement === 'button') {
        btn.type = type;
    }
    if (buttonElement === 'a') {
        btn.href = '#';
    }
    btn.innerText = buttonText;
    btn.addEventListener('click', onClick);
    btn.className = ['sh-atom-button'].join(' ');
    //btn.style.backgroundColor = backgroundColor;

    if (role && role != 'Normal') {
        btn.setAttribute('data-role', role);
    }

    if (state == 'disabled') {
        if (buttonElement === 'button') {
            btn.setAttribute('disabled', 'disabled');
        } else {
            btn.setAttribute('data-state', state);
        }
    }

    if (size && size != 'base') {
        btn.setAttribute('data-size', size);
    }

    if (style) {
        btn.setAttribute('data-style', style);
    }

    /*if (variant) {
        btn.setAttribute('data-variant', variant);
    }*/
    if (icon) {
        btn.setAttribute('data-icon', icon);
        const arrowRight = `       
        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">            
            <path d="M8.5 10.5L12.25 6.75L8.5 3" stroke="#1F1F1F" stroke-linecap="square"/>
            <path d="M1 6.75L11.625 6.75" stroke="#1F1F1F" stroke-linecap="square"/>
        </svg>
        `
        // btn.appendChild()
        btn.insertAdjacentHTML('beforeend', arrowRight);
    }

    return btn;
};
