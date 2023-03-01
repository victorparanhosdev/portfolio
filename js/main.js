//ScrollReveal: Animation Scroll

const sr = ScrollReveal({
  duration: 900,
  delay: 200,
  easing: 'ease',
  distance: '5rem',
  reset: false,
  interval: 100
})

sr.reveal('header', {
  origin: 'left'
})

sr.reveal(
  'div.txt-wrapper-1, .paragraph-1, div.box-model-1, .btn-githuber, .btn-linkedin',
  {
    origin: 'right',
    distance: '10rem'
  }
)

sr.reveal(
  '#about, .title-h2, .layout-wrapper-3 article, .wrapper-4 > div, .wrapper-5 > i',
  {
    origin: 'bottom',
    distance: '5rem'
  }
)

const menuMobile = document.querySelectorAll('.icon-menu-mobile')
const listMenu = document.querySelectorAll('.btn-menus li a')
const header = document.querySelector('header')
const heightHeader = header.offsetHeight
const botaoParanhos = document.querySelector('.logo')
const divMenu = document.querySelector('.box-menu')
const OneDiv = document.querySelector('.box-model-1')
const Setinha = document.querySelector('#setaup')
const heightOneDiv = OneDiv.offsetHeight


window.addEventListener('scroll', () => {

  if(window.scrollY >= heightOneDiv){
    Setinha.style = 'opacity: 0.7; visibility: visible; bottom: 1.5rem';

    
  }
  if(window.scrollY <= heightOneDiv){
    Setinha.style = 'opacity: 0; visibility: hidden'
  }

  if (window.scrollY > heightHeader) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})


for (let ListMenu of listMenu) {
  ListMenu.onclick = () => {
    const isTopFixed = header.style.position == 'fixed'
    divMenu.classList.remove('active')
    document.body.style.overflow = 'initial'
    if (isTopFixed) {
      let isClassHidden = document.body.style.overflow == 'hidden'
      if (isClassHidden) {
        document.body.style.overflow = 'initial'
      } else {
        document.body.style.overflow = 'hidden'
      }
    }
  }
}

botaoParanhos.addEventListener('click', () => {
  document.body.style.overflow = 'initial'
  divMenu.classList.remove('active')
})

for (let MenuMobile of menuMobile) {
  MenuMobile.onclick = () => {
    divMenu.classList.toggle('active')
    let isClassHidden = document.body.style.overflow == 'hidden'

    if (isClassHidden) {
      document.body.style.overflow = 'initial'
    } else {
      document.body.style.overflow = 'hidden'
    }
  }
}


window.onresize = () => {
  const widthScreen = window.innerWidth
  let screenWidth = screen.width
  if (widthScreen > 690) {
    let isClassHidden = document.body.style.overflow == 'hidden'
    if (isClassHidden) {
      document.body.style.overflow = 'initial'
      divMenu.classList.remove('active')
    }
  }
}
