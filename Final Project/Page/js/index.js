// /*=============== SHOW MENU ===============*/
// const navMenu = document.getElementById('nav-menu'),
//   navToggle = document.getElementById('nav-toggle'),
//   navClose = document.getElementById('nav-close')

// /*===== MENU SHOW =====*/
// /* Validate if constant exists */
// if (navToggle) {
//   navToggle.addEventListener('click', () => {
//     navMenu.classList.add('show-menu')
//   })
// }

// /*===== MENU HIDDEN =====*/
// /* Validate if constant exists */
// if (navClose) {
//   navClose.addEventListener('click', () => {
//     navMenu.classList.remove('show-menu')
//   })
// }

// /*=============== REMOVE MENU MOBILE ===============*/
// // WHEN CLICK IN "HOME, ABOUT, POPULAR ,FEATURED" EXIT IN MENU
// const navLink = document.querySelectorAll('.nav__link')

// function linkAction() {
//   const navMenu = document.getElementById('nav-menu')
//   // When we click on each nav__link, we remove the show-menu class
//   navMenu.classList.remove('show-menu')
// }
// navLink.forEach(n => n.addEventListener('click', linkAction))

// /*=============== CHANGE BACKGROUND HEADER ===============*/
// function scrollHeader() {
//   const header = document.getElementById('header')
//   // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
//   if (this.scrollY >= 50) header.classList.add('scroll-header')
//   else header.classList.remove('scroll-header')
// }
// window.addEventListener('scroll', scrollHeader)

// /* ========== POPULAR SWIPER ============ */
// let swiperPopular = new Swiper('.popular__container', {
//   loop: true,
//   spaceBetween: 24,
//   slidesPerView: 'auto',
//   grabCursor: true,
//   pagination: {
//     el: '.swiper-pagination',
//     dynamicBullets: true
//   },
//   breakpoints: {
//     768: {
//       slidesPerView: 3
//     },
//     1024: {
//       spaceBetween: 48
//     }
//   }
// })

// /* ============= MIXITIP FILTER FEATURED ============== */
// let mixerFeatured = mixitup('.featured__content', {
//   selectors: {
//     target: '.featured__card'
//   },
//   animation: {
//     duration: 300
//   }
// })

// /* link activte featured */
// const linkFeatured = document.querySelectorAll('.featured__item')

// linkFeatured.forEach(l => l.addEventListener('click', activeFeatured))

// function activeFeatured() {
//   linkFeatured.forEach(l => l.classList.remove('active-featured'))
//   this.classList.add('active-featured')
// }
// //  ==============  SHOW SCROLL UP =============================
// function scrollUp() {
//   const scrollUp = document.getElementById('scroll-up')
//   // When the scroll is higher than 350 viewport height,
//   if (this.scrollY >= 350) scrollUp.classList.add('show-scroll')
//   else scrollUp.classList.remove('show-scroll')
// }
// window.addEventListener('scroll', scrollUp)

// // ================ SCROLL SECTIONS ACTIVE LINK =============
// const sections = document.querySelectorAll('section[id]')

// function scrollActive() {
//   const scrollY = window.pageYOffset

//   sections.forEach(current => {
//     const sectionHeight = current.offsetHeight,
//       sectionTop = current.offsetTop - 58,
//       sectionId = current.getAttribute('id')

//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       document
//         .querySelector('.nav__menu a[href*=' + sectionId + ']')
//         .classList.add('active-link')
//     } else {
//       document
//         .querySelector('.nav__menu a[href*=' + sectionId + ']')
//         .classList.remove('active-link')
//     }
//   })
// }
// window.addEventListener('scroll', scrollActive)

// // ============= SCROLL REVEAL ANIMATION =================
// const sr = ScrollReveal({
//   origin: 'top',
//   distance: '60px',
//   duration: 2500,
//   delay: 400,
//   reset: true
// })

// sr.reveal(
//   `.home__title, .popular__container, .features__img, featured__filters`
// )
// sr.reveal(`.home__subtitle`, { delay: 500 })
// sr.reveal(`.home__elec`, { delay: 600 })
// sr.reveal(`.home__img`, { delay: 800 })
// sr.reveal(`.home__car-data`, { delay: 1000, interval: 100, origin: 'bottom' })
// sr.reveal(`.home__button`, { delay: 100, interval: 100, origin: 'bottom' })
// sr.reveal(`.about__group, .offer__data`, { origin: 'left' })
// sr.reveal(`.about__data, .offer__img`, { origin: 'right' })
// sr.reveal(`.features__map`, { delay: 600, origin: 'bottom' })
// sr.reveal(`.features__card`, { interval: 300 })
// sr.reveal(`.featured__card, .logos__content, .footer__content`, {
//   interval: 100
// })


function changeModel(modelUrl, description) {
  // Update the iframe source
  document.getElementById('model-viewer').src = modelUrl;

  // Update the description text
  document.getElementById('model-description').textContent = description;

  // Optionally, update card description
  document.getElementById('model-card-description').textContent = cardDescription;
}


