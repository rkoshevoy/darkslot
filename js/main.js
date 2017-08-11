var preloader = document.getElementById("preloader");
function fadeOutnojquery(el){
  el.style.opacity = 1;
  var innerpreloader = setInterval(function() {
    el.style.opacity = el.style.opacity - 0.05;
    if (el.style.opacity <= 0.05) {
      clearInterval(innerpreloader);
      preloader.style.display = "none";
    }
  },16);
}
window.onload = function(){setTimeout(function(){fadeOutnojquery(preloader);
},1000);};

$(window).on("load",function(){
  $('select').styler();

  $(".modal-about__scroll-content").mCustomScrollbar();

  $('.slider').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    arrows: true,
    responsive: [
    {
      breakpoint: 788,
      settings: {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        arrows: false
      }
    }
    ]
  });

  $('.blog-slider__wrapper').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    arrows: true,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        arrows: false
      }
    }
    ]
  });

  $('body').on('click', '#topGamesBtn, #gamesJackpot, #menu-games a', function(event) {
    event.preventDefault();

    var isHomePage = $('body').hasClass('page-home');
    var anchor = 0;

    if (isHomePage) {
      anchor = $('#gamesPannel').offset().top - $('.header').height();
      $('body, html').animate({scrollTop: anchor}, 1000);
    } else {
      window.location.href = '/';
      setTimeout(function() {
        anchor = $('#gamesPannel').offset().top - $('.header').height();
        $('body, html').animate({scrollTop: anchor}, 1000);

      }, 1000);
    }



  });

});
