    var swiper = new Swiper(".heroSwiper", {
      direction: "vertical",
      allowTouchMove: false,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '"></span>';
        },
      },
      navigation: {
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
      },
      loop: true,
    });

    var swiper = new Swiper(".popularSwiper", {
      effect: "coverflow",
      grabCursor: true,
      loop: true,
      slidesPerView: 3,
      centerInsufficientSlides: true,
      initialSlide: 1,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 400,
        modifier: 1,
        slideShadows: true,
      }
    });

    var swiper = new Swiper(".recommendSwiper", {
      slidesPerView: 4,
      spaceBetween: 24,
      pagination: {
        el: ".custom-pagination-recommend",
        clickable: true,
        renderBullet: function (index, className) {
          return `<li class="${className} bullet_recommend" style="margin: 0;"></li>`;
        },
      },
    });

    var swiper = new Swiper(".tourSwiper", {
      slidesPerView: 4,
      spaceBetween: 24,
      pagination: {
        el: ".custom-pagination-tour",
        clickable: true,
        renderBullet: function (index, className) {
          return `<li class="${className} bullet_tour" style="margin: 0;"></li>`;
        },
      },
    });