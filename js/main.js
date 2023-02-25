//ScrollReveal: Animation Scroll

const sr = ScrollReveal({
  duration: 900,
  delay: 200,
  easing: 'ease',
  distance: '5rem',
  reset: false,
  interval: 100,

});

sr.reveal('header', {
  origin: 'left',
});

sr.reveal('div.txt-wrapper-1, .paragraph-1, .img-mao, div.box-model-1, .btn-githuber, .btn-linkedin', {
  origin: 'right',
  distance: '10rem',

});


sr.reveal('#about, .title-h2, .layout-wrapper-3 > div, .wrapper-4 > div, .wrapper-5 > i', {
  origin: 'bottom',
  distance: '5rem'
});

 