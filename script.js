

const header = ScrollReveal({
    duration: 700,
    delay: 200,
    easing: 'ease-out',
    distance: '30px',
    origin: 'top',
    reset: false,
  });

  header.reveal('header', {
    interval: 100,
  });


  
const box1 = ScrollReveal({
    duration: 700,
    delay: 300,
    easing: 'ease-out',
    distance: '30px',
    origin: 'rightt',
    reset: false,
  });

  box1.reveal('.box-model-1', {
    interval: 100,
  });

const box2 = ScrollReveal({
    duration: 700,
    delay: 300,
    easing: 'ease-out',
    distance: '30px',
    origin: 'left',
    reset: false,
  });
  
box2.reveal('.box-model-2', {
    interval: 100,
  });

const boxz = ScrollReveal({
    duration: 700,
    delay: 300,
    easing: 'ease-out',
    distance: '30px',
    origin: 'bottom',
    reset: false,
  });

  boxz.reveal('.box-model-3, .box-model-4, .box-model-5', {
    interval: 100,
  });
