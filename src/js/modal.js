/*(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();*/

// document.querySelector(".move").addEventListener("click", function () {
//   document.querySelector('.product__overlay').classList.add('isShown');
// });
// document.querySelector(".isClosed").addEventListener("click", function () {
//   document.querySelector('.product__overlay').classList.remove('isShown');
// });

$('.move').click(function () {
  $(this).siblings('.product__overlay').addClass('isShown')
})

$('.isClosed').click(function () {
  $(this).closest('.product__overlay').removeClass('isShown')
})





// buttons.forEach(document.querySelector('.move') => {
//     document.querySelector('.move').addEventListener('click', () => {
//          document.querySelector('.product__overlay').classList.add('isShown');
//       });
//     });
//     var buttons = document.querySelectorAll('.move');
//     var overlays = document.querySelectorAll('.product__overlay')
// buttons.forEach((button) => {
//   button.addEventListener('click', () => {
//     overlays.forEach((overlay) => {
//       overlay.classList.add('isShown');

//     });
//   });
// });
// buttons.forEach((button) => {
//   button.addEventListener('click', () => {
//    document.querySelector('.isClosed').classList.add('isShown');
//   });
// });