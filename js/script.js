//*BURGER

const burger = document.querySelector('.header__burger')
const menu = document.querySelector('.header__nav')
const isHidden = true


burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
})

//*POPUP

const popupBtn = document.querySelector('.header__menu-btn')
const popupPage = document.querySelector('.popup')

popupBtn.addEventListener('click', () => {
    popupPage.classList.toggle('popup_active')
})


(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
       if (window.scrollY > 100) {
          header.classList.add('header__active');
       } else {
          header.classList.remove('header__active');
       }
    };
 }());