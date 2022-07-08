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

  // if (variant === 'logo') {
  //     baseList.src = HenkLogo.args.src;
  // } else if (variant === 'avatar') {
  //   baseList.src = Avatar.args.src;
  // } else {
  //   baseList.src = src;
  // }
  baseList.className = 'sh-atom-list';

  if (variant) {
    baseList.setAttribute('data-variant', variant);
  }

  return baseList;
};