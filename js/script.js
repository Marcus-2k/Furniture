/*Поддерживает ли браузер WebP изображение, если да body + class'webp' or 'no-webp' */
function testWebP(callback) {
   var webP = new Image();
   webP.onload = webP.onerror = function() {
      callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function(support) {
   if (support == true) {
      document.querySelector('body').classList.add('webp');
   } else {
      document.querySelector('body').classList.add('no-webp');
   }
});
/*Поддерживает ли браузер WebP изображение, если да body + class'webp' or 'no-webp' */

/*Опеределение устройства (Pc, Touch) /////////////////////////////////// */
const isMobile = {
   Android: function() {
      return navigator.userAgent.match(/Android/i);
   },
   BackBerry: function() {
      return navigator.userAgent.match(/BackBerry/i);
   },
   iOS: function() {
      return navigator.userAgent.match(/iPhote|iPad|iPod/i);
   },
   Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
   },
   Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
   },
   any: function() {
      return (
         isMobile.Android() ||
         isMobile.BackBerry() ||
         isMobile.iOS() ||
         isMobile.Opera() ||
         isMobile.Windows()
      );
   }
};

if (isMobile.any()) {
   document.body.classList.add('_touch');

   let menuArrows = document.querySelectorAll('.menu__arrow');
   if (menuArrows.length > 0) {
      for (let index = 0; index < menuArrows.length; index++) {
         const menuArrow = menuArrows[index];
         menuArrow.addEventListener("click", function(e) {
            menuArrow.parentElement.classList.toggle('_active');
         });
      }
   }

} else {
   document.body.classList.add('_pc');
}
/*Опеределение устройства (Pc, Touch) /////////////////////////////////// */

/*Меню //////////////////////////////////////// */
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
   iconMenu.addEventListener("click", function(e) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   });
}
/*Меню ////////////////////////////////////////*/

/*Прокрутка при клике //////////////////////////////////////// */
// const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
// if (menuLinks.length > 0) {
//    menuLinks.forEach(menuLink => {
//       menuLink.addEventListener("click", onMenuLinkClick);
//    });

//    function onMenuLinkClick(e) {
//       const menuLink = e.target;
//       if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
//          const gotoBlock = document.querySelector(menuLink.dataset.goto);
//          const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

//          if (iconMenu.classList.contains('_active')) {
//             document.body.classList.remove('_lock');
//             iconMenu.classList.remove('_active');
//             menuBody.classList.remove('_active');
//          }

//          window.scrollTo({
//             top: gotoBlockValue,
//             behavior: 'smooth'
//          });
//          e.preventDefault();
//       }
//    }
// }
/*Прокрутка при клике //////////////////////////////////////// */

/* Табы ///////////////////////////////////////////////////// */

// document.querySelectorAll('.tabs__items').forEach((item) =>
//     item.addEventListener('click', function (e) {
//         e.preventDefault();
//         const id = e.target.getAttribute('href').replace('#', '');

//         document.querySelectorAll('.tabs__items').forEach(
//             (chiel) => chiel.classList.remove('tabs__items--active')
//         );
//         document.querySelectorAll('.tab__block').forEach(
//             (chiel) => chiel.classList.remove('tab__block--active')
//         );

//         item.classList.add('tabs__items--active');
//         document.getElementById(id).classList.add('tab__block--active');
//     })
// );

// document.querySelector('.tabs__items').click(3);

/* Табы ///////////////////////////////////////////////////// */

/* Swiper-Slider ///////////////////////////////////////////////////// */
new Swiper('.image-slider', {
   // Стрелки
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
   },
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'fraction',
      renderFraction: function(currentClass, totalClass) {
         return '0<span class="' + currentClass + '"></span>' +
            '/0<span class = "' + totalClass + '" > < /span>';
      },
   },
   grabCursor: true,
   //  slidesPerColumn: 1,
   // slidesPerView: 2,
   //  autoHeight: false,

});
/* Swiper-Slider ///////////////////////////////////////////////////// */

/* Swiper-Slider TWO ///////////////////////////////////////////////////// */
new Swiper('.advantages-slider', {
   // Стрелки
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
   },
   breakpoints: {
      280: {
         slidesPerView: 1,
      },
      900: {
         slidesPerView: 2,
      },
      1200: {
         slidesPerView: 3,
      },
   },
   grabCursor: true,
   slidesPerView: 3,
});
/* Swiper-Slider TWO ///////////////////////////////////////////////////// */

/* Spoiler /////////////////////////////////////////////////////////// */
$(document).ready(function() {
   $('.spoiler__title-slider').click(function(event) {
      if ($('.slider-spoiler__item').hasClass('true')) {
         $('.spoiler__title-slider').not($(this)).removeClass('active');
         $('.spoiler__info').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('active').next().slideToggle(300);
   });
});
/* Spoiler /////////////////////////////////////////////////////////// */

// Animation hover element .shop-bedroom////////////////////////// */
$(document).ready(function($) {
   $('.element__wrapper').hover(function() {
         $(this).find("h2,h3").toggleClass("text__hover");
      },
      /*function(){$(this).find("h3").removeClass("price__promotion__hover");}*/
   );
});
// Animation hover element .shop-bedroom////////////////////////// */