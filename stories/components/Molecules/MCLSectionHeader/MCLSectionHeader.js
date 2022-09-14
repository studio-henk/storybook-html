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
    const mclSectionHeaderParent = document.createElement('div');
    mclSectionHeaderParent.className = ['sh-org-block__layer1'].join(' ');

    const mclSectionHeader = document.createElement('header');
    mclSectionHeader.className = ['sh-molecule-section-header'].join(' ');

    // add to parent
    mclSectionHeaderParent.appendChild(mclSectionHeader)

  // order
  if (order) {
    mclSectionHeader.setAttribute('data-order', order);
  }

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

  // some content
    const content = `
    <div class="sh-section__content">
        <p class="sh-section__intro">When you’re investing in a new piece of furniture there’s a lot to
            take into<br> consideration. Are you stuck on choosing the right design for your living
                space?<br> Or not sure which material and colour combinations would fit your favourite<br>
                    piece? We understand the challenge, and we’re here to help.</p>
    </div>
    `

    // parent
    // const parent = `
    // <div class="sh-org-block__layer1" style="background-color: hsla(0, 0%, 12%, 10%);padding-bottom: 60px;"></div>
    // `

    mclSectionHeader.insertAdjacentHTML('afterend', content)

  // return mclSectionHeader;
  return mclSectionHeaderParent;
};
