/* Makes text fade on scroll*/

$(window).scroll(function(){
    $(".hero-title").css("opacity", 1 - $(window).scrollTop() / 150);
  });