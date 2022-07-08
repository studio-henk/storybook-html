import './atom-img.css';
import {HenkLogo} from "./BaseImg.stories";
import {Avatar} from "./BaseImg.stories";

//import imageFile from '../../../../public/images/test.jpg';

export const createBaseImg = ({
    src = '/images/test.jpg',
    variant = '',
    width,
    height,
    alt = '',
}) => {
  const baseImg = document.createElement('img');
  if (variant === 'logo') {
      baseImg.src = HenkLogo.args.src;
  } else if (variant === 'avatar') {
    baseImg.src = Avatar.args.src;
  } else {
    baseImg.src = src;
  }
  baseImg.className = 'sh-atom-img';
  baseImg.alt = alt;
  baseImg.width = width;
  baseImg.height = height;

  if (variant) {
    baseImg.setAttribute('data-variant', variant);
  }

  return baseImg;
};


