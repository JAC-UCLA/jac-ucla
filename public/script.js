$(window).scroll(function(){
    $(".main-arrow").css("opacity", 1 - $(window).scrollTop() / 250);
});