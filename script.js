//ScrollReveal: Animation Scroll

const sr = ScrollReveal({
    duration: 700,
    delay: 200,
    easing: 'ease-out',
    distance: '30px',
    reset: false,
    interval: 100
  });

  sr.reveal('header', {
    origin: 'top'
  });
  sr.reveal('.box-model-1', {
    origin: 'right',
  });
  sr.reveal('.box-model-2', {
    origin: 'left',
  });
  sr.reveal('.box-model-3, .box-model-4, .box-model-5', {
    origin: 'bottom',
  });

