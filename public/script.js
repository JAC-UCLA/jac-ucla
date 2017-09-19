$(window).scroll(function(){
    $(".main-arrow").css("opacity", 1 - $(window).scrollTop() / 250);
});

$(".main-arrow").click(function() {
    $('html, body').animate({
        scrollTop: $("#id_about").offset().top
    }, 1000);
})

$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});