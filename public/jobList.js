const x = document.querySelectorAll("#ini")
const o = document.getElementById("close-filter")
const t = document.getElementById("bg-black")
const tw = document.getElementById("bg-black2")
const tw3 = document.getElementById("bg-black3")
const i = document.getElementById("Filters-bar")
const header = document.querySelector("#headers")

const ccc2 = document.querySelector(".ccc2")




function sideBar(){
    i.classList.toggle("translate-x-full")
  t.classList.toggle("io")
  t.classList.toggle("yy")
t.classList.toggle("invisible")
}







x.forEach((xq) => xq.addEventListener("click", () => {

    xq.classList.toggle("rotate-180")
   let i = xq.closest(".haha").querySelector(".content-tag")
   let s = xq.closest(".haha").querySelector("#cao")

   if(xq.classList.contains("rotate-180")){
      i.style.maxHeight = i.scrollHeight + "px"
      // s.style.marginBottom = `20px`
   }else{
      i.style.maxHeight = 0
   }
   
 
}))



// sidebar
const drop = document.querySelector("#dropdown")


// search
const search = document.querySelector(".ri-search-2-line")
const searchBar = document.querySelector("#search")




// const computedStyle = getComputedStyle(header);

search.addEventListener("click", () => {
   
   
search.classList.toggle("acf")

   if(search.classList.contains("acf")){
      ccc2.style.maxHeight = ccc2.scrollHeight + "px"
    
   }else{
      ccc2.style.maxHeight = 0
   }


   })



// hamburger
const hamburger = document.querySelector('#hamburger')



hamburger.addEventListener("click", () => {
hamburger.classList.toggle("hamburger-active")

drop.classList.toggle("scale-y-100")
drop.classList.toggle("scale-y-0")

tw.classList.toggle("io")
tw.classList.toggle("yy")
if(tw.classList.contains("invisible")){

   tw.classList.remove("invisible")
}else{
   setTimeout(() => {
      tw.classList.add("invisible")
  },300)
}
})



document.addEventListener("click", (e) => {

   if(o.contains(e.target) || t.contains(e.target) && !i.classList.contains("translate-x-full")){

      i.classList.add("translate-x-full")
      t.classList.toggle("io")
      
      setTimeout(() => {
          t.classList.toggle("invisible")
      },300)
      t.classList.toggle("yy")
   }  
   
   if(!drop.contains(e.target) && !hamburger.contains(e.target) && drop.classList.contains("scale-y-100")  ){
      hamburger.classList.remove("hamburger-active")
      drop.classList.remove("scale-y-100")
      drop.classList.add("scale-y-0")
     
      tw.classList.add("io")
tw.classList.remove("yy")
if(tw.classList.contains("invisible")){

   tw.classList.remove("invisible")
}else{
   setTimeout(() => {
      tw.classList.add("invisible")
  },300)
}
     
   }

   if(!ccc2.contains(e.target) && !search.contains(e.target) &&   search.classList.contains("acf")  ){
      search.classList.remove("acf")
      ccc2.style.maxHeight = 0

   }
  })