// $(document).ready(function () {
  // AOS.init();

  /**
  //  * Sticky Header
  //  */
  // let isWindowScrolled = $(this).scrollTop() > 100;
  // let isStickyHeaderAllowed = window.innerWidth >= 768;
  // function stickyHeader() {
  //   if ($(this).scrollTop() > 100 && window.innerWidth >= 768) {
  //     $(".header-menu").addClass("header-menu--scrolled");
  //   } else {
  //     $(".header-menu").removeClass("header-menu--scrolled");
  //   }
  // }
  // $(window).on("scroll", function () {
  //   stickyHeader();
  // });
  // stickyHeader();

  // MASK
  // $("input[name=tel").inputmask("+7 (999) 999-99-99");

  /**
   * DROPDOWN
   */
  // $(".faq-list-card-top").each(function () {
  //   $(this).on("click", function () {
  //     $(this).toggleClass("faq-list-card-top--opened");
  //     $(this).parent().find(".faq-list-card-bottom").slideToggle();
  //   });
  // });


  /**
   * POPUPS
   */
//   modality({
//     pop: ".form--header-menu-callback",
//     clickTrigger: ".header-menu__callback",
//     popCloserType: "inner",
//   });
//   modality({
//     pop: ".pop-thanks",
//     clickTrigger: ".pop-thanks",
//     popCloserType: "inner",
//   });

//   /**
//    * AJAX SEND
//    */
//   $(".form").each(function () {
//     $(this).on("submit", function (event) {
//       event.preventDefault();
//       let userName = $(this).find('input[name="user-name"]');
//       let userTel = $(this).find('input[name="user-tel"]');
//       // console.log('аякс пошел', userName.val(), userTel.val(), $(this));
//       $.ajax({
//         url: "send.php",
//         type: "POST",
//         dataType: "json",
//         data: {
//           user_name: userName.val(),
//           user_tel: userTel.val(),
//         },
//         success: function (data) {},
//       });
//       $(this)[0].reset();
//       // console.log('отправляем')
//       ym(82308838, "reachGoal", "form-submit");
//       closePop(
//         document.querySelector(".form--header-menu-callback-wrapper"),
//         document.querySelector(".form--header-menu-callback")
//       );
//       showPop(
//         document.querySelector(".pop-thanks-wrapper"),
//         document.querySelector(".pop-thanks")
//       );
//       setTimeout(function () {
//         closePop(
//           document.querySelector(".pop-thanks-wrapper"),
//           document.querySelector(".pop-thanks")
//         );
//       }, 5000);
//       return false;
//     });
//   });
// });

var lazyLoadInstance = new LazyLoad();

const reviewsSlider = new Swiper('.reviews-slider', {
  grabCursor: true,
  slidesPerView: 1,
  // spaceBetween: 35,
  effect: 'creative',
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ['100%', 0, 0],
    },
  },
  navigation: {
    nextEl: '.reviews-slider__button-next',
    prevEl: '.reviews-slider__button-prev',
  },
  pagination: {
    el: '.reviews-slider__pagination',
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    1200: {
      slidesPerView: 2,
    }
  }
});

poppa({
  pop: '.popups-callback',
  clickTrigger: ['.question__button', '.header-contacts__button'],
})


/**
 * TABS
 */
const whoTabButtons = [...document.querySelectorAll('.who-tablist-controls__button')];
const whoTabs = [...document.querySelectorAll('.who-tablist-tabs-tab')];
const BOtabActiveClass = 'tab-active';
const BOtabAttr = 'data-tab';

if (whoTabButtons.length > 0 && whoTabs.length > 0) {
  whoTabButtons.forEach(button => {
    button.addEventListener('click', function() {
      whoTabButtons.forEach(tabButton => {
        tabButton.classList.remove(BOtabActiveClass);
      });

      this.classList.add(BOtabActiveClass);
      const tabButtonNumber = this.getAttribute(BOtabAttr);
      whoTabs.forEach(tab => {
        const tabNumber = tab.getAttribute(BOtabAttr);

        tab.classList.remove(BOtabActiveClass);
        if (tabButtonNumber === tabNumber) {
          tab.classList.add(BOtabActiveClass);
        }
      })
    })
  });
}

// /TABS
