$(window).scroll(function(){
    $(".main-arrow").css("opacity", 1 - $(window).scrollTop() / 250);
});

$(".main-arrow").click(function() {
    $('html, body').animate({
        scrollTop: $("#id_about").offset().top
    }, 1000);
})