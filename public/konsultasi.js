

function hahah(){
  console.log("hello world")
}




let swiper2 = new Swiper(".mySwiper2", {
grabCursor: true,
effect: "creative",
loop: true,
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