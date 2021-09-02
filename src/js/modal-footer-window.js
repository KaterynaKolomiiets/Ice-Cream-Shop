(() => {
  const refs = {
    openModalHeadBtn: document.querySelector('[footer-data-modal-open]'),
    closeModalHeadBtn: document.querySelector('[footer-data-modal-close]'),
    modal: document.querySelector('[footer-data-modal]'),
  };

  refs.openModalHeadBtn.addEventListener('click', toggleModal);
  refs.closeModalHeadBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();