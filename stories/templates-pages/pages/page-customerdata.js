import './page-customerdata.css';
import {createBaseH1} from "../../components/Atoms/h1/BaseH1";
// import {createMoleculeHeadingBadge} from "../../components/Molecules/molecule-heading-badge/moleculeHeadingBadge";
import {
  createOrganismGridSectionInfobox
} from "../../components/Organisms/organism-grid-section-infobox/OrganismGridSectionInfobox";
import {createMoleculeCheckoutSteps} from "../../components/Molecules/molecule-checkout-steps/moleculeCheckoutSteps";
import { Base } from '../../components/Molecules/molecule-checkout-steps/moleculeCheckoutSteps.stories';
import {createAtomButton} from "../../components/Atoms/atom-button/atom-button";

export const createCDPage = ({
  title= 'title',
  data,
  cartButtonHref,
  ...args
}) => {
  // 1. this is first div inside main element on page
  // 2. this will be this page main content grid
  // 3. 3 rows on mobile, 4 on desktop
  const Page = document.createElement('div');
  Page.className = 'page-layout-container';

  // first the checkoutSteps component : mobile
  const gridItem0 = document.createElement('div');
  gridItem0.className = 'page-layout-container__grid-item';
  gridItem0.id = 'page-block_checkout-steps';

  const checkoutSteps = createMoleculeCheckoutSteps({
    element: 'ol',
    dataStyle: 'no-bullets',
    data,
  });

  gridItem0.appendChild(checkoutSteps);

  // mobile: page title
  const gridItem1 = document.createElement('div');
  gridItem1.className = 'page-layout-container__grid-item';
  gridItem1.id = 'page-block_checkout-heading';

  const pageTitle = createBaseH1({
    titleText: title,
    className: 'h2'
  });

  gridItem1.appendChild(pageTitle);


  // desktop: button continue shopping
  const gridItem2 = document.createElement('div');
  gridItem2.className = 'page-layout-container__grid-item';
  gridItem2.id = 'page-block_checkout-shop-button';
  // gridItem2.innerText = 'grid item: row 2'

    const cartButton = createAtomButton({
      buttonElement: 'a',
      buttonText: 'Winkelmand bekijken',
      textTransform: 'none',
      accent: 'accent5',
      style: 'soft',
      size: 'xsmall',
      href: cartButtonHref,
      ...args
    })

    gridItem2.appendChild(cartButton);

  // cart list
  const gridItem3 = document.createElement('div');
  gridItem3.className = 'page-layout-container__grid-item';
  gridItem3.id = 'page-block_checkout-cart-list';
  gridItem3.innerText = 'grid item: row 3: CartList';

  // form
  const gridItemForm = document.createElement('div');
  gridItemForm.className = 'page-layout-container__grid-item';
  gridItemForm.id = 'page-block_checkout-form';
  gridItemForm.innerText = 'grid item: row: Form';

  // info boxes
  const gridItem4 = document.createElement('div');
  gridItem4.className = 'page-layout-container__grid-item';
  gridItem4.id = 'page-block_checkout-infoboxes';

    // use org
    gridItem4.appendChild(
      createOrganismGridSectionInfobox({})
    );

  // action-console
  // grid item and console are same div
  const gridItem5 = document.createElement('div');
  gridItem5.className = 'page-layout-container__grid-item';
  gridItem5.id = 'page-block_checkout-action-console';
  gridItem5.innerText = 'action-console: desktop: CostTable only';

  Page.append(gridItem0);
  Page.append(gridItem1);
  Page.append(gridItem2);
  Page.append(gridItem3);
  Page.append(gridItemForm);
  Page.append(gridItem4); // info boxes
  Page.append(gridItem5);

  return Page;
};


