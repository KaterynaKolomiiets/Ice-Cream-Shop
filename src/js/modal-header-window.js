(() => {
    const refs = {
        openModalHeadBtn: document.querySelectorAll("[data-modal-head-open]"),
        closeModalHeadBtn: document.querySelector("[data-modal-head-close]"),
        menu: document.querySelector("[data-modal-head]"),
    };
    refs.openModalHeadBtn.forEach(e => {
        e.addEventListener("click", toggleModal);
    });
    refs.closeModalHeadBtn.addEventListener("click", toggleModal);
    function toggleModal() {
        refs.menu.classList.toggle("is-hidden");
    }
})();