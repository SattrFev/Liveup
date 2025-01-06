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

// save toggle 
// const p = document.querySelectorAll(".save")

// p.forEach((saving) => saving.addEventListener("click", () => {
//    if(saving.classList.contains("ri-bookmark-line")){
//       saving.classList.remove("ri-bookmark-line")
//       saving.classList.add("ri-bookmark-fill")
//       saving.classList.add("text-black")
      
//    }else{
//       saving.classList.add("ri-bookmark-line")
//       saving.classList.remove("ri-bookmark-fill")
//       saving.classList.remove("text-black")
     
//    }
// }))

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

   // searchBar.classList.toggle("scale-y-100")
   // searchBar.classList.toggle("scale-y-0")
   
   // tw3.classList.toggle("io")
   // tw3.classList.toggle("yy")
   // if(tw3.classList.contains("invisible")){
   
   //    tw3.classList.remove("invisible")
   // }else{
   //    setTimeout(() => {
   //       tw3.classList.add("invisible")
   //   },300)
   // }
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
//       searchBar.classList.remove("scale-y-100")
//       searchBar.classList.add("scale-y-0")
//       tw3.classList.add("io")
// tw3.classList.remove("yy")
// if(tw3.classList.contains("invisible")){

//    tw3.classList.remove("invisible")
// }else{
//    setTimeout(() => {
//       tw3.classList.add("invisible")
//   },300)
// }
   }
  })






// LOWONGAN LOOPING

document.addEventListener('alpine:init', () => {
   Alpine.data('lowongan', () => ({
     jobs: [
      { 
         id: 1, 
         img: 'https://i.pinimg.com/736x/32/af/d2/32afd2431d845f90668bcea60379b7a9.jpg', 
         name: 'Google', 
         locasion: 'Mountain View', 
         title: 'Machine Learning Engineer', 
         desk: 'Google mencari Machine Learning Engineer untuk mengembangkan model pembelajaran mesin yang inovatif.', 
         tags2: ['On-Site', 'Permanent', 'Engineering'], 
         salary: '$75',
         jobType: 'Full-Time',
         saved: false
       },
       { 
         id: 2, 
         img: 'https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg', 
         name: 'Amazon', 
         locasion: 'London', 
         title: 'Frontend Web Developer', 
         desk: 'Amazon mencari Frontend Developer untuk membangun antarmuka web yang modern dan responsif.', 
         tags2: ['Remote', 'Temporary', 'Engineering'], 
         salary: '$95',
         jobType: 'Full-Time',
         saved: false
       },
       { 
         id: 3, 
         img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRtp_o1Q3vwPzZurp59P6RGtUIjIycnaMjLC0onTg6DBzCJFdxw', 
         name: 'Microsoft', 
         locasion: 'Redmond', 
         title: 'Cloud Solutions Architect', 
         desk: 'Microsoft membutuhkan Cloud Solutions Architect untuk mengimplementasikan solusi berbasis Azure yang efektif.', 
         tags2: ['Hybrid', 'Permanent', 'Engineering'], 
         salary: '$85',
         jobType: 'Contract',
         saved: false
       },
       { 
         id: 4, 
         img: 'https://i.pinimg.com/736x/0a/db/09/0adb09b6580d9c13a6fd4af026649940.jpg', 
         name: 'Meta', 
         locasion: 'Menlo Park', 
         title: 'Product Manager', 
         desk: 'Meta mencari Product Manager untuk memimpin pengembangan produk yang inovatif dan bernilai tinggi.', 
         tags2: ['Remote', 'Temporary', 'Marketing'], 
         salary: '$70',
         jobType: 'Part-Time',
         saved: false
       },
       { 
         id: 5, 
         img: 'https://i.pinimg.com/736x/60/6b/c0/606bc0717982547e555a514b479365a0.jpg', 
         name: 'Apple', 
         locasion: 'Cupertino', 
         title: 'iOS Developer', 
         desk: 'Apple mencari iOS Developer untuk mengembangkan aplikasi modern dan ramah pengguna di perangkat iOS.', 
         tags2: ['Flexible', 'Permanent', 'Engineering'], 
         salary: '$80',
         jobType: 'Full-Time',
         saved: false
       },
       { 
         id: 6, 
         img: 'https://i.pinimg.com/736x/6e/f6/20/6ef620a8d4abe3ab586665773143ff70.jpg', 
         name: 'Facebook', 
         locasion: 'Menlo Park', 
         title: 'Data Analyst', 
         desk: 'Facebook membutuhkan Data Analyst untuk menganalisis data dan memberikan wawasan yang dapat diterapkan.', 
         tags2: ['Remote', 'Internship', 'Finance'], 
         salary: '$50',
         jobType: 'Freelance',
         saved: false
       },
       { 
         id: 7, 
         img: 'https://i.pinimg.com/736x/06/19/60/06196084992e762df628b46900195d4f.jpg', 
         name: 'YouTube', 
         locasion: 'San Bruno', 
         title: 'Content Strategist', 
         desk: 'YouTube membutuhkan Content Strategist untuk mengembangkan strategi konten yang menarik dan relevan.', 
         tags2: ['Flexible', 'Temporary', 'Marketing'], 
         salary: '$40',
         jobType: 'Freelance',
         saved: false
       },
       { 
         id: 8, 
         img: 'https://i.pinimg.com/736x/8e/f0/b0/8ef0b0fe34321ecf25486380410caed0.jpg', 
         name: 'OpenAI', 
         locasion: 'San Francisco', 
         title: 'AI Researcher', 
         desk: 'OpenAI mencari AI Researcher untuk mengembangkan teknologi kecerdasan buatan yang inovatif.', 
         tags2: ['Hybrid', 'Permanent', 'Engineering'], 
         salary: '$90',
         jobType: 'Contract',
         saved: false
       },
       { 
         id: 9, 
         img: 'https://i.pinimg.com/736x/5b/e2/85/5be2857945e61a48d5a031eb301a8caf.jpg', 
         name: 'Netflix', 
         locasion: 'Los Gatos', 
         title: 'Creative Producer', 
         desk: 'Netflix membutuhkan Creative Producer untuk mengelola produksi konten orisinal dengan kualitas tinggi.', 
         tags2: ['On-Site', 'Temporary', 'Human'], 
         salary: '$60',
         jobType: 'Part-Time',
         saved: false
       }
       
    ]
    
   }))
})

document.addEventListener('alpine:init', () => {
   Alpine.data('saved', () => ({
   saved: [

   ]
    
   }))
})


// filter tag
// const tagField = document.querySelector("#Taggsss")

// const inputCheck = document.querySelectorAll("#hs-success-checkbox")
// let listCheked = ["Part-Times","Full-times"]
// let tag = document.querySelector("#Tags")

// function looping(){
//    for(let i = 0; i < listCheked.length; i++){
//       tag.innerHTML += ` <div  class="bg-white  rounded-full   h-9 cursor-pointer border-2 w-fit px-4 flex space-x-3 items-center"><span class="font-medium pb-1" >${listCheked[i]}</span><i id="close-filter" class="ri-close-line  text-sm text-gray-500 transition ease-in duration-100   hover:text-black"></i></div>`
//     }
// }

// looping()



// inputCheck.forEach((box) => box.addEventListener("click", () => {
   
   
//    if(box.checked == true){
//       listCheked.push(box.value)
 
//    }else{
//       listCheked = listCheked.filter((e) => e !== box.value)
//    }


// }) )






//   range input 
// window.addEventListener('load', () => {
//    (function () {
//      const range = document.querySelector('#hs-pass-values-to-html-elements');
//      const rangeInstance = new HSRangeSlider(range);
//      const min = document.querySelector('#hs-pass-values-to-html-elements-min-target');
//      const max = document.querySelector('#hs-pass-values-to-html-elements-max-target');

//      range.noUiSlider.on('update', (values) => {
//        min.innerText = rangeInstance.formattedValue[0];
//        max.innerText = rangeInstance.formattedValue[1];
//      });
//    })();
//  });

function languageSelector() {
   return {
     selectedIcon: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/2560px-Flag_of_the_United_Kingdom.svg.png",
     updateIcon(event) {
       const selectedValue = event.target.value;
       if (selectedValue) {
         this.selectedIcon = selectedValue;
       }
     }
   };
 }