// import './page-cart-layout.css';
import {createBaseH1} from "../../components/Atoms/h1/BaseH1";
import {createMoleculeHeadingBadge} from "../../components/Molecules/molecule-heading-badge/moleculeHeadingBadge";
import {
  createOrganismGridSectionInfobox
} from "../../components/Organisms/organism-grid-section-infobox/OrganismGridSectionInfobox";


export const createCartPage = ({
  title= 'title',
  badgeNumber,
  ...args
}) => {
  // 1. this is first div inside main element on page
  // 2. this will be this page main content grid
  // 3. 3 rows on mobile, 4 on desktop
  const cartPage = document.createElement('div');
  cartPage.className = 'cart-page-layout-container';

  /* create grid items :rows */

  // mobile: page title
  const gridItem1 = document.createElement('div');
  gridItem1.className = 'cart-page__grid-item';

  // molecule heading badge
  const moleculeHeadingBadge = createMoleculeHeadingBadge({
    titleText: title,
    badgeNumber: badgeNumber,
    ...args
  });

  gridItem1.appendChild(moleculeHeadingBadge);


  // desktop: button continue shopping
  const gridItem2 = document.createElement('div');
  gridItem2.className = 'cart-page__grid-item';
  gridItem2.innerText = 'grid item: row 2'

  // cart list
  const gridItem3 = document.createElement('div');
  gridItem3.className = 'cart-page__grid-item';
  gridItem3.innerText = 'grid item: row 3'

  // info boxes
  const gridItem4 = document.createElement('div');
  gridItem4.className = 'cart-page__grid-item';
  // gridItem4.innerText = 'grid item: row 4'
    // use org
    gridItem4.appendChild(
      createOrganismGridSectionInfobox({})
    );

  // action-console
  const gridItem5 = document.createElement('div');
  gridItem5.className = 'cart-page__grid-item';
  gridItem5.innerText = 'grid item: row 5'

  // cartPage.append(h1);
  cartPage.append(gridItem1);
  cartPage.append(gridItem2);
  cartPage.append(gridItem3);
  cartPage.append(gridItem4);
  cartPage.append(gridItem5);

  return cartPage;
};


