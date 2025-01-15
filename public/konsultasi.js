






let swiper2 = new Swiper(".mySwiper2", {
grabCursor: true,
effect: "creative",

autoplay: true,

creativeEffect: {
  prev: {
    
    translate: ["-200%", 10, -1000],
  },
  next: {
    
    translate: ["200%", 10, -1000],
  },
},
});