
let swiper = Swiper;
let init = false;

let swiperMode = () => {
   let mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)');

    if(mobile.matches) {
         if (!init) {
             init = true;
             swiper = new Swiper('.swiper', {
                slidesPerView: "auto",
                spaceBetween: 16,
                loop: false,
                pagination: {
                    el: '.swiper-pagination',
                    clickable:true,
                  },
                on: {
                    init: function () {
                      console.log('swiper initialized');
                    },
                  },
             });
         }
     }
     else if (!mobile.matches && init)  {
         swiper.destroy(true,true);
       init = false;
       console.log("swiper destroyed")
     }
  }


window.onload = function() {
    swiperMode();
}

window.onresize = function() {
    swiperMode();
}