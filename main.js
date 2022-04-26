// Abre e fecha o menu quando clincar nos incones
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

// Fecha menu após a seleção

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* Sombra do header com movimento do scroll*/

function headerShadow() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

/* Testimonials slider */
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    1200: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* scrollreveal */

const scrollReveal = ScrollReveal({
  origin: 'left',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
   #about .image, #about .text,
   #services header, #services .card,
   #testimonials header, #testimonials .testimonials,
   #contact .text, #contact .links,
   footer .brand, footer .social
  `,
  { interval: 100 }
)

/* animação no botão back to top */

function backToTop() {
  const backToTopBtn = document.querySelector('.back-to-top')

  if (window.scrollY >= 560) {
    backToTopBtn.classList.add('show')
  } else {
    backToTopBtn.classList.remove('show')
  }
}

/* when scroll */

window.addEventListener('scroll', function () {
  headerShadow()
  backToTop()
})
