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

  $('#modalPolicy, #modalRules').on('shown.bs.modal', function () {

    $(".rules").getNiceScroll().remove();
    $(".rules").niceScroll(
      {
        cursorcolor: "#de3137",
        cursorborder: "1px solid #de3137",
        cursorborderradius: 0,
        cursoropacitymax: 0.7,
        boxzoom: true,
        touchbehavior: true,
        autohidemode: "leave"
      });
  })

});

// $(document).ready(function() {
//
//   $("#modalPolicy").niceScroll(".rules", {cursorcolor:"#F00",cursoropacitymax:0.7,boxzoom:true,touchbehavior:true}); // First scrollable DIV
//
//   $(".rules").niceScroll( {cursorcolor:"#F00",cursoropacitymax:0.7,boxzoom:true,touchbehavior:true});
//
// });
