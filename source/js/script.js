const mainHeaderToggle = document.querySelector('.main-header__toggle');
const mainНeader = document.querySelector('.main-header');
const contactsMap = document.querySelector('.contacts__map');

mainНeader.classList.remove('no-js');
contactsMap.classList.remove('no-js');

mainHeaderToggle.addEventListener('click', () => mainНeader.classList.toggle('is-open'));
