import {createBaseH1} from "../components/Atoms/h1/BaseH1";
import {createAtomButton} from "../components/Atoms/atom-button/atom-button";
import {createOrgModal} from "../components/Organisms/OrgModal/OrgModal";

export const createHomePage = ({
  variant = '',
  text,
  title= 'title'
}) => {
  const homepage = document.createElement('div');
  homepage.className = 'sh-page';
  // homepage.innerText = text;
  const h1 = createBaseH1({
    titleText: title,
  })

  function onModalOpen() {
    // alert('modal open');
    // add modifier class --status-open, to modal
    document.querySelector('.sh-org-modal').classList.add('--status-open');
  }

  const modalOpenButton = createAtomButton( {
    buttonText: 'open modal',
    onClick: onModalOpen,
  })

  const modal1 = createOrgModal({
    buttonText: 'test'
  })

  homepage.append(h1);
  homepage.append(modalOpenButton);
  homepage.append(modal1);

  return homepage;
};


