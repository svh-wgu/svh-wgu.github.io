const swiper = new Swiper('.swiper-container', {

    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    loopAddBlankSlides: true,
    loopAdditionalSlides: 0,

  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type:'fraction', 
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0:{
            slidesPerView: 1
            
        },
        768: {
            slidesPerView: 1
        },
        1200: {
            slidesPerView: 2
        }
    },

  });