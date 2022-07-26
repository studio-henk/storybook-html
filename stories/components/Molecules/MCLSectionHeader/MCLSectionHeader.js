import './_MCLSectionHeader.css';
import { createBaseH1} from "../../Atoms/h1/BaseH1";
import { createBaseH2} from "../../Atoms/h2/BaseH2";

export const createMCLSectionHeader = ({
  h1text,
  h2text,
  order,
  h1class,
  h2class
}) => {
  const mclSectionHeader = document.createElement('header');
  mclSectionHeader.className = ['sh-molecule-section-header'].join(' ');

  // order
  if (order) {
    mclSectionHeader.setAttribute('data-order', order);
  }

  // add
  // <h1 class="sh-molecule-section-header__title">Section title</h1>
  // <h2 class="sh-molecule-section-header__subtitle">Section subtitle</h2>

  // h1
  mclSectionHeader.appendChild(
      createBaseH1({
        text: h1text,
        CSSclass: h1class
      })
  )

  // h2
  if (h2text) {
    mclSectionHeader.appendChild(
      createBaseH2({
        text: h2text,
        CSSclass: h2class
      })
    )
  }


  return mclSectionHeader;
};
