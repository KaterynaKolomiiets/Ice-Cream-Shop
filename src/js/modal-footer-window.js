(() => {
  const refs = {
    openModalHeadBtn: document.querySelector('[data-footer-modal-open]'),
    closeModalHeadBtn: document.querySelector('[data-footer-modal-close]'),
    modal: document.querySelector('[data-footer-modal]'),
  };

  refs.openModalHeadBtn.addEventListener('click', toggleModal);
  refs.closeModalHeadBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalHeadBtn: document.querySelector('[data-footer-second-modal-open]'),
    closeModalHeadBtn: document.querySelector('[data-footer-second-modal-close]'),
    modal: document.querySelector('[data-footer-second-modal]'),
  };

  refs.openModalHeadBtn.addEventListener('click', toggleModal);
  refs.closeModalHeadBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();