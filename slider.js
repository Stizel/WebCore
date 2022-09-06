let swiper = Swiper;
let init = false;

let swiperMode = () => {
   let mobile = window.matchMedia('(max-width: 767px)');

    if(mobile.matches && !init) {
             init = true;
             swiper = new Swiper('.swiper', {
                slidesPerView: "auto",
                spaceBetween: 16,
                loop: false,
                pagination: {
                    el: '.swiper-pagination',
                    clickable:true,
                  },
             });  
    }
    if (!mobile.matches && init) {
         swiper.destroy(true,true);
       init = false;
     }
  }

arr = ["load", "resize"];
arr.forEach(el => window.addEventListener(el,()=>swiperMode()));  

