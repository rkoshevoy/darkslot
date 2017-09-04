// Preloader
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

$(function() {

  var niceScrollSettings = {
    cursorcolor: "#de3137",
    cursorborder: "1px solid #de3137",
    cursorborderradius: 0,
    cursoropacitymax: 0.7,
    boxzoom: true,
    autohidemode: "leave",
    grabcursorenabled: false,
    // horizrailenabled: false,
    touchbehavior: false, // DEPRECATED!! use "touchemulate"
    emulatetouch: false // enable cursor-drag scrolling like touch devices in desktop computer
  };

  if ($(window).width() > 1200) {
    $('html').niceScroll(niceScrollSettings);
  }

  $('#modalPolicy, #modalRules').on('shown.bs.modal', function () {

    $(".rules").getNiceScroll().remove();
    $(".rules").niceScroll(niceScrollSettings);
  });

  $("#rules-wrap .rules").niceScroll(niceScrollSettings);

});
