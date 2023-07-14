const mainHeaderToggle = document.querySelector('.main-header__toggle');
const mainНeader = document.querySelector('.main-header');

mainНeader.classList.remove('no-js');

mainHeaderToggle.addEventListener('click', () => mainНeader.classList.toggle('is-open'));

const modal = document.querySelector(".modal");
const openButton = document.querySelector(".week-product__button");

openButton.addEventListener("click", () => modal.classList.add("modal--opened"));

modal.addEventListener("click", (evt) => {
  if (!evt.target.closest(".modal__content")) {
    modal.classList.remove("modal--opened");
  }
});
