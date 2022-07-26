import {createBaseH1} from "../components/Atoms/h1/BaseH1";
import {createBaseButton} from "../components/Atoms/BaseButton";
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
    text: title,
  })

  function onModalOpen() {
    // alert('modal open');
    // add modifier class --status-open, to modal
    document.querySelector('.sh-org-modal').classList.add('--status-open');
  }

  const modalOpenButton = createBaseButton( {
    buttonText: 'open modal',
    onClick: onModalOpen,
  })

  const modal1 = createOrgModal({
  })

  homepage.append(h1);
  homepage.append(modalOpenButton);
  homepage.append(modal1);

  return homepage;
};


