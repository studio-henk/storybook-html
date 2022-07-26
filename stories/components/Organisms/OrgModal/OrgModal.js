import './_org-modal.css';
import { createBaseButton } from '../../Atoms/BaseButton';

export const createOrgModal = ({
    isOpen = false,
  variant = '',
  size = '',
  backgroundColor,
  buttonText,
  disabled = false,
  onCloseModal,
}) => {
    // modal outer container aka overlay
    const OrgModal = document.createElement('div');
    OrgModal.className = ['sh-org-modal'].join(' ');
    // modal inner container
    const OrgModalInner = document.createElement('div');
    OrgModalInner.className = ['sh-org-modal__modal-container'].join(' ');
    const OrgModalContent = document.createElement('div');
    OrgModalContent.className = ['sh-org-modal__modal-content'].join(' ');

    // some content
    const content = `
    <p>some content</p>
    `

    // status open/closed
    if (isOpen === true) {
        OrgModal.classList.add('--status-open');
    }

  function onCloseModal() {
    // alert('clicked');
    // @todo: find closest modal
    document.querySelector('.sh-org-modal').classList.remove('--status-open');
  }

  // button
  OrgModalInner.appendChild(
      createBaseButton({
        variant: 'primary',
        buttonText: 'close',
        onClick: onCloseModal,
      })
  )

  OrgModalContent.insertAdjacentHTML('beforeend', content)

  OrgModalInner.appendChild(OrgModalContent)

  // combine all
  OrgModal.appendChild(OrgModalInner)

  return OrgModal;
};
