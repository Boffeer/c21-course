// $(document).ready(function () {

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

window.addEventListener('DOMContentLoaded', () => {
  var lazyLoadInstance = new LazyLoad();

  const header = document.querySelector('.header');

  /**
    * Sticky Header
    */
   const isWindowScrolled = () => window.scrollY > 100;
   const isStickyHeaderAllowed = () => window.innerWidth >= 768;
   const headerScrolledClass = 'header--scrolled';
   let lastScrollY = 0;

   function stickyHeader() {
      if (isWindowScrolled()) {
        header.classList.add(headerScrolledClass);
      } else {
        header.classList.remove(headerScrolledClass);
      }

      if (window.scrollY > lastScrollY) {
        header.classList.add('header--hidden');
      } else {
        header.classList.remove('header--hidden');
      }

      setTimeout(() => {
        lastScrollY = window.scrollY;
      }, 100)
   }
   window.addEventListener('scroll', () => {
     stickyHeader();
   })
   stickyHeader();
   // /sticky header



  /**
   * BURGER
   */
  const headerOpenedClass = 'header--opened';
  const headerBurger = document.querySelector('.header__burger')
  headerBurger.addEventListener('click', function() {

    if (header.classList.value.includes(headerOpenedClass)) {
      header.classList.remove(headerOpenedClass);
      document.querySelector('html').classList.remove('poppa-block-scrolling')
    } else {
      header.classList.add(headerOpenedClass);
      document.querySelector('html').classList.add('poppa-block-scrolling')
    }
  });
  // /BURFER

  // Close burger on click beyond popup
  window.addEventListener('click', function(event) {
    if (event.target === document.querySelector('.header__menu-wrap')) {
      headerBurger.click();
    }
  });

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
  });


  /**
   * .who TABS
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
  // / .whoTABS


  /**
   * .programm DROPDOWNS
   */
  const dropdowns = [...document.querySelectorAll('.programm-modules-module-top')];
  const dropdownOpenedClass = 'opened';

  function toggleDropdown(dropdownTop, dropdownBottom, dropdownOpenedClass, dropdownBottomHeight) {
    if (dropdownTop.parentElement.classList.value.includes(dropdownOpenedClass)) {
      dropdownBottom.style.maxHeight = '0';
      dropdownTop.parentElement.classList.remove(dropdownOpenedClass);
    } else {
      dropdownBottom.style.maxHeight = `${dropdownBottomHeight + 20}px`;
      dropdownTop.parentElement.classList.add(dropdownOpenedClass);
    }
  }

  dropdowns.forEach((dropdown, index) => {
    const currentBottom = dropdown.parentElement.querySelector('.programm-modules-module-bottom');
    const currentBottomHeight = currentBottom.clientHeight;
    dropdown.addEventListener("click", function() {
      toggleDropdown(this, currentBottom, dropdownOpenedClass, currentBottomHeight);
    });

    setTimeout(() => {
      dropdown.click();
      if (index > 0) {
        toggleDropdown(dropdown, currentBottom, dropdownOpenedClass, currentBottomHeight);
      }
    }, 200)
  });

  // / .programm DROPDOWNS
});
