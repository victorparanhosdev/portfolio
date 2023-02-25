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

const listMenu = document.querySelectorAll(".btn-menus")

for(let ListMenu of listMenu){
  ListMenu.onclick = () => {
    document.querySelector(".box-menu").classList.remove("active")
    document.body.style.overflow = 'initial'
  } 
}



for(let MenuMobile of menuMobile){
  let confirm = true

  MenuMobile.onclick = () => {
    
    document.querySelector(".box-menu").classList.toggle("active")
    
    if(confirm){
      document.body.style.overflow = 'hidden'
      confirm = false
    }else {
      document.body.style.overflow = 'initial'
      confirm = true
    }
  }

}
const header = document.querySelector("header")
const heightHeader = header.offsetHeight
console.dir(header.offsetHeight)


window.addEventListener("scroll", ()=> {

  if(window.scrollY > heightHeader) {
    header.classList.add("scroll")
  }else {
    header.classList.remove("scroll")
  }

})
