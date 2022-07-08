import {createBaseH1} from "../components/Atoms/h1/BaseH1";

export const createHomePage = ({
  variant = '',
  text,
  title= 'title'
}) => {
  const homepage = document.createElement('div');
  homepage.className = 'sh-page';
  // homepage.innerText = text;
  const h1 = createBaseH1({
    text: title,
  })

  // const h1 = `<h1>${title}</h1>`;
  // const section = `<section>
  //   <h2>Section title</h2>
  //   <p>A paragraph.</p>
  //   <p>A second paragraph.</p>
  // </section>`;
  // homepage.appendChild(section);
  homepage.append(h1);
  //homepage.insertAdjacentHTML('beforeend', h1);
  //homepage.insertAdjacentHTML('beforeend', section);

  return homepage;
};


