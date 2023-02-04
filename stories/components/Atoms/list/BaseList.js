import './_atom-list.css';
// import {HenkLogo} from "./BaseImg.stories";
// import {Avatar} from "./BaseImg.stories";

export const createBaseList = ({
    element = 'ul',
    variant = '',
    dataStyle,
    data = [
        {
            id: 1,
            text: 'List item 1',
            href: '',
            isActive: false,
        },
        {
            id: 2,
            text: 'List item 2',
            href: '',
            isActive: false,
        }
    ]
}) => {
  const baseList = document.createElement(element);
  baseList.data = data;
  baseList.data.forEach(
    element => {
        const listItem = document.createElement('li');
        // check for href
        if (element.href) {
            // check if it has isActive prop
            if (element.isActive) {
                listItem.className = ['step-active'].join(' ');
                const activeItem = document.createElement('strong');
                activeItem.innerHTML = element.text;
                listItem.append(activeItem);
            } else {
                const itemLink = document.createElement('a');
                itemLink.href = element.href;
                itemLink.innerHTML = element.text;
                listItem.append(itemLink);
            }
        } else {
            listItem.innerHTML = element.text;
        }
        baseList.append(listItem);
    }
  );

  baseList.className = 'sh-atom-list';

  if (variant) {
    baseList.setAttribute('data-variant', variant);
  }

  if (dataStyle) {
    baseList.setAttribute('data-style', dataStyle);
  }

  return baseList;
};