$(document).ready(function () {
  
  const swiper = new Swiper(".hero_slider .swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    loop: true,
    spaceBetween: 20,
    slidesPerView: 'centered',
    autoplay: {
      delay: 10000
    },
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        effect: 'none'
      },
      576: {
        slidesPerView: 2,
        effect: 'none'
      },
      1050: {
        slidesPerView: 2,
        effect: 'none',
        navigation: 'none'
      },
      1320: {
        slidesPerView: 3,
        effect: 'coverflow'
      },
    }   
  });
  $('.slide_card').fancybox({
  });

  // TABS
  $('.tabs_content .tab_item').hide();
  $('.tabs_content .tab_item').first().show();

  $(".tab_btn").on("click", function() {

    $(".tab_btn").removeClass('active');

    $(this).addClass('active');

    const tabId = $(this).data("tab");

    $('.tabs_content .tab_item').hide();

    $("#" + tabId).show();
  });

  $('.tabs .tab_btn').first().addClass('active');

       /*-----------------
        HAMBURGER MENU
    -----------------*/
    $("#hamburger_btn").on("click", function (e) {
      e.preventDefault();
      $(".hamburger_menu, .overlay").addClass("active");
      $('body').addClass('disable');
    });
    $(".hamburger_close, .overlay").on("click", function () {
      $(".hamburger_menu, .overlay").removeClass("active");
      $('body').removeClass('disable');
    });
    /*-----------------
        HAMBURGER MENU
    -----------------*/


    // FORM
    $("#phone").mask("+999 (99) 999 99 99");
});
