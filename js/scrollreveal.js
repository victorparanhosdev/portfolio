//ScrollReveal: Animation Scroll

const sr = ScrollReveal({
    delay: 200,
    easing: 'ease',
    distance: '5rem',
    reset: false,
    interval: 100,
 
  });

  sr.reveal('.header', {
    origin: 'top',
  });

  sr.reveal('.box-model-1 div:first-child', {
    origin: 'left',
  });
  
  sr.reveal('.img-ilustration', {
    origin: 'right',
    distance: '10rem',
    scale:0.9,
  });

  sr.reveal('.img-perfil', {
    origin: 'left',
    distance: '10rem',
    scale:0.9,
  });

  sr.reveal('.aside-wrapper-2', {
    origin: 'right',
  });

  sr.reveal('.box-model-3, .box-model-4, .box-model-5', {
    scale:0.9,
    origin: 'bottom',
    distance: '5rem'
  });

   