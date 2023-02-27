//ScrollReveal: Animation Scroll

const sr = ScrollReveal({
  duration: 900,
  delay: 200,
  easing: 'ease',
  distance: '5rem',
  reset: false,
  interval: 100

});

sr.reveal('header', {
  origin: 'left',
});

sr.reveal('div.txt-wrapper-1, .paragraph-1, div.box-model-1, .btn-githuber, .btn-linkedin', {
  origin: 'right',
  distance: '10rem',

});


sr.reveal('#about, .title-h2, .layout-wrapper-3 > div, .wrapper-4 > div, .wrapper-5 > i', {
  origin: 'bottom',
  distance: '5rem'
});


const menuMobile = document.querySelectorAll(".icon-menu-mobile")
const listMenu = document.querySelectorAll("ul.btn-menus li a")
const header = document.querySelector("header")
const heightHeader = header.offsetHeight
const botaoParanhos = document.querySelector(".logo")


for (let ListMenu of listMenu) {
  ListMenu.onclick = () => {
    document.querySelector(".box-menu").classList.remove("active")
    document.body.style.overflow = 'initial'
    if (header.style.position == 'fixed') {
      let confirm = (document.body.style.overflow == 'hidden')
      if (confirm) {
        document.body.style.overflow = 'initial'
      } else {
        document.body.style.overflow = 'hidden'

      }
    }

  }
}

botaoParanhos.addEventListener("click", () => {
  document.body.style.overflow = 'initial'
  document.querySelector(".box-menu").classList.remove("active")
})

for (let MenuMobile of menuMobile) {
  MenuMobile.onclick = () => {
    document.querySelector(".box-menu").classList.toggle("active")
    let confirm = (document.body.style.overflow == 'hidden')

    if (confirm) {
      document.body.style.overflow = 'initial'

    } else {
      document.body.style.overflow = 'hidden'

    }

  }

}

window.addEventListener("scroll", () => {
  if (window.scrollY > heightHeader) {
    header.classList.add("scroll")
  } else {
    header.classList.remove("scroll")
  }
})
