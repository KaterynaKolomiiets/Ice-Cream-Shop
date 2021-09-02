(() => {
  const refs = {
    openModalHeadBtn: document.querySelectorAll('[data-modal-head-open]'),
    closeModalHeadBtn: document.querySelector('[data-modal-head-close]'),
    modal: document.querySelector('[data-modal-head]'),
  };

  refs.openModalHeadBtn.forEach(e => {
    e.addEventListener("click", toggleModal);
    });
    refs.closeModalHeadBtn.addEventListener('click', toggleModal);

    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();