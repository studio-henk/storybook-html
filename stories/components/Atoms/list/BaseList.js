// import './atom-list.css';
// import {HenkLogo} from "./BaseImg.stories";
// import {Avatar} from "./BaseImg.stories";

export const createBaseList = ({
    element = 'ul',
    variant = '',
    data = [
        {
            id: 1,
            text: 'List item 1'
        },
        {
            id: 2,
            text: 'List item 2'
        }
    ]
}) => {
  const baseList = document.createElement(element);
  baseList.data = data;
  baseList.data.forEach(
    element => {
        const listItem = document.createElement('li');
        listItem.innerText = element.text;
        baseList.append(listItem);
    }
  );

  baseList.className = 'sh-atom-list';

  if (variant) {
    baseList.setAttribute('data-variant', variant);
  }

  return baseList;
};