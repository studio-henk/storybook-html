import './_molecule-checkout-steps.css';
import { createBaseList } from '../../Atoms/list/BaseList';

export const createMoleculeCheckoutSteps = ({
  ...args
}) => {
    const wrapperElement = document.createElement('div');
    wrapperElement.className = ['molecule-checkout-steps'].join(' ');

    // use list atom
    wrapperElement.appendChild(
    createBaseList({
        ...args
    })
  )

  return wrapperElement;
};
